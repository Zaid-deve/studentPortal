import { Link, Outlet, useNavigate } from "react-router-dom";
import useAuth from '/src/hooks/useAuth';
import { useEffect } from "react";


export default function Dashboard() {
    const redirect = useNavigate();
    const { user,logout } = useAuth();

    useEffect(() => {
        if (!user.isLogin) {
            redirect('/student/login');
        }
    }, [user]);

    return (
        <div className="flex size-full md:flex-row flex-col overflow-y-auto">
            <aside className="md:max-w-[360px] w-full bg-gray-900 text-white py-8 px-6 flex flex-col space-y-6">
                <h1 className="text-xl font-bold">✌️ Student Dashboard</h1>
                <nav className="flex flex-col space-y-4">
                    <Link to="account" className="px-5 py-3 bg-gray-800 rounded-md hover:bg-gray-700 font-bold">Account</Link>
                    <Link to="applications" className="px-5 py-3 bg-gray-800 rounded-md hover:bg-gray-700 font-bold">Applications</Link>
                    <button className="btn" onClick={logout}>Logout</button>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6">
                <Outlet />
            </main>
        </div>
    );
}
