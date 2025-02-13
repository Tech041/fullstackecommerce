"use client";
import { useState } from "react";
import { toast } from "react-toastify";

const NewsletterBox = () => {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) {
      toast.error("Email is required !");
      return;
    }
    if (input !== "" && input.includes("@gmail.com")) {
      toast.success("Your subscription is successful !");
      setInput("");
      return;
    } else {
      toast.error("Invalid email address");
    }
  };
  return (
    <section className="text-center">
      <p className="text-2xl font-medium text-green-700">
        Subscribe now and get 20% off
      </p>
      <p className="text-gray-400 mt-3">
        Exclusive Style, Delivered to Your Inbox
      </p>
      <form
        onClick={handleSubmit}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
      >
        <input
          type="email"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your email"
          className="w-full sm:flex-1 outline-none"
          required
        />
        <button
          type="submit"
          className="bg-black text-white text-xs py-4 px-10"
        >
          SUBSCRIBE
        </button>
      </form>
    </section>
  );
};

export default NewsletterBox;
