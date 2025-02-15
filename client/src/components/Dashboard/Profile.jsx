import { useState, useEffect } from "react";
import pfp from "/src/assets/images/pfp.jpg";
import useAuth from "/src/hooks/useAuth";

export default function Account() {
    const { user, logout } = useAuth();
    const [formData, setFormData] = useState({ fullName: "", email: "", phone: "" });

    useEffect(() => {
        if (user.user) {
            setFormData({...user.user});
        }
    }, [user]);

    return (
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm mx-auto">
            <div className="flex flex-col items-center pb-10">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={pfp} alt="Profile" />
                <form className="space-y-6 w-full px-6">
                    <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-900">
                            Full Name
                        </label>
                        <input
                            id="fullName"
                            name="fullName"
                            type="text"
                            value={formData.fullName}
                            className="inp"
                            readOnly
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                            Email Address
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            className="inp bg-gray-300"
                            readOnly
                        />
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-900">
                            Phone Number
                        </label>
                        <input
                            id="phone"
                            name="phone"
                            type="text"
                            value={formData.phone}
                            className="inp"
                            readOnly
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}
