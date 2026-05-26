import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-black text-white px-8 py-5 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="text-3xl font-bold tracking-[0.25em] text-yellow-500"
        >
          Lib
        </Link>

        <div className="flex items-center gap-8 text-sm uppercase tracking-widest">
          <Link
            to="/"
            className="hover:text-yellow-500 transition duration-300"
          >
            Home
          </Link>

          <Link
            to="/products"
            className="hover:text-yellow-500 transition duration-300"
          >
            Products
          </Link>

          <Link
            to="/about"
            className="hover:text-yellow-500 transition duration-300"
          >
            About
          </Link>

          <Link
            to="/auth/signin"
            className="hover:text-yellow-500 transition duration-300"
          >
            Sign In
          </Link>

          <Link
            to="/auth/signup"
            className="border border-yellow-500 px-4 py-2 rounded-full hover:bg-yellow-500 hover:text-black transition duration-300"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;