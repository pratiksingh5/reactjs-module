import * as z from "zod"; 

export const registerSchema = z.object({
    name: z.string().min(3, {message: "Name must be at least 3 characters"}),
    email:  z.string().email({message: "Invalid Email Address"}),
    password: z.string().min(6, {message: "Passowrd must be atleast 6 characters"}),
})