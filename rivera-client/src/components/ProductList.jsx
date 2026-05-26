import products from "../assets/product-content";
import ProductCard from "./ProductCard";

function ProductList() {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
      {products.map((product) => (
        <ProductCard
          key={product.name}
          product={product}
        />
      ))}
    </div>
  );
}

export default ProductList;