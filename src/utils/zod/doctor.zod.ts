import { z } from 'zod'

export const DoctorSchema = z.object({
    id_person: z.number({
        required_error: 'Id Person is required',
        invalid_type_error: 'Id Person must be a number',
    }),
    crm: z.string({
        required_error: 'CRM is required',
        invalid_type_error: 'CRM must be a string',
    }),
})
