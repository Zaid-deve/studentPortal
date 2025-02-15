import { Link } from 'react-router-dom'


export function NoApplications() {
    return (
        <div className="flex flex-col items-center justify-center h-full text-center">
            <svg className="w-24 h-24 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-3-3v6m5 4H5a2 2 0 01-2-2V7a2 2 0 012-2h4l2-2h2l2 2h4a2 2 0 012 2v11a2 2 0 01-2 2z" />
            </svg>
            <p className="mt-4 text-gray-500 text-xl font-bold">No applications yet</p>
            <p className="text-gray-400 mt-3">You haven’t submitted any applications. Start by creating one.</p>
            <Link to="/student/applications" className="mt-4 px-12 py-3 bg-indigo-600 text-white rounded hover:bg-indigo-500 rounded-full">Create Application</Link>
        </div>
    );
}
