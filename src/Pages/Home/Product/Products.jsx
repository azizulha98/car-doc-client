import { useEffect, useState } from "react";
import ProductsCard from "./ProductsCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('/public/products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])
  return (
    <div>
      <div className="text-center space-y-2 mt-10">
        <h2 className="text-xl font-bold text-[#FF3811]">Popular Products</h2>
        <h3 className="text-5xl text-[#151515] font-bold">Browse Our Products</h3>
        <p>the majority have suffered alteration in some form, by injected humour, or randomized <br /> words which don't look even slightly believable.</p>
      </div>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
          products.map(product => <ProductsCard key={product._id} product={product} />)
        }
      </div>
      <div className="flex items-center justify-center my-5">
        <button className="btn btn-outline btn-warning uppercase btn-sm">Moor Products</button>
      </div>
    </div>
  );
};

export default Products;