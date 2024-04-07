'use client'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { FaGithub } from 'react-icons/fa6'
import { FcGoogle } from 'react-icons/fc'

const Login = () => {
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const query = useSearchParams()
  const { push } = useRouter()

  const callbackUrl = query.get('callbackUrl') || '/'
  const handleLogin = async (e: any) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')
    try {
      const res = await signIn('credentials', {
        redirect: false,
        email: e.target.email.value,
        password: e.target.password.value,
        callbackUrl,
      })
      if (!res?.error) {
        setLoading(false)
        push(callbackUrl)
      } else {
        console.log(res.error)
        setLoading(false)
        setMessage('*email atau password tidak cocok')
      }
    } catch (error: any) {
      console.log(error)
      setMessage(error)
      setLoading(false)
    }
  }

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
      <p className="text-red-secondary">{message}</p>
      <form className="space-y-4" onSubmit={handleLogin}>
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
            className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {loading ? 'Loading...' : 'Sign in'}
          </button>
        </div>
      </form>
      <p className="text-center my-2">or</p>
      <div className="flex flex-col gap-3">
        <div>
          <button
            type="submit"
            className="flex w-full justify-center items-center gap-2 rounded-md bg-white px-3 py-1.5 text-sm font-semibold leading-6 border text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <FcGoogle />
            Continue with Google
          </button>
        </div>
        <div>
          <button
            type="submit"
            className="flex w-full justify-center items-center gap-2 rounded-md bg-black-gray px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-black-gray focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black-gray"
          >
            <FaGithub />
            Continue with Github
          </button>
        </div>
      </div>
      <p className="mt-6 text-center text-sm text-gray-500">
        Dont&apos; Have an account?
        <Link
          href="/register"
          className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 ml-1"
        >
          Sign Up
        </Link>
      </p>
    </div>
  )
}

export default Login
