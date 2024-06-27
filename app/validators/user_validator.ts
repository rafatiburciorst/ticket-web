import { z } from 'zod'

export type CreateUserPayload = z.infer<typeof createUserValidator>

export const createUserValidator = z.object({
  name: z.string().trim().min(6),
  password: z.string().trim(),
  email: z.string().trim().email(),
})
