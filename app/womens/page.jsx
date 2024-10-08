"use client";
import { menClothingItems, womenClothingItems, kidsClothingItems } from '../data';
import Image from 'next/image';
import Link from 'next/link';
import useCartStore from '../useCartStore';

const ProductsPage = () => {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (product) => {
    const productToAdd = {
      id: product.id.toString(),
      title: product.name,
      price: product.price,
      image: product.imageUrl,
      quantity: 1,
      size: null // Adjust size if necessary
    };
    addItem(productToAdd);
  };

  return (
    <div className="container mx-auto p-6 py-20">
      <section className="my-12">
        <h1 className="text-3xl font-bold  text-slate-700 text-center mb-8">Women's Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {womenClothingItems.map((product) => (
            <div key={product.id} className="product-card  bg-[#EBF6FC] shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
              <div className="relative w-full h-64 rounded-t-lg overflow-hidden">
                <Image className="object-cover" src={product.imageUrl} alt={product.name} layout="fill" />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
                <div className="flex justify-between mt-5 gap-4">
                <Link href={`/products/${product.id}`}>
                    <button className="btn-gradient duration-300">
                      View Details
                    </button>
                  </Link>
                  <button 
                    className="btn-gradient duration-300"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add To Cart
                  </button>
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
