import { useParams } from "react-router-dom";
import products from "../../assets/product-content";

function ProductPage() {
  const { name } = useParams();

  const product = products.find(
    (item) => item.name === name
  );

  if (!product) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#fffaf7]">
        <h1 className="text-4xl font-bold text-black">
          Product Not Found
        </h1>
      </main>
    );
  }

  return (
    <main className="bg-[#fffaf7] min-h-screen py-20 px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        <div className="bg-black rounded-[2rem] h-[600px] flex items-center justify-center p-14 shadow-xl">
          <img
            src={product.image}
            alt={product.title}
            className="h-full object-contain"
          />
        </div>

        <div>
          <p className="text-yellow-700 uppercase tracking-[0.3em] text-sm mb-4">
            {product.category}
          </p>

          <h1 className="text-6xl font-bold text-black mb-6">
            {product.title}
          </h1>

          <p className="text-4xl font-bold text-black mb-8">
            {product.price}
          </p>

          <div className="space-y-5 text-neutral-600 leading-8 mb-10 text-lg">
            {product.content.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>

          <button className="bg-black text-white px-10 py-4 rounded-full hover:bg-yellow-500 hover:text-black transition duration-300 text-lg">
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}

export default ProductPage;