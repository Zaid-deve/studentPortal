import { Link } from 'react-router-dom'

export default function Default() {
    return (
        <div className="container flex justify-around items-center text-center h-full">
            <div className="max-w-lg mx-auto">
                <h1 className="text-4xl mt-6 font-bold">Welcome to Student Portal</h1>
                <p className="text-sm mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nemo, exercitationem veniam beatae dolorem asperiores facilis voluptates unde impedit assumenda, praesentium itaque velit aperiam deserunt magnam dignissimos, expedita culpa suscipit.</p>
                <Link to="/dashboard/account" className="btn mt-8">View Profile</Link>
            </div>
        </div>
    )
}