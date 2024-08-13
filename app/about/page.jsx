"use client";
import React from 'react';
import Image from 'next/image';
import teamPhoto from '../../public/asset/products/sportshoodie.jpg'; // Replace with your image path
import missionPhoto from '../../public/asset/products/sportshoodie.jpg'; // Replace with your image path

const AboutUs = () => {
  return (
    <div className="bg-gray-50 text-gray-800 py-20 px-6  lg:px-32">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-bold text-center mb-12 text-black-600">About Us</h1>

        <section className="mb-16">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="w-full lg:w-1/2">
              <Image src={teamPhoto} alt="Our Team" className="w-full h-auto rounded-lg shadow-lg" />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
              <p className="text-lg leading-relaxed mb-4">
                Founded in <span className="font-semibold">[Year]</span>, [Your Shop Name] started with a simple goal: to bring the latest trends and must-have items right to your doorstep. What began as a small passion project has now grown into a thriving online marketplace, serving thousands of happy customers across [mention regions].
              </p>
              <p className="text-lg leading-relaxed">
                Our journey has been one of growth and dedication. We strive to stay ahead of trends and provide a shopping experience that's both enjoyable and rewarding.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl font-semibold mb-4">What Sets Us Apart</h2>
              <p className="text-lg leading-relaxed mb-4">
                At [Your Shop Name], we believe that shopping should be an experience, not a chore. That’s why we’re committed to offering a carefully curated selection of products that combine style, quality, and value. From <span className="font-semibold">[mention specific products or categories]</span> to everyday essentials, we’ve got something for everyone.
              </p>
              <p className="text-lg leading-relaxed">
                Our dedication to our customers is what truly sets us apart. With fast shipping, easy returns, and a friendly customer service team, we're here to make your shopping journey as smooth as possible.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <Image src={missionPhoto} alt="Our Mission" className="w-full h-auto rounded-lg shadow-lg" />
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-lg leading-relaxed">
            <li><span className="font-semibold">Quality:</span> We partner with top brands and suppliers to ensure every product meets our high standards.</li>
            <li className="mt-2"><span className="font-semibold">Affordability:</span> Great style and top-notch products don’t have to break the bank. We offer competitive prices on all our items.</li>
            <li className="mt-2"><span className="font-semibold">Customer Satisfaction:</span> Your happiness is our priority. We’re constantly improving our store to make sure you have the best shopping experience possible.</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Join Our Community</h2>
          <p className="text-lg leading-relaxed mb-4">
            We’re more than just a store; we’re a community. Follow us on social media to stay updated on the latest arrivals, special offers, and behind-the-scenes looks at how we do what we do. Plus, share your own style by tagging us in your posts for a chance to be featured!
          </p>
          <div className="text-center">
            <a
              href="https://www.instagram.com/yourshop"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block py-3 px-6 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-300"
            >
              Follow Us
            </a>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Promise</h2>
          <p className="text-lg leading-relaxed">
            When you shop with [Your Shop Name], you’re not just buying a product—you’re investing in an experience. We promise to deliver top-notch products, exceptional customer service, and an online shopping experience that you’ll want to return to time and time again.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
