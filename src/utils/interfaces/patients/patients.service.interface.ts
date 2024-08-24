import { Patients } from 'src/domain/patients/patients.entity'

export interface IPatientsService {
    create(body: Patients): Promise<Patients>
}
