import { Link } from "react-router-dom";

function SignInPage() {
  return (
    <main className="min-h-screen bg-[#fffaf7] flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-md bg-white border border-neutral-200 rounded-[2rem] p-10 shadow-sm">
        
        <div className="text-center mb-10">
          <p className="text-yellow-700 uppercase tracking-[0.4em] text-sm mb-3">
            Welcome Back
          </p>

          <h1 className="text-5xl font-bold text-black mb-4">
            Sign In
          </h1>

          <p className="text-neutral-500">
            Access your Lib beauty account.
          </p>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block mb-2 text-sm text-neutral-600">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-neutral-300 rounded-full px-5 py-4 outline-none focus:border-yellow-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-neutral-600">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border border-neutral-300 rounded-full px-5 py-4 outline-none focus:border-yellow-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-4 rounded-full hover:bg-yellow-500 hover:text-black transition duration-300"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-neutral-500 mt-8">
          Don’t have an account?{" "}
          <Link
            to="/auth/signup"
            className="text-yellow-700 font-semibold"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </main>
  );
}

export default SignInPage;