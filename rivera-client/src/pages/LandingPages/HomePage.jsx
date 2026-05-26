import { Link } from "react-router-dom";
import products from "../../assets/product-content";

function HomePage() {
  const featuredProduct = products[0];

  return (
    <main className="bg-[#fffaf7]">
      <section className="min-h-[80vh] bg-black text-white flex items-center">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-yellow-500 uppercase tracking-[0.4em] text-sm mb-4">
              Luxury Makeup Collection
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Beauty Made Elegant
            </h1>

            <p className="text-gray-300 text-lg mb-8 max-w-xl">
              Discover luxury-inspired makeup essentials made for confidence,
              elegance, and timeless glam.
            </p>

            <Link
              to="/products"
              className="inline-block bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-white transition duration-300"
            >
              Shop Collection
            </Link>
          </div>

          <div className="bg-[#161616] rounded-[2rem] p-8 border border-yellow-500/30">
            <div className="bg-[#fffaf7] rounded-[1.5rem] p-10 text-black">
              <div className="h-[260px] flex items-center justify-center mb-8">
                <img
                  src={featuredProduct.image}
                  alt={featuredProduct.title}
                  className="h-full object-contain"
                />
              </div>

              <p className="text-sm uppercase tracking-[0.3em] text-yellow-700 mb-3">
                Featured Beauty Pick
              </p>

              <h2 className="text-4xl font-bold mb-4">
                {featuredProduct.title}
              </h2>

              <p className="text-neutral-600 mb-6">
                {featuredProduct.content[0]}
              </p>

              <p className="text-3xl font-bold text-black">
                {featuredProduct.price}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="text-center mb-14">
          <p className="text-yellow-700 uppercase tracking-[0.3em] text-sm mb-3">
            Why Choose Us
          </p>

          <h2 className="text-4xl font-bold text-black">
            Timeless Beauty Essentials
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-200">
            <h3 className="text-2xl font-bold mb-3">Luxury Look</h3>

            <p className="text-neutral-600">
              Sleek, elegant, and modern makeup products inspired by high-end
              beauty.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-200">
            <h3 className="text-2xl font-bold mb-3">Everyday Glam</h3>

            <p className="text-neutral-600">
              Products designed for soft daily looks, formal events, and night
              glam.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-200">
            <h3 className="text-2xl font-bold mb-3">Premium Finish</h3>

            <p className="text-neutral-600">
              Smooth textures, elegant shades, and polished finishes for every
              style.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;