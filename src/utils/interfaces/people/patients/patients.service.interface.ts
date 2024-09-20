import { Patient } from 'src/domain/people/patients/patient.entity'

export interface IPatientService {
    create(body: Patient): Promise<Patient>
}
