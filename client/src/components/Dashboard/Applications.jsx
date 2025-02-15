import { useEffect, useState } from "react";
import axios from "axios";
import { NoApplications } from "./NoApplication";
import useAuth from "../../hooks/useAuth";

export function Applications() {
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useAuth();

    useEffect(() => {
        const fetchApplications = async () => {
            console.log(user);
            try {
                const response = await axios.post("/api/application/get", {
                    token: user.token
                });

                if (response.data.success) {
                    setApplications(response.data.forms);
                } else {
                    setApplications([]);
                }
            } catch (error) {
                console.error("Error fetching applications:", error);
                setApplications([]);
            } finally {
                setLoading(false);
            }
        };

        if (user.token) {
            fetchApplications();
        }
    }, [user]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-full">
                <p className="text-center text-gray-600 text-lg">Loading applications...</p>
            </div>
        );
    }

    if (applications.length === 0) {
        return <NoApplications />;
    }

    return (
        <div className="w-full max-w-2xl mx-auto p-6 h-full overflow-y-auto">
            <div className="flex items-center gap-3 mb-6">
                <svg className="w-8 h-8 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 6h8M8 12h8M8 18h4"></path>
                    <rect x="3" y="4" width="18" height="16" rx="2"></rect>
                </svg>
                <h2 className="text-2xl font-semibold text-gray-800">Your Applications</h2>
            </div>

            {applications.map((app) => (
                <div key={app._id} className="border border-gray-200 p-5 mb-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
                    <div className="flex items-center justify-between">
                        <p className="text-lg font-medium text-gray-700">{app.type}</p>
                        <span className={`px-3 py-1 text-sm font-semibold rounded-full ${app.status === "Pending" ? "bg-yellow-100 text-yellow-700" : "bg-green-100 text-green-700"}`}>
                            {app.status}
                        </span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">Submitted on: {new Date(app.createdAt).toLocaleDateString()}</p>
                </div>
            ))}
        </div>
    );
}
