import {Link} from 'react-router-dom'

export function Forms() {
    return (
        <div className="container h-full w-full p-6 mx-auto overflow-y-auto">
            <div className="mb-5">
                <h1 className="text-3xl font-bold">Apply for an application</h1>
            </div>
            <div className="flex flex-wrap gap-6 items-start">
                <div className="w-full max-w-sm p-5 bg-gray-50 rounded-lg shadow-lg text-center">
                    <svg className="w-16 h-16 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                    </svg>
                    <h3 className="text-lg font-bold text-gray-800 mt-4">Admission Application</h3>
                    <p className="text-gray-600 mt-2">Apply for a new admission in the upcoming semester.</p>
                    <Link to="/student/apply/0" className="btn mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500">Apply Now</Link>
                </div>
                <div className="w-full max-w-sm p-5 bg-gray-50 rounded-lg shadow-lg text-center">
                    <svg className="w-16 h-16 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <h3 className="text-lg font-bold text-gray-800 mt-4">Scholarship Application</h3>
                    <p className="text-gray-600 mt-2">Apply for financial aid and scholarships.</p>
                    <Link to="/student/apply/1" className="btn mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500">Apply Now</Link>
                </div>
                <div className="w-full max-w-sm p-5 bg-gray-50 rounded-lg shadow-lg text-center">
                    <svg className="w-16 h-16 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12H9m6 0H9m6 0H9m6 0H9m6 0H9" />
                    </svg>
                    <h3 className="text-lg font-bold text-gray-800 mt-4">Course Change Request</h3>
                    <p className="text-gray-600 mt-2">Request a change in your enrolled courses.</p>
                    <Link to="/student/apply/2" className="btn mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500">Request Change</Link>
                </div>
            </div>
            <div className="mt-10 text-center text-gray-500">Dont use any emoji or modern english, please fill your forms in professional manner</div>
        </div>
    );
}