import { z } from 'zod'

export const UserSchema = z.object({
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
    cpf: z.number({
        required_error: 'CPF is required',
        invalid_type_error: 'CPF must be a number',
    }),
    gender: z.string({
        required_error: 'Gender is required',
        invalid_type_error: 'Gender must be a string',
    }),
    type: z
        .string({
            invalid_type_error: 'Type must be a string',
        })
        .optional(),
    birth_date: z.string({
        required_error: 'birth_date is required',
        invalid_type_error: 'birth_date must be a date',
    }),
    created_at: z.string({
        required_error: 'created_at is required',
        invalid_type_error: 'created_at must be a date',
    }),
    updated_at: z.string({
        required_error: 'updated_at is required',
        invalid_type_error: 'updated_at must be a date',
    }),
    active: z.boolean({
        required_error: 'Active is required',
        invalid_type_error: 'Active must be a boolean',
    }),
})
