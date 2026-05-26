import ProductList from "../../components/ProductList";

function ProductListPage() {
  return (
    <main className="bg-[#fffaf7] min-h-screen">
      <section className="bg-black text-white py-24 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-yellow-500 uppercase tracking-[0.4em] text-sm mb-4">
            Luxury Collection
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Beauty Essentials
          </h1>

          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Explore luxury-inspired makeup products designed for elegant,
            modern, and timeless beauty looks.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-20">
        <ProductList />
      </section>
    </main>
  );
}

export default ProductListPage;