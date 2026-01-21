import React from "react";
import { BiChevronDown } from "react-icons/bi";
import { CiShoppingCart } from "react-icons/ci";
import { FaRegUser, FaSearch } from "react-icons/fa";
import { Link } from "react-router";

const Navbar = () => {
  const categories = [
    {
      title: "Phone",
      to: "",
      children: ["iPhone", "Samsung", "Nokia"],
    },
    {
      title: "Watch",
      to: "",
      children: ["iPhone", "Samsung", "Nokia"],
    },
    {
      title: "Laptop",
      to: "",
      children: ["iPhone", "Samsung", "Nokia"],
    },
    {
      title: "TWS",
      to: "",
      children: ["iPhone", "Samsung", "Nokia"],
    },
    {
      title: "Panjabi",
      to: "",
      children: ["iPhone", "Samsung", "Nokia"],
    },
    {
      title: "Shari",
      to: "",
      children: ["iPhone", "Samsung", "Nokia"],
    },
  ];
  return (
    <header>
      <nav className="py-5">
        <div className="container flex justify-between items-center">
          <Link to="/">
            <img src="/logo.png" alt="logo" />
          </Link>
          <div className="flex gap-2.5 items-center p-4 bg-[#F3F9FB] rounded-xl w-full max-w-lg">
            <FaSearch className="text-brand text-2xl" />
            <input
              type="text"
              placeholder="Search essentials, groceries and more..."
              className="text-base text-primary w-full outline-0"
            />
          </div>
          <div className="flex gap-10">
            <Link
              to="/signin"
              className="flex items-center gap-1.5 text-base font-bold text-primary relative after:absolute after:h-full after:w-0.5 after:bg-primary/40 after:top-0 after:-right-5"
            >
              <FaRegUser className="text-xl text-brand" /> Sign Up/Sign In
            </Link>
            <Link
              to="/signin"
              className="flex items-center gap-1.5 text-lg font-bold text-primary"
            >
              <CiShoppingCart className="text-2xl text-brand" /> Cart
            </Link>
          </div>
        </div>
      </nav>
      {/* Product Categories */}
      <div>
        <div className="container flex gap-5">
          {categories.map((item) => (
            <div key={item.title} className="relative group">
              <Link className="bg-third inline-block hover:bg-brand py-2 px-3 text-base font-medium rounded-2xl text-[#222222] hover:text-theme">
                <div className="flex items-center gap-1">
                  <p>{item.title}</p>
                  <BiChevronDown className="text-2xl" />
                </div>
              </Link>
              <ul className="absolute top-full left-0 transition invisible opacity-0 group-hover:visible group-hover:opacity-100 w-48 rounded-2xl space-y-2 bg-theme shadow text-base text-primary font-medium">
                {item.children.map((child) => (
                  <li key={child}>
                    <Link className="p-2 rounded-2xl hover:bg-brand hover:text-theme block">
                      {child}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
