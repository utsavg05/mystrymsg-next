import {z} from 'zod'

export const acceptMessageSchema = z.object({
    content: z
    .string()
    .min(10, 'Content must be of 10 characters')
    .max(300, 'Content must not be longer than 300 characters')
})