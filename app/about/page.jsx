"use client";
import React from 'react';
import Image from 'next/image';
import teamPhoto from '../../public/asset/carousel/6.jpg'; // Replace with your image path
import missionPhoto from '../../public/asset/carousel/6.jpg'; // Replace with your image path

const AboutUs = () => {
  return (
    <div className="text-gray-900 py-16 px-8 lg:py-32">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-4 text-black tracking-wider">Who We Are</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Your one-stop shop for the latest trends, top-notch products, and an unparalleled shopping experience.
          </p>
        </section>

        {/* Our Story Section */}
        <section className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Founded in [Year], [Your Shop Name] started with a simple mission: to provide the best shopping experience.
              We have grown from a small startup to a thriving online marketplace, offering an extensive range of products
              to customers worldwide.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <Image 
              src={teamPhoto} 
              alt="Our Team" 
              className="w-full h-auto max-w-xs mx-auto rounded-lg shadow-lg" 
            />
          </div>
        </section>

        {/* What We Offer Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6  bg-[#f7cfe186] rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Quality Products</h3>
              <p className="text-gray-700">We source only the finest products from trusted suppliers to ensure that our customers receive the best quality.</p>
            </div>
            <div className="text-center p-6  bg-[#f7cfe186] rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Affordable Prices</h3>
              <p className="text-gray-700">Our competitive pricing allows you to shop without breaking the bank, offering the best value for your money.</p>
            </div>
            <div className="text-center p-6  bg-[#f7cfe186] rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Excellent Service</h3>
              <p className="text-gray-700">Our dedicated customer service team is here to ensure a smooth and enjoyable shopping experience for you.</p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Image 
              src={missionPhoto} 
              alt="Our Mission" 
              className="w-full h-auto max-w-xs mx-auto rounded-lg shadow-lg" 
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              We are committed to bringing you the latest trends and highest quality products, combined with exceptional
              customer service. Our mission is to make your shopping experience as seamless and enjoyable as possible.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6  bg-[#f7cfe186] rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Integrity</h3>
              <p className="text-gray-700">We operate with honesty and transparency in everything we do.</p>
            </div>
            <div className="text-center p-6  bg-[#f7cfe186] rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Innovation</h3>
              <p className="text-gray-700">We continuously strive to bring you the latest and most innovative products.</p>
            </div>
            <div className="text-center p-6  bg-[#f7cfe186] rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Customer First</h3>
              <p className="text-gray-700">Your satisfaction is our priority. We listen to your feedback and always aim to improve.</p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-8">
            Follow us on social media and be part of our growing community. Stay updated with the latest trends, exclusive offers, and more.
          </p>
          <a
            href="https://www.instagram.com/yourshop"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block btn-gradient duration-300"
          >
            Follow Us
          </a>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
