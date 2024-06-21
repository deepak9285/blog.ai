import { login, signup } from './actions'

export default function LoginPage() {
  return (
    <div className="max-w-md mx-auto mt-20  p-6 bg-gray-100 border border-gray-300 rounded-md shadow-lg">
    <form className="space-y-4">
      <div>
        <label htmlFor="email" className="block font-semibold">Email:</label>
        <input id="email" name="email" type="email" required className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
      </div>
      <div>
        <label htmlFor="password" className="block font-semibold">Password:</label>
        <input id="password" name="password" type="password" required className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
      </div>
      <div>
        <button type="submit" formAction={login} className="w-full px-4 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">Log in</button>
      </div>
      <div>
        <button type="submit" formAction={signup} className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Sign up</button>
      </div>
    </form>
  </div>
  )
}