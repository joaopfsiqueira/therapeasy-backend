import { IQuestionTopicService } from 'src/utils/interfaces/questions/questionTopic/questionTopic.service.interface'
import { IRepositories } from 'src/utils/interfaces/repository/repositories.interface'
import { QuestionTopic } from './questionTopic.entity'

class QuestionTopicService implements IQuestionTopicService {
    constructor(private readonly repository: IRepositories) {}

    async create(body: QuestionTopic): Promise<QuestionTopic> {
        try {
            return this.repository.QuestionTopicRepository.save(body)
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error(String(error))
            }
        }
    }
}

export default QuestionTopicService
