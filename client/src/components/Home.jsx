import studentImg from '/src/assets/images/student.webp';
import { Link } from 'react-router-dom'


export default function Home() {
    return (
        <div className="container flex justify-around h-full items-center">
            <div className="mx-auto flex gap-10 max-w-4xl">
                <div style={{
                    borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70% '
                }} className='bg-black h-70 w-70 flex items-end overflow-hidden mx-auto shrink-0'>
                    <img src={studentImg} alt="#" className='h-full w-full object-contain' />
                </div>
                <div>
                    <h1 className="text-4xl mt-6">Welcome to Student Portal</h1>
                    <p className="text-sm mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nemo, exercitationem veniam beatae dolorem asperiores facilis voluptates unde impedit assumenda, praesentium itaque velit aperiam deserunt magnam dignissimos, expedita culpa suscipit.</p>
                    <Link to="/student/login" className="btn mt-8">Get Started</Link>
                </div>
            </div>
        </div>
    )
}