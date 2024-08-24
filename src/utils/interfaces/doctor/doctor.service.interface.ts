import { Doctor } from '../../../domain/people/doctors/doctor.entity'

export interface IDoctorService {
    create(body: Doctor): Promise<Doctor>
}
