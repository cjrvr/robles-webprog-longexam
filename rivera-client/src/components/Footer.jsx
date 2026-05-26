function Footer() {
  return (
    <footer className="bg-black text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
      
          <div>
            <h1 className="text-3xl font-bold tracking-[0.2em] text-yellow-500">
              Lib BEAUTY
            </h1>

            <p className="text-gray-400 mt-3 max-w-sm text-sm">
              Luxury-inspired beauty essentials designed for elegance,
              confidence, and timeless glamour.
            </p>
          </div>

 
          <div className="flex gap-8 text-sm uppercase tracking-wide">
            <a
              href="/"
              className="hover:text-yellow-500 transition duration-300"
            >
              Home
            </a>

            <a
              href="/products"
              className="hover:text-yellow-500 transition duration-300"
            >
              Products
            </a>

            <a
              href="/about"
              className="hover:text-yellow-500 transition duration-300"
            >
              About
            </a>

            <a
              href="/auth/signin"
              className="hover:text-yellow-500 transition duration-300"
            >
              Sign In
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
          © 2026 Lib. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;