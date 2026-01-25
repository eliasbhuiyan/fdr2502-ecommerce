import React, { useEffect, useRef, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { CiShoppingCart } from "react-icons/ci";
import {
  FaBars,
  FaChevronRight,
  FaRegUser,
  FaSearch,
  FaWindowClose,
} from "react-icons/fa";
import { Link } from "react-router";

const Navbar = () => {
  const [openDropDown, setOpenDropDown] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const categories = [
    {
      title: "Phone",
      to: "",
      children: [
        {
          title: "iPhone",
          to: "",
        },
        {
          title: "Samsung",
          to: "",
        },
        {
          title: "Nokia",
          to: "",
        },
      ],
    },
    {
      title: "Watch",
      to: "",
      children: [
        {
          title: "iPhone",
          to: "",
        },
        {
          title: "Samsung",
          to: "",
        },
        {
          title: "Nokia",
          to: "",
        },
      ],
    },
    {
      title: "Laptop",
      to: "",
      children: [
        {
          title: "iPhone",
          to: "",
        },
        {
          title: "Samsung",
          to: "",
        },
        {
          title: "Nokia",
          to: "",
        },
      ],
    },
    {
      title: "TWS",
      to: "",
      children: [
        {
          title: "iPhone",
          to: "",
        },
        {
          title: "Samsung",
          to: "",
        },
        {
          title: "Nokia",
          to: "",
        },
      ],
    },
    {
      title: "Panjabi",
      to: "",
      children: [
        {
          title: "iPhone",
          to: "",
        },
        {
          title: "Samsung",
          to: "",
        },
        {
          title: "Nokia",
          to: "",
        },
      ],
    },
    {
      title: "Shari",
      to: "",
      children: [
        {
          title: "iPhone",
          to: "",
        },
        {
          title: "Samsung",
          to: "",
        },
        {
          title: "Nokia",
          to: "",
        },
      ],
    },
  ];

  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    });
  }, [navRef]);

  return (
    <header>
      <nav className="py-5">
        <div className="container">
          <div className="flex justify-between items-center">
            <button
              onClick={() => setIsOpen(true)}
              className="text-primary text-2xl md:hidden"
            >
              <FaBars />
            </button>
            <Link to="/" className="inline-block w-28 md:w-auto">
              <img src="/logo.png" alt="logo" className="w-full" />
            </Link>
            {/* Desktop SearchBar */}
            <div className="hidden md:flex gap-2.5 items-center p-4 bg-[#F3F9FB] rounded-xl w-full max-w-lg">
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
                className="hidden md:flex items-center gap-1.5 text-base font-bold text-primary relative after:absolute after:h-full after:w-0.5 after:bg-primary/40 after:top-0 after:-right-5"
              >
                <FaRegUser className="text-xl text-brand" /> Sign Up/Sign In
              </Link>
              <Link
                to="/signin"
                className="flex items-center gap-1.5 text-lg font-bold text-primary"
              >
                <CiShoppingCart className="text-2xl text-brand" />
                <span className="hidden md:block">Cart</span>
              </Link>
            </div>
          </div>
          {/* Mobile SearchBar */}
          <div className="flex md:hidden gap-2.5 items-center mt-10 p-4 bg-[#F3F9FB] rounded-xl w-full max-w-lg">
            <FaSearch className="text-brand text-2xl" />
            <input
              type="text"
              placeholder="Search essentials, groceries and more..."
              className="text-base text-primary w-full outline-0"
            />
          </div>
        </div>
      </nav>
      {/* Desktop Product Categories*/}
      <div className="py-4 border-y border-secondary hidden md:block">
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
                  <li key={child.title}>
                    <Link
                      to={child.to}
                      className="p-2 rounded-2xl hover:bg-brand hover:text-theme block"
                    >
                      {child.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* Mobile Sidebar */}
      <div
        className={`${isOpen ? "opacity-100 visible" : "opacity-0 invisible"} transition md:hidden fixed top-0 left-0 w-full h-screen bg-primary/80`}
      >
        <div
          ref={navRef}
          className={`${isOpen ? " translate-x-0" : "-translate-x-100"} transition-all w-4/5 sm:w-3/5 bg-theme h-full p-4`}
        >
          <div className="flex items-center justify-between py-3 border-b border-secondary mb-3">
            <h5 className="text-xl text-primary font-semibold">Menu Sidebar</h5>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-700 text-2xl"
            >
              <FaWindowClose />
            </button>
          </div>
          <ul className="space-y-4 text-primary font-bold text-lg mb-5 pb-5 border-b border-secondary">
            {categories.map((item) => (
              <li key={item.title}>
                <div className="flex justify-between items-center">
                  <Link to={item.to}>{item.title}</Link>
                  <button onClick={() => setOpenDropDown(item.title)}>
                    <FaChevronRight />
                  </button>
                </div>
                <ul
                  className={`${openDropDown === item.title ? "block" : "hidden"} font-semibold text-base pl-2 space-y-2 mt-2`}
                >
                  {item.children.map((child) => (
                    <li key={child.title}>
                      <Link>{child.title}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <Link
            to="/signin"
            className="border-secondary flex items-center gap-1.5 text-base font-bold text-primary relative after:absolute after:h-full after:w-0.5 after:bg-primary/40 after:top-0 after:-right-5"
          >
            Sign Up/Sign In
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
