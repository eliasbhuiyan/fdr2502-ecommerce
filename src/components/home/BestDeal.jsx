import React from "react";
import { Link } from "react-router";
import ProductCard from "../ui/ProductCard";
import { useGetProductsQuery } from "../../services/api";

const BestDeal = () => {
  const { data, isError, error, isLoading } = useGetProductsQuery({
      limit: 6,
      category: "smartphones"
    });
    console.log(data);
    
  return (
    <section className="py-120">
      <div className="container">
        <div className="mb-10 flex items-center justify-between pb-4 border-b border-primary/30 relative after:absolute after:w-full after:max-w-96 after:h-1 after:left-0 after:bottom-0 after:rounded-full after:bg-brand">
          <h2 className="heading">
            Grab the best deal on <span>Smartphones</span>
          </h2>
          <Link to="/shop?category=smartphones">View All</Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {
            data?.products.map((item)=>(
              <ProductCard key={item.id} data={item}/>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default BestDeal;
