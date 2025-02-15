import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from '../../../hooks/useAuth'
import axios from "axios";

export default function Form_1() {
    const [amount, setAmount] = useState("");
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState("");
    const navigate = useNavigate();
    const { user } = useAuth();

    function handleChange(e) {
        setAmount(e.target.value);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setAlert("");

        if (!amount || isNaN(amount) || Number(amount) <= 0) {
            setAlert("Please enter a valid scholarship amount.");
            return;
        }

        setLoading(true);

        try {
            const response = await axios.post("/api/application/scholarship", {
                type: "apply_scholarship",
                amount: Number(amount),
                token:user.token
            });

            navigate("/success");
        } catch (error) {
            setAlert(error.response?.data?.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="container h-full flex items-center flex-col">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
                    Apply for Scholarship
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                {alert && <div className="mb-4 p-2 text-red-600 bg-red-100 border border-red-400 rounded">{alert}</div>}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="amount" className="block mb-2 text-sm font-medium text-gray-900">
                            Scholarship Amount
                        </label>
                        <input
                            type="number"
                            id="amount"
                            name="amount"
                            value={amount}
                            onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Enter scholarship amount"
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            className={`relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                                loading ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                            disabled={loading}
                        >
                            {loading ? (
                                <div className="flex items-center justify-center">
                                    <svg className="w-5 h-5 animate-spin text-white" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                                    </svg>
                                </div>
                            ) : (
                                "Apply Now"
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
