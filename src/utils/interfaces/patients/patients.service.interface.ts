import { Patients } from 'src/domain/people/patients/patients.entity'

export interface IPatientsService {
    create(body: Patients): Promise<Patients>
}
