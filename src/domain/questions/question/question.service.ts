import { IQuestionService } from 'src/utils/interfaces/questions/question/question.service.interface'
import { IRepositories } from 'src/utils/interfaces/repository/repositories.interface'
import { Question } from './question.entity'

class QuestionService implements IQuestionService {
    constructor(private readonly repository: IRepositories) {}

    async create(body: Question): Promise<Question> {
        try {
            const question = await this.repository.QuestionRepository.save(body)

            return question
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error(String(error))
            }
        }
    }
}

export default QuestionService
