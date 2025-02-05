import React from 'react'
import ProductItem from './ProductItem'
import { sampleProducts } from '@/constants/dummyData'

const ProductList = () => {
  return (
    <section className='container mx-auto'>
        <h1 className='text-3xl text-slate-800 py-3'>Popular Products</h1>

<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
{/* 
   
    <ProductItem/>
    <ProductItem/>
    <ProductItem/>
     */}


     {
      sampleProducts.map((data,index)=>{
        return  <ProductItem key={index} id={data.id} title={data.title} price={data.price} description={data.description} image={data.image} rating={data.rating} />
      })
     }

</div>

    </section>
  )
}

export default ProductList