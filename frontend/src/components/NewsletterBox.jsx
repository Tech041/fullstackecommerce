import React from "react";

const NewsletterBox = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="text-center">
      <p className="text-2xl font-medium text-gray-800">
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
