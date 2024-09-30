import { IRepositories } from 'src/utils/interfaces/repository/repositories.interface'
import { IAnswerService } from 'src/utils/interfaces/questions/answer/answer.service.interface'
import { Answer } from './answer.entity'

class AnswerService implements IAnswerService {
    constructor(private readonly repository: IRepositories) {}

    async create(body: Answer): Promise<Answer> {
        try {
            const answer = await this.repository.AnswerRepository.save(body)

            return answer
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error(String(error))
            }
        }
    }
}

export default AnswerService
