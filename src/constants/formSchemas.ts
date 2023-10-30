import * as z from 'zod'

export const SignUpSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2).max(50),
  password: z.string(),
  attributes: z.object({
    email: z.string().email(),
    birthdate: z.date(),
    gender: z.enum(['MALE', 'FEMALE'])
  })
})
