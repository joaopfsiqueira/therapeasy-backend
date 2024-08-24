import { z } from 'zod'

export const AuthSchema = z.object({
    login: z.string({
        required_error: 'Login is required',
        invalid_type_error: 'Login must be a string',
    }),
    password: z.string({
        required_error: 'Password is required',
        invalid_type_error: 'Password must be a string',
    }),
})
