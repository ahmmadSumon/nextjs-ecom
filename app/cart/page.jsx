"use client"
import React, { useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useCartStore from '../useCartStore';
import { allProducts } from '../data'; // Assuming allProducts contains all your product data

const Cart = () => {
  const items = useCartStore((state) => state.items);
  const incrementQuantity = useCartStore((state) => state.incrementQuantity);
  const decrementQuantity = useCartStore((state) => state.decrementQuantity);
  const removeItemFromCart = useCartStore((state) => state.removeItem);

  const deliveryCharge = 9;
  const subtotal = useMemo(() => {
    return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }, [items]);

  const total = subtotal + deliveryCharge;

  return (
    <section className='bg-white py-8 mt-20 antialiased dark:bg-gray-900 md:py-16'>
      <div className='mx-auto max-w-screen-xl px-4 2xl:px-0'>
        <h2 className='text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl'>
          Shopping Cart
        </h2>
        <div className='mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8'>
          <div className='lg:w-3/4'>
            {items.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              items.map((item) => {
                const product = allProducts.find((prod) => prod.id.toString() === item.id);
                if (!product) return null;

                return (
                  <div
                    key={item.id}
                    className='mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl'
                  >
                    <div className='space-y-6'>
                      <div className='rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6'>
                        <div className='space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0'>
                          <div className='shrink-0 md:order-1'>
                            <div className='image-container relative h-40'>
                              <Image
                                src={product.imageUrl}
                                alt={product.name}
                                width={100}
                                height={60}
                                objectFit='cover'
                                className=''
                              />
                            </div>
                          </div>
                          <div className='flex items-center justify-between md:order-3 md:justify-end'>
                            <div className='flex items-center'>
                              <button
                                type='button'
                                onClick={() => decrementQuantity(item.id)}
                                className='inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700'
                              >
                                -
                              </button>
                              <p className='w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white'>
                                {item.quantity}
                              </p>
                              <button
                                type='button'
                                onClick={() => incrementQuantity(item.id)}
                                className='inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700'
                              >
                                +
                              </button>
                            </div>
                            <div className='text-end md:order-4 md:w-32'>
                              <p className='text-base font-bold text-gray-900 dark:text-white'>
                                ${(item.price * item.quantity).toFixed(2)}
                              </p>
                            </div>
                          </div>
                          <div className='w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md'>
                            <h3 className='text-base font-medium text-gray-900 hover:underline dark:text-white'>
                              {product.name}
                            </h3>
                            <div className='flex items-center gap-4'>
                              <button
                                type='button'
                                onClick={() => removeItemFromCart(item.id)}
                                className='inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500'
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
          <div className='lg:w-1/4'>
            <div className='mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full'>
              <div className='space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6'>
                <p className='text-xl font-semibold text-gray-900 dark:text-white'>
                  Order summary
                </p>
                <div className='space-y-4'>
                {items.map((item) => {
                    const product = allProducts.find((prod) => prod.id.toString() === item.id);
                    if (!product) return null;

                    return (
                      <div key={item.id} className='flex items-center justify-between gap-4'>
                        <span className='text-base font-normal text-gray-500 dark:text-gray-400'>
                          {product.name}
                        </span>
                        <span className='text-base font-medium text-gray-900 dark:text-white'>
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    );
                  })}
                  <div className='flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700'>
                    <dt className='text-base font-normal text-gray-500 dark:text-gray-400'>
                      Delivery charge
                    </dt>
                    <dd className='text-base font-medium text-gray-900 dark:text-white'>
                      ${deliveryCharge}
                    </dd>
                  </div>
                  <div className='flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700'>
                    <dt className='text-base font-bold text-gray-900 dark:text-white'>Total</dt>
                    <dd className='text-base font-bold text-gray-900 dark:text-white'>
                      ${total.toFixed(2)}
                    </dd>
                  </div>
                </div>
              </div>
              <button
                type='button'
                className='w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800'
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
