import { z } from 'zod'

export const PatientTopicSchema = z.object({
    id_patient: z.number({
        required_error: 'id_patient is required',
        invalid_type_error: 'id_patient must be a number',
    }),
    id_topic: z.number({
        required_error: 'id_topic is required',
        invalid_type_error: 'id_topic must be a number',
    }),
})
