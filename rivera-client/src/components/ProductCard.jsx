import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-[2rem] overflow-hidden border border-neutral-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition duration-300">
      
      <div className="bg-black h-[320px] flex items-center justify-center p-10">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain"
        />
      </div>

      <div className="p-8">
        <p className="text-sm uppercase tracking-[0.3em] text-yellow-700 mb-3">
          {product.category}
        </p>

        <h2 className="text-2xl font-bold text-black mb-3">
          {product.title}
        </h2>

        <p className="text-neutral-500 mb-6 leading-7">
          {product.content[0]}
        </p>

        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold text-black">
            {product.price}
          </h3>

          <Link
            to={`/products/${product.name}`}
            className="bg-black text-white px-6 py-3 rounded-full hover:bg-yellow-500 hover:text-black transition duration-300"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;