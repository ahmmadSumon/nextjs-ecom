import React from 'react'
import Herosection from '../app/components/Herosection'
import AllCategories from '../app/components/AllCategories'
import ProductsPage from './products/page.jsx'
import AboutUs from './about/page'
const page = () => {
  return (
    <div>
      <Herosection/>
      <AllCategories/>
      <ProductsPage/>
      <AboutUs/>
    </div>
  )
}

export default page
