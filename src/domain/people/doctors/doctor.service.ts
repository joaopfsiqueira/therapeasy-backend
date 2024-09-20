import { IDoctorService } from '../../../utils/interfaces/people/doctor/doctor.service.interface'
import { IRepositories } from '../../../utils/interfaces/repository/repositories.interface'
import { Doctor } from './doctor.entity'

class DoctorService implements IDoctorService {
    constructor(private repositories: IRepositories) {}

    async create(body: Doctor): Promise<Doctor> {
        try {
            return await this.repositories.DoctorRepository.save(body)
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error(String(error))
            }
        }
    }
}

export default DoctorService
