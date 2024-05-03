'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Register = () => {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const { push } = useRouter();

  const handleSubmitRegister = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({
        username: e.target.username.value,
        email: e.target.email.value,
        password: e.target.password.value,
      }),
    });
    if (response.status === 200) {
      e.target.reset();
      setLoading(false);
      push('/login');
    } else {
      setLoading(false);
      setMessage('*email sudah ada');
    }
  };
  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
      <p className="text-red-secondary">{message}</p>
      <form className="space-y-4" onSubmit={handleSubmitRegister}>
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            Username
          </label>
          <div className="mt-2">
            <input
              name="username"
              type="text"
              autoComplete="on"
              placeholder="John Dee"
              required
              className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            Email address
          </label>
          <div className="mt-2">
            <input
              name="email"
              type="email"
              autoComplete="email"
              placeholder="example@gmail.com"
              required
              className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Password
            </label>
            {/* <div className="text-sm">
                                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                    Forgot password?
                                </a>
                            </div> */}
          </div>
          <div className="mt-2">
            <input
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="block w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
            disabled={loading}
            type="submit"
            className="flex w-full justify-center rounded-md bg-primary disabled:bg-slate-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {loading ? 'Loading...' : 'Sign Up'}
          </button>
        </div>
      </form>

      <p className="mt-6 text-center text-sm text-gray-500">
        Have an account?
        <Link
          href="/login"
          className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 ml-1"
        >
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default Register;
