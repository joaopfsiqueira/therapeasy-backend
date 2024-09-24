import { z } from 'zod'

export const AnswerSchema = z.object({
    id_question: z.number({
        required_error: 'id_question is required',
        invalid_type_error: 'id_question must be a number',
    }),
    id_questionnaire: z.number({
        required_error: 'id_questionnaire is required',
        invalid_type_error: 'id_questionnaire must be a number',
    }),
    free_question: z.boolean({
        required_error: 'free_question is required',
        invalid_type_error: 'free_question must be a boolean',
    }),
    id_question_answered: z.number({
        invalid_type_error: 'id_question_answered must be a number',
    }),
    created_at: z.date({
        required_error: 'created_at is required',
        invalid_type_error: 'created_at must be a date',
    }),
})
