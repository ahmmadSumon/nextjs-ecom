import React from 'react';
import { useRouter } from 'next/router';
import SingleProduct from '../../components/SingleProduct';

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return <SingleProduct searchParams={{ id }} />;
};

export default ProductPage;