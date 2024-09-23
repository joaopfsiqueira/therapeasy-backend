import { z } from 'zod'

export const TopicSchema = z.object({
    description: z.string({
        required_error: 'description is required',
        invalid_type_error: 'description must be a string',
    }),
})
