
"use client"
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { signUpSchema } from '@/lib/validations'


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


const page = () => {


    const form = useForm<z.infer<typeof signUpSchema>>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
          fullName: "",
          email:"",
          password:""
        },
      })






      function onSubmit(values: z.infer<typeof signUpSchema>) {

        console.log('hiii');
        
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
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
{/* 
  <Button>Submit Test</Button> */}
  </div>
  )
}

export default page