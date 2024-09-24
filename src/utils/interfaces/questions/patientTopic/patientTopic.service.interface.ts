import { PatientTopic } from 'src/domain/questions/patientTopic/patientTopic.entity'

export interface IPatientTopicService {
    create(body: PatientTopic): Promise<PatientTopic>
}
