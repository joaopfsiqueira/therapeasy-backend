import { z } from 'zod'

export const OptionAnswerSchema = z.object({
    id_question: z.number({
        required_error: 'id_question is required',
        invalid_type_error: 'id_question must be a number',
    }),
    option: z.string({
        required_error: 'option is required',
        invalid_type_error: 'option must be a string',
    }),
    weigth: z.number({
        required_error: 'weigth is required',
        invalid_type_error: 'weigth must be a number',
    }),
})
