import { IRepositories } from 'src/utils/interfaces/repository/repositories.interface'
import { PatientTopic } from './patientTopic.entity'
import { IPatientTopicService } from 'src/utils/interfaces/questions/patientTopic/patientTopic.service.interface'

class PatientTopicService implements IPatientTopicService {
    constructor(private readonly repositories: IRepositories) {}

    async create(body: PatientTopic): Promise<PatientTopic> {
        try {
            return this.repositories.PatientTopicRepository.save(body)
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error(String(error))
            }
        }
    }
}

export default PatientTopicService
