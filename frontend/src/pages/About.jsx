import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <section className="">
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          alt=""
          className="w-full md:max-w-[450px]"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p className="">
            Welcome to FashioFix, your go-to destination for trendy,
            high-quality fashion. We are passionate about bringing you the
            latest styles and timeless classics to elevate your wardrobe. Our
            carefully curated collections are designed to cater to diverse
            tastes, ensuring there&apos;s something special for everyone.
          </p>
          <p className="">
            At FashioFix , we value quality, affordability, and customer
            satisfaction. Each piece is handpicked with you in mind, combining
            comfort and style to help you look and feel your best. Whether
            you&apos;re shopping for everyday essentials or standout pieces,
            we&apos;re here to make your fashion journey seamless and enjoyable.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p className="">
            At FashionFix, our mission is to provide stylish, high-quality
            clothing that empowers individuals to express themselves
            confidently. We aim to make fashion accessible to everyone by
            offering affordable yet premium designs that cater to diverse tastes
            and lifestyles. We are committed to delivering exceptional customer
            experiences, fostering creativity, and promoting sustainability in
            every step of our journey. Through innovation and passion, we strive
            to inspire a community that values style, comfort, and
            individuality.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="">Qaulity Assurance:</b>
          <p className=" text-gray-600">
            Each item in our collection undergoes a rigorous quality control
            process to ensure it meets your expectations for comfort.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="">Convenience:</b>
          <p className=" text-gray-600">
            Browse our collections anytime, anywhere, and enjoy a hassle-free
            checkout process. 
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="">Exceptional Customer Service:</b>
          <p className=" text-gray-600">
            We value your feedback and strive to exceed your expectations by
            delivering personalized support and prompt responses. 
          </p>
        </div>
      </div>
      <NewsletterBox/>
    </section>
  );
};

export default About;
