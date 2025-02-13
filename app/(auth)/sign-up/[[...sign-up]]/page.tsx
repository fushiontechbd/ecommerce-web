
"use client"
import React, { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { otpSchema, signUpSchema } from '@/lib/validations'


import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useSignUp } from '@clerk/nextjs'
import { log } from 'console'
import { useRouter } from 'next/navigation'



const page = () => {
  const { isLoaded,signUp, setActive } = useSignUp();

    const form = useForm<z.infer<typeof signUpSchema>>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
          fullName: "",
          email:"",
          password:""
        },
      })


      const otpForm =  useForm<z.infer<typeof otpSchema>>({
        resolver: zodResolver(otpSchema),
        defaultValues: {
          otp: "",
        },
      })






      const onSubmit = async(values: z.infer<typeof signUpSchema>)=>{
        try {





    await signUp?.create({
            emailAddress: values.email,
            password:values.password,
          });

 await signUp?.prepareEmailAddressVerification({
  strategy:'email_code'
})







          
       
        } catch (err) {
          console.error('Error signing in:', err);
        }
      }

const router = useRouter()


async function onPressVerify(values: z.infer<typeof otpSchema>){
 
 
    if(!isLoaded){
      return
    }


    try {

      const code = values.otp
      const result = await signUp?.attemptEmailAddressVerification({code})
      
if(result.status==='complete'){
await setActive({session:result.createdSessionId})
router.push('/')
}


    } catch (error:any) {
      console.log(error.message);
      
      
    }

}








if(!isLoaded){
  return null
}



  return (
    <div className='bg-slate-50 p-5 rounded-md min-w-[400px]'>
        <h1 className='text-3xl text-center py-3'>Create Account</h1>
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
      <FormField
        control={form.control}
        name="fullName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>FullName</FormLabel>
            <FormControl>
              <Input placeholder="Enter Full Name" {...field} />
            </FormControl>
            
            <FormMessage />
          </FormItem>
        )}
      />




<FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input placeholder="Enter Email" {...field} />
            </FormControl>
        
            <FormMessage />
          </FormItem>
        )}
      />

<FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Password</FormLabel>
            <FormControl>
              <Input placeholder="Enter Password" {...field} />
            </FormControl>
          
            <FormMessage />
          </FormItem>
        )}
      />







      <Button type="submit" className='w-full' >Submit</Button>
    </form>
  </Form>


  <Form {...otpForm}>
    <form onSubmit={otpForm.handleSubmit(onPressVerify)} className="space-y-2">
      <FormField
        control={otpForm.control}
        name="otp"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Otp</FormLabel>
            <FormControl>
              <Input placeholder="Enter Otp" {...field} />
            </FormControl>
            
            <FormMessage />
          </FormItem>
        )}
      />











      <Button type="submit" className='w-full' >Submit OTP</Button>
    </form>
  </Form>
  </div>
  )
}

export default page
// import { SignUp } from '@clerk/nextjs'

// export default function Page() {
//   return <SignUp />
// }