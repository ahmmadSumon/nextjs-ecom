"use client";
import React, { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import Image from "next/image";
import logo from "../../public/asset/logo/logo.png";
import Link from "next/link";
import DropDown from "./dropDown/DropDown";
import { CiShoppingCart } from "react-icons/ci";
import useCartStore from "../useCartStore";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const items = useCartStore((state) => state.items);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 100;
      setIsScrolled(!isTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div
      className={`w-full h-20 lg:h-24 border-b-[1px] border-gray-200 text-black fixed top-0 bg-white z-50 transition-all duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-screen-2xl h-full mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <Image className="w-[230px] h-auto" src={logo} alt="Logo" />
          </Link>
        </div>

        <div className="lg:hidden flex gap-5">
          <Link href="/cart">
            <div className="relative">
              <CiShoppingCart className="text-3xl" />
              <span className="w-4 h-4 bg-yellow-600 text-white rounded-full absolute left-1 -top-3 text-xs flex items-center justify-center">
                {items.length}
              </span>
            </div>
          </Link>
          <FiMenu className="text-3xl cursor-pointer" onClick={toggleMenu} />
        </div>

        <ul className="hidden lg:flex items-center gap-8 uppercase text-sm font-semibold">
          <Link href="/" onClick={closeMenu}>
            <li className="navbarLi hover:text-blue-600 transition-colors duration-300">Home</li>
          </Link>
          <DropDown
            placeholder="Pages"
            data={[
              { name: "Mens", link: "/mens" },
              { name: "Womens", link: "/womens" },
              { name: "Kids", link: "/kids" },
            ]}
          />
          <a
            href="https://port-folio-next-js-lime.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="navbarLi hover:text-blue-600 transition-colors duration-300"
          >
            Portfolio
          </a>
          <li className="navbarLi hover:text-blue-600 transition-colors duration-300">Blog</li>
          <Link href="/about" onClick={closeMenu}>
            <li className="navbarLi hover:text-blue-600 transition-colors duration-300">About Shop</li>
          </Link>
        </ul>

        <div className="hidden lg:flex gap-8 items-center">
          <BsSearch className="text-xl hover:text-blue-600 transition-colors duration-300" />
          <div className="relative">
            <Link href="/cart">
              <CiShoppingCart className="text-3xl" />
              <span className="w-4 h-4 bg-yellow-600 text-white rounded-full absolute left-2 -top-3 text-xs flex items-center justify-center">
                {items.length}
              </span>
            </Link>
          </div>
          <button className="py-3 px-10 bg-blue-500 text-white uppercase text-sm font-semibold rounded-md hover:bg-blue-600 transition-colors duration-300">
            Login
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden absolute z-10 left-0 top-20 w-full bg-white shadow-lg border-t-[1px] border-gray-300 text-black transition-all duration-300">
            <ul className="max-w-screen-2xl mx-auto px-4 py-4 uppercase text-sm font-semibold">
              <Link href="/" onClick={closeMenu}>
                <li className="hover:text-blue-600 transition-colors duration-300">Home</li>
              </Link>
              <Link href="/mens" onClick={closeMenu}>
                <li className="hover:text-blue-600 transition-colors duration-300">Mens</li>
              </Link>
              <Link href="/womens" onClick={closeMenu}>
                <li className="hover:text-blue-600 transition-colors duration-300">Womens</li>
              </Link>
              <Link href="/kids" onClick={closeMenu}>
                <li className="hover:text-blue-600 transition-colors duration-300">Kids</li>
              </Link>
              <a
                href="https://port-folio-next-js-lime.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors duration-300"
                onClick={closeMenu}
              >
                Portfolio
              </a>
              <a
                href="https://shohid-nextjs.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors duration-300"
                onClick={closeMenu}
              >
                Blog
              </a>
              <Link href="/about" onClick={closeMenu}>
                <li className="hover:text-blue-600 transition-colors duration-300">About Shop</li>
              </Link>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
