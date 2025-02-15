import { Link, useNavigate } from 'react-router-dom';
import useAuth from '/src/hooks/useAuth';
import { useEffect, useState } from 'react';
import axios from 'axios';
import UtilityHelper from '../../utils/helper';

export default function SignIn() {
    const redirect = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [alert, setAlert] = useState(null);
    const [loading, setLoading] = useState(false);
    const { user, setUser } = useAuth()

    useEffect(() => {
        if (user.isLogin) {
            redirect('/dashboard');
        }
    }, [user])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});
        setAlert(null);

        if (!email || !password) {
            setAlert('Email and Password are required');
            setErrors({
                email: !email ? 'Email is required' : '',
                password: !password ? 'Password is required' : ''
            });
            return;
        }

        if (!UtilityHelper.validateEmail(email)) {
            setAlert('Invalid email format');
            setErrors({ email: 'Invalid email format' });
            return;
        }

        setLoading(true);

        try {
            const response = await axios.post('/api/student/login', { email, password });
            setUser({
                isLogin: true,
                token: response.data.token,
                user: {
                    email,
                    phone: response.data.phone,
                    fullName: response.data.fullName
                }
            })

        } catch (error) {
            if (error.response) {
                setAlert(error.response.data.message || 'An error occurred');
                setErrors(error.response.data.errors || {});
            } else {
                setAlert('An error occurred while connecting to the server');
            }
        } finally {
            setLoading(false); // Stop loading
        }
    };

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    {alert && <div className="mb-4 p-2 text-red-600 bg-red-100 border border-red-400 rounded">{alert}</div>}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
                                />
                                {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                                Password
                            </label>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
                                />
                                {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password}</p>}
                            </div>
                        </div>

                        {/* <p className="text-end text-sm text-gray-500">
                            Forgotten Password?{' '}
                            <Link to="/student/forgot" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                Click Here
                            </Link>
                        </p> */}

                        <div>
                            <button
                                type="submit"
                                onClick={handleSubmit}
                                className={`relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${loading ? 'working' : ''}`}
                                disabled={loading}
                            >
                                <span className={`${loading ? 'hidden' : 'block'}`}>Sign in</span>
                                {loading && (
                                    <div className="flex items-center justify-center">
                                        <svg className="w-5 h-5 animate-spin text-white" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                                        </svg>
                                    </div>
                                )}
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Don’t have an account?{' '}
                        <Link to="/student/signup" className="font-semibold text-indigo-600 hover:text-indigo-500">
                            Signup here
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
}
