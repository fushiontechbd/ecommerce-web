"use client"


import Banner from '@/components/Banner'
import ProductList from '@/components/ProductList'
import { db } from '@/database/drizzle'
import { user } from '@/database/schema'
import { useAuth } from '@clerk/nextjs'
import React from 'react'

const page = () => {



  const { isLoaded, isSignedIn, userId, sessionId, getToken } = useAuth()

  if (!isLoaded) {
    return <div>Loading...</div>
  }

  if (!isSignedIn) {
    // You could also add a redirect to the sign-in page here
    return <div>Sign in to view this page</div>
  }






//   const result = await db.select().from(user)
// console.log(JSON.stringify(result,null,2));


  return (
   <>
    <div>Hello, {userId}! Your current active session is {sessionId}.</div>
   <Banner/>
   <ProductList/>
   </>
  )
}

export default page