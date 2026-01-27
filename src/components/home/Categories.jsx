import React from "react";
import { Link } from "react-router";

const Categories = () => {
  return (
    <section className="pb-120">
      <div className="container">
        <div className="mb-10 flex items-center justify-between pb-4 border-b border-primary/30 relative after:absolute after:w-full after:max-w-96 after:h-1 after:left-0 after:bottom-0 after:rounded-full after:bg-brand">
          <h2 className="heading">
            Shop From Top <span>Categories</span>
          </h2>
          <Link to="/">View All</Link>
        </div>
        <div className="grid grid-cols-6 gap-4"></div>
      </div>
    </section>
  );
};

export default Categories;
