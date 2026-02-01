import React from "react";
import { Link } from "react-router";

const Categories = () => {
  const category = [
    {
      title: "Mobile",
      src: "/product.png",
    },
    {
      title: "Cosmetics",
      src: "/product.png",
    },
    {
      title: "Electronics",
      src: "/product.png",
    },
    {
      title: "Furniture",
      src: "/product.png",
    },
    {
      title: "Watches",
      src: "/product.png",
    },
    {
      title: "Decor",
      src: "/product.png",
    },
    {
      title: "Accessories",
      src: "/product.png",
    },
  ];
  return (
    <section className="pb-32">
      <div className="container">
        <div className="mb-10 flex items-center justify-between pb-4 border-b border-primary/30 relative after:absolute after:w-full after:max-w-96 after:h-1 after:left-0 after:bottom-0 after:rounded-full after:bg-brand">
          <h2 className="heading">
            Shop From Top <span>Categories</span>
          </h2>
          <Link to="/">View All</Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-4">
          {category.map((item) => (
            <Link
              // to={item.link}
              key={item.title}
              className="flex flex-col items-center"
            >
              <div className="bg-secondary w-32 h-32 border border-transparent hover:border-brand hover:shadow-2xl rounded-full flex items-center justify-center">
                <img
                  src={item.src}
                  alt="category"
                  className="w-auto h-auto max-w-4/5 max-h-4/5"
                />
              </div>
              <h3 className="mt-5 text-primary font-medium text-base">
                {item.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
