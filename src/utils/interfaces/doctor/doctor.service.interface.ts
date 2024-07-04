import { Doctor } from 'src/domain/doctors/doctor.entity'

export interface IDoctorService {
    create(body: Doctor): Promise<Doctor>
}
