import { IPatientService } from '../../../utils/interfaces/patients/patients.service.interface'
import { IRepositories } from '../../../utils/interfaces/repository/repositories.interface'
import { Patient } from './patient.entity'

class PatientService implements IPatientService {
    constructor(private repositories: IRepositories) {}

    async create(body: Patient): Promise<Patient> {
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

export default PatientService
