import { z } from 'zod'

export const UserSchema = z.object({
    id_person: z.number({
        required_error: 'Id Person is required',
        invalid_type_error: 'Id Person must be a number',
    }),
    login: z.string({
        required_error: 'Login is required',
        invalid_type_error: 'Login must be a string',
    }),
    password: z.string({
        required_error: 'Password is required',
        invalid_type_error: 'Password must be a string',
    }),
    email: z.string({
        required_error: 'Email is required',
        invalid_type_error: 'Email must be a string',
    }),
})
