"use client";
import { useParams } from 'next/navigation';
import { menClothingItems, womenClothingItems, kidsClothingItems } from '../../data';
import Image from 'next/image';
import useCartStore from '../../useCartStore';
import ProductsPage from '../page';

const ProductDetails = () => {
  const { id } = useParams();
  const addItem = useCartStore((state) => state.addItem);

  const allProducts = [...menClothingItems, ...womenClothingItems, ...kidsClothingItems];
  const product = allProducts.find((item) => item.id.toString() === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
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

  const handleBuyNow = () => {
    handleAddToCart();
    // Redirect to checkout or a custom "buy now" action
    // Example: router.push('/checkout');
  };

  return (
    <div className="container mx-auto p-6 py-40">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center justify-around ">
        <div className="relative w-1/2 h-96 bg-gray-200 rounded-lg overflow-hidden ml-10">
          <Image src={product.imageUrl} alt={product.name} layout="fill" className="object-cover" />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-lg text-gray-700 mb-6">{product.description}</p>
            <p className="text-2xl font-bold text-green-600">${product.price.toFixed(2)}</p>
          </div>
          <div className="flex gap-4 mt-6">
            <button 
              onClick={handleAddToCart}
              className="w-full lg:w-auto px-6 py-3 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition duration-300"
            >
              Add to Cart
            </button>
            <button 
              onClick={handleBuyNow}
              className="w-full lg:w-auto px-6 py-3 rounded bg-green-600 text-white font-semibold hover:bg-green-700 transition duration-300"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div>
        <ProductsPage/>
      </div>
    </div>
  );
};

export default ProductDetails;
