import React from "react";
import ProductCard from "../ui/ProductCard";

const ProductList = () => {
  return (
    <section className="py-120">
      <div className="container">
        <div className="mb-6 flex justify-between">
          <p>
            Showing <span className="font-bold">(309 Items)</span>
          </p>
          <div className="flex items-center gap-4">
            <p>Displaying 1-10 of 41 Products</p>
            <select className="py-2 px-4 border rounded-2xl">
              <option value="">10</option>
              <option value="">20</option>
              <option value="">30</option>
              <option value="">40</option>
              <option value="">50</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-6">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </section>
  );
};

export default ProductList;
