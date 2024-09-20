import { z } from 'zod'

export const PatientSchema = z.object({
    id_person: z.number({
        required_error: 'Id Person is required',
        invalid_type_error: 'Id Person must be a number',
    }),
    id_doctor: z.number({
        required_error: 'Id Doctor is required',
        invalid_type_error: 'Id Doctor must be a number',
    }),
})
