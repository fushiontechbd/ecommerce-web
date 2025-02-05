"use client"

import { z } from "zod"

export const signUpSchema = z.object({
    fullName: z.string().nonempty("Name Is Required").min(3).max(50),
  email: z.string().email(),
  password: z.string().min(8).max(50)
})


export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(50)
})