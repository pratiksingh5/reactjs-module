import * as z from "zod"; 

export const loginSchema = z.object({
    email:  z.string().email({message: "Invalid Email Address"}),
    password: z.string().min(6, {message: "Passowrd must be atleast 6 characters"}),
})