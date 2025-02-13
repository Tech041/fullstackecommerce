import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="border-t border-gray-500">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div className="">
          <img src={assets.nelpharm_logo} alt="" className="mb-5 w-56 " />
          <p className="w-full md:w-2/3 text-purple-950">
            We ensure quality, affordability, and fast delivery for all our
            medications. Browse our collection today and take charge of your
            health!
          </p>
        </div>
        <div className="">
          <p className="text-xl font-medium mb-5 text-green-600 ">COMPANY</p>
          <ul className="flex flex-col gap-1 text-purple-950">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="">
          <p className="text-xl font-medium mb-5 text-green-600 ">
            GET IN TOUCH
          </p>
          <ul
            className="flex flex-col gap-1 text-purple-950
          "
          >
            <li>+2348030507512</li>
            <li>support@nelpharma.com</li>
          </ul>
        </div>
      </div>
      <div className="">
        <hr className="" />
        <p className="py-5 text-sm text-center text-purple-950">
          Copyright &copy;Nelpharma {new Date().getFullYear()} <br />
          <span className="">All rights reserved.</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
