import React from "react";
import { BiPhone } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="pt-20 bg-brand">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <Link to="/">
              <img src="/logo-white.png" alt="logo" />
            </Link>
            <h4 className="text-xl font-bold text-theme mt-8">Contact Us</h4>
            <div className="mt-5 space-y-5">
              <Link className="flex gap-2.5 text-theme font-bold">
                <BsWhatsapp />
                <div>
                  <p>WhatsApp</p>
                  <p>+1 202-918-2132</p>
                </div>
              </Link>
              <Link className="flex gap-2.5 text-theme font-bold">
                <BiPhone />
                <div>
                  <p>Phone</p>
                  <p>+1 202-918-2132</p>
                </div>
              </Link>
            </div>
            <h4 className="text-xl font-bold text-theme mt-8">Download App</h4>
            <div className="flex gap-5 mt-5">
              <Link>
                <img src="/play-store.png" alt="playstore" />
              </Link>
              <Link>
                <img src="/play-store.png" alt="playstore" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-theme border-b-2 w-fit pb-4">
              Most Popular Categories
            </h3>
            <ul className="text-theme font-medium text-base space-y-5 mt-5 list-disc pl-5">
              <li>
                <Link to="/">Staples</Link>
              </li>
              <li>
                <Link to="/">Beverages</Link>
              </li>
              <li>
                <Link to="/">Personal Care</Link>
              </li>
              <li>
                <Link to="/">Home Care</Link>
              </li>
              <li>
                <Link to="/">Baby Care</Link>
              </li>
              <li>
                <Link to="/">Vegetables & Fruits</Link>
              </li>
              <li>
                <Link to="/">Snacks & Foods</Link>
              </li>
              <li>
                <Link to="/">Dairy & Bakery</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-theme border-b-2 w-fit pb-4">
              Customer Services
            </h3>
            <ul className="text-theme font-medium text-base space-y-5 mt-5 list-disc pl-5">
              <li>
                <Link to="/">Staples</Link>
              </li>
              <li>
                <Link to="/">Beverages</Link>
              </li>
              <li>
                <Link to="/">Personal Care</Link>
              </li>
              <li>
                <Link to="/">Home Care</Link>
              </li>
              <li>
                <Link to="/">Baby Care</Link>
              </li>
              <li>
                <Link to="/">Vegetables & Fruits</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-theme font-base text-center mt-20 py-7 border-t border-t-theme/20">
          <p>
            © {new Date().getFullYear()} All rights reserved. Reliance Retail
            Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
