import { z } from 'zod'

export const QuestionnaireSchema = z.object({
    id_person: z.number({
        required_error: 'Id Person is required',
        invalid_type_error: 'Id Person must be a number',
    }),
    q_hour: z.string({
        required_error: 'q_hour is required',
        invalid_type_error: 'q_hour must be a Date',
    }),
    weigth: z.number({
        required_error: 'weigth is required',
        invalid_type_error: 'weigth must be a number',
    }),
    answered: z.boolean({
        required_error: 'answered is required',
        invalid_type_error: 'answered must be a boolean',
    }),
    week: z.number({
        required_error: 'week is required',
        invalid_type_error: 'week must be a number',
    }),
})
