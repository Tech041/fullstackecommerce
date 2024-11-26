import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <section>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div className="">
          <img src={assets.logo} alt="" className="mb-5 w-32" />
          <p className="w-full md:w-2/3 text-gray-600">
            Your one-stop destination for premium fashion and timeless style.
            Stay connected with us for the latest trends, exclusive offers, and
            more. Shop with confidence and elevate your wardrobe today!
          </p>
        </div>
        <div className="">
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="">
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+234-345-5654</li>
            <li>contactus@yahoo.com</li>
          </ul>
        </div>
      </div>
      <div className="">
        <hr className="" />
        <p className="py-5 text-sm text-center">
          Copyright {new Date().getFullYear()}- All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
