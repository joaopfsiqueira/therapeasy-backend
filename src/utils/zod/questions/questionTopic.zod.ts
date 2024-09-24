import { z } from 'zod'

export const QuestionTopicSchema = z.object({
    id_question: z.number({
        required_error: 'id_question is required',
        invalid_type_error: 'id_question must be a number',
    }),
    id_topic: z.number({
        required_error: 'id_topic is required',
        invalid_type_error: 'id_topic must be a number',
    }),
})
