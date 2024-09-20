import { IQuestionnaireService } from 'src/utils/interfaces/questions/questionnaire/questionnaire.service.interface'
import { Questionnaire } from './questionnaire.entity'
import { IRepositories } from 'src/utils/interfaces/repository/repositories.interface'

class QuestionnaireService implements IQuestionnaireService {
    constructor(private readonly repositorie: IRepositories) {}

    async create(body: Questionnaire): Promise<Questionnaire> {
        try {
            const person = await this.repositorie.PersonRepository.findOne({ where: { id: body.id_person } })

            if (!person) {
                throw new Error('Person not found')
            }
            return this.repositorie.QuestionnaireRepository.save(body)
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error(String(error))
            }
        }
    }
}

export default QuestionnaireService
