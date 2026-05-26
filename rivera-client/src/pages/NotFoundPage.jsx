import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-20">
      <div className="text-center max-w-2xl">
        <p className="text-yellow-500 uppercase tracking-[0.5em] text-sm mb-5">
          404 Page Not Found
        </p>

        <h1 className="text-6xl md:text-8xl font-bold mb-8">
          Lost Your Glow?
        </h1>

        <p className="text-gray-300 text-lg leading-8 mb-10">
          The page you are looking for is not available. Return to Lib and
          continue exploring luxury-inspired beauty essentials.
        </p>

        <Link
          to="/"
          className="inline-block bg-yellow-500 text-black px-8 py-4 rounded-full font-semibold hover:bg-white transition duration-300"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}

export default NotFoundPage;