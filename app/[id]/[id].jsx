"use client";
import { menClothingItems, womenClothingItems, kidsClothingItems, allProducts } from '../data';
import React, { useEffect, useState } from 'react';
import { getSingleProduct } from '../helper';
import useCartStore from '../useCartStore';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

const SingleProduct = ({ searchParams }) => {
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const addItemToCart = useCartStore((state) => state.addItem);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const idString = searchParams?.id;
        if (idString) {
          const id = Number(idString);
          const fetchedProduct = await getSingleProduct(id);
          setProduct(fetchedProduct);
          console.log('Fetched Product:', fetchedProduct); // Console log the fetched product
          console.log('Product Image URL:', fetchedProduct.image); // Log the image URL
        } else {
          console.error('Product ID is not provided.');
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [searchParams]);

  const handleAddToCart = () => {
    if (
      (product?.category === "men's clothing" || product?.category === "women's clothing") &&
      !selectedSize
    ) {
      setErrorMessage('Please select a size for this item.');
      return;
    }

    if (product) {
      const productToAdd = { 
        id: product.id.toString(), 
        title: product.title,
        price: product.price,
        image: product.image,
        quantity: 1,
        size: selectedSize || null
      };
      addItemToCart(productToAdd);
      setSuccessMessage('Product added to cart.');
    }
  };

  const handleBuyToCart = () => {
    if (
      (product?.category === "men's clothing" || product?.category === "women's clothing") &&
      !selectedSize
    ) {
      setErrorMessage('Please select a size for this item.');
      return;
    }

    if (product) {
      const productToAdd = { 
        id: product.id.toString(), 
        title: product.title,
        price: product.price,
        image: product.image,
        quantity: 1,
        size: selectedSize || null
      };
      addItemToCart(productToAdd);
      setSuccessMessage('Product added to cart.');
      router.push('/cart');
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  // Filter similar products
  const similarProducts = allProducts.filter(
    (item) => item.category === product.category && item.id !== product.id
  );

  return (
    <div className="container mx-auto py-40">
      <div className="row grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
        <div className="relative w-full h-96 max-w-md col-md-6 flex items-center justify-center">
          <Image 
            src={product.imageUrl} 
            alt="product image" 
            className="object-cover" 
            layout="fill" 
            objectFit="cover" 
            unoptimized 
          />
        </div>
        <div className="max-w-xl col-md-6 p-5">
          <h2 className="text-3xl font-semibold mb-4">{product.title}</h2>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <p className="text-lg font-bold text-indigo-600 mb-4">
            Price: ${product.price ? product.price.toFixed(2) : 'N/A'}
          </p>
          {["men's clothing", "women's clothing"].includes(product.category) && (
            <div className="flex space-x-4 mb-4">
              {['S', 'M', 'L', 'XL'].map((size) => (
                <button
                  key={size}
                  className={`btn ${selectedSize === size ? 'bg-blue-500' : 'bg-gray-300'} px-2 py-1 rounded-xl text-white`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          )}
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          {successMessage && <p className="text-green-500">{successMessage}</p>}
          <div className="flex space-x-4">
            <button className="btn bg-green-500 px-2 py-1 rounded-xl text-white" onClick={handleAddToCart}>
              Add to Cart
            </button>
            <button className="btn bg-violet-500 px-2 py-1 rounded-xl text-white" onClick={handleBuyToCart}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-2xl text-center font-semibold my-8">Similar Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {similarProducts.map((product) => (
            <div key={product.id} className="product-card bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
              <div className="relative w-full h-64 rounded-t-lg overflow-hidden">
                <Image className="object-cover" src={product.imageUrl} alt={product.name} layout="fill" />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
                <div className="flex mt-5 justify-between gap-4 ">
                <Link href={{ pathname: "/product/singleproduct", query: { id: product.id.toString() } }} key={`${product.id}-link1`}>
                  <button className="py-1 px-2 rounded  bg-blue-500 text-white hover:bg-blue-700 duration-300">
                    View Details
                  </button>
                </Link>
                <Link href={{ pathname: "/product/singleproduct", query: { id: product.id.toString() } }} key={`${product.id}-link2`}>
                  <button className="py-1 px-2 rounded   bg-blue-500 text-white hover:bg-blue-700 duration-300">
                    ADD To Cart
                  </button>
                </Link>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
