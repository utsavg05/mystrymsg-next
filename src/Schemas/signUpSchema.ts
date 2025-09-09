import {z} from 'zod'

export const usernameValidation = z
    .string()
    .min(3, "Username must be atleast 3 characters long")
    .max(20, "Username must not be more than 20 characters long")
    .regex(/^[a-zA-Z_]+$/, "Username must not contain special character")


export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({message: 'Invalid email address'}),
    password: z.string().min(6, 'Password must be atleast 6 characters')
})    