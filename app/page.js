import React from 'react'
import Herosection from '../app/components/Herosection'
import AllCategories from '../app/components/AllCategories'
import ProductsPage from '../app/product/page.jsx'
const page = () => {
  return (
    <div>
      <Herosection/>
      <AllCategories/>
      <ProductsPage/>
    </div>
  )
}

export default page
