import { IPatientsService } from '../../utils/interfaces/patients/patients.service.interface'
import { IRepositories } from '../../utils/interfaces/repository/repositories.interface'
import { Patients } from './patients.entity'

class PatientsService implements IPatientsService {
    constructor(private repositories: IRepositories) {}

    async create(body: Patients): Promise<Patients> {
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

export default PatientsService
