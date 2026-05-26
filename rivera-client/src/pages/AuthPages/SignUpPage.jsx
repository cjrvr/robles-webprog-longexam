import { Link } from "react-router-dom";

function SignUpPage() {
  return (
    <main className="min-h-screen bg-[#fffaf7] flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-md bg-white border border-neutral-200 rounded-[2rem] p-10 shadow-sm">

        <div className="text-center mb-10">
          <p className="text-yellow-700 uppercase tracking-[0.4em] text-sm mb-3">
            Join Lib
          </p>

          <h1 className="text-5xl font-bold text-black mb-4">
            Create Account
          </h1>

          <p className="text-neutral-500">
            Start your luxury beauty experience.
          </p>
        </div>

        <form className="space-y-6">

          <div>
            <label className="block mb-2 text-sm text-neutral-600">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full border border-neutral-300 rounded-full px-5 py-4 outline-none focus:border-yellow-500"
            />
          </div>

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
              placeholder="Create password"
              className="w-full border border-neutral-300 rounded-full px-5 py-4 outline-none focus:border-yellow-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-4 rounded-full hover:bg-yellow-500 hover:text-black transition duration-300"
          >
            Create Account
          </button>
        </form>

        <p className="text-center text-neutral-500 mt-8">
          Already have an account?{" "}
          <Link
            to="/auth/signin"
            className="text-yellow-700 font-semibold"
          >
            Sign In
          </Link>
        </p>
      </div>
    </main>
  );
}

export default SignUpPage;