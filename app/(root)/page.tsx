import Banner from '@/components/Banner'
import ProductList from '@/components/ProductList'
import { db } from '@/database/drizzle'
import { user } from '@/database/schema'
import React from 'react'

const page = async() => {

  const result = await db.select().from(user)
console.log(JSON.stringify(result,null,2));


  return (
   <>
   <Banner/>
   <ProductList/>
   </>
  )
}

export default page