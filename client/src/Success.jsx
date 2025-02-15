import { useNavigate } from "react-router-dom";

export default function SuccessPage() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center h-scree">
            <div className="bg-white p-6 rounded-lg text-center">
                <svg
                    className="w-16 h-16 text-green-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                </svg>

                <h2 className="mt-4 text-2xl font-bold text-gray-900">Request Submitted!</h2>
                <p className="mt-2 text-gray-600">Your request has been successfully submitted.</p>

                <button
                    onClick={() => navigate("/")}
                    className="btn fotn-bold mt-4"
                >
                    Go to Home
                </button>
            </div>
        </div>
    );
}
