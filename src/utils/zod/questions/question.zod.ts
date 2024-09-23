import { z } from 'zod'

export const QuestionSchema = z.object({
    question: z.string({
        required_error: 'Question is required',
        invalid_type_error: 'Question must be a string',
    }),
    free_field: z.boolean({
        required_error: 'free_field is required',
        invalid_type_error: 'free_field must be a boolean',
    }),
    weight: z.number({
        required_error: 'weight is required',
        invalid_type_error: 'weight must be a number',
    }),
})
