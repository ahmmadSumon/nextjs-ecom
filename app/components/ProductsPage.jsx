"use client"
import { menClothingItems, womenClothingItems, kidsClothingItems, allProducts } from '../data';
import Image from 'next/image';
import Link from 'next/link';
const ProductsPage = () => {
  // Function to handle adding a product to the cart
  const addToCart = (productId) => {
    // Implement your logic to add the product to the cart
    console.log(`Product added to cart: ${productId}`);
  };

  return (
    <div className="container mx-auto p-6">
      <section className="my-12">
        <h1 className="text-3xl font-bold text-center mb-8">Men's Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {menClothingItems.map((product) => (
            <div key={product.id} className="product-card bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
              <div className="relative w-full h-64 rounded-t-lg overflow-hidden">
                <Image className="object-cover" src={product.imageUrl} alt={product.name} layout="fill" />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
                <div className="flex justify-between mt-5 gap-4 ">
                <Link href={{ pathname: "/singleproduct", query: { id: product.id.toString() } }} key={`${product.id}-link1`}>
                  <button className="py-1 px-2 rounded  bg-blue-500 text-white hover:bg-blue-700 duration-300">
                    View Details
                  </button>
                </Link>
                <Link href={{ pathname: "/singleproduct", query: { id: product.id.toString() } }} key={`${product.id}-link2`}>
                  <button className="py-1 px-2 rounded   bg-blue-500 text-white hover:bg-blue-700 duration-300">
                    ADD To Cart
                  </button>
                </Link>
              </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="my-12">
        <h1 className="text-3xl font-bold text-center mb-8">Women's Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {womenClothingItems.map((product) => (
            <div key={product.id} className="product-card bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
              <div className="relative w-full h-64 rounded-t-lg overflow-hidden">
                <Image className="object-cover" src={product.imageUrl} alt={product.name} layout="fill" />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
                <div className="flex mt-5 justify-between gap-2">
                <Link href={{ pathname: "/singleproduct", query: { id: product.id.toString() } }} key={`${product.id}-link1`}>
                  <button className="py-1 px-2 rounded  bg-blue-500 text-white hover:bg-blue-700 duration-300">
                    View Details
                  </button>
                </Link>
                <Link href={{ pathname: "/singleproduct", query: { id: product.id.toString() } }} key={`${product.id}-link2`}>
                  <button className="py-1 px-2 rounded   bg-blue-500 text-white hover:bg-blue-700 duration-300">
                    ADD To Cart
                  </button>
                </Link>
              </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="my-12">
        <h1 className="text-3xl font-bold text-center mb-8">Kids' Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {kidsClothingItems.map((product) => (
            <div key={product.id} className="product-card bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
              <div className="relative w-full h-64 rounded-t-lg overflow-hidden">
                <Image className="object-cover" src={product.imageUrl} alt={product.name} layout="fill" />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
                <div className="flex justify-between gap-4 mt-5 ">
                <Link href={{ pathname: "/singleproduct", query: { id: product.id.toString() } }} key={`${product.id}-link1`}>
                  <button className="py-1 px-2 rounded  bg-blue-500 text-white hover:bg-blue-700 duration-300">
                    View Details
                  </button>
                </Link>
                <Link href={{ pathname: "/singleproduct", query: { id: product.id.toString() } }} key={`${product.id}-link2`}>
                  <button className="py-1 px-2 rounded   bg-blue-500 text-white hover:bg-blue-700 duration-300">
                    ADD To Cart
                  </button>
                </Link>
              </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
