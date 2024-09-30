import { Answer } from 'src/domain/questions/answer/answer.entity'

export interface IAnswerService {
    create(body: Answer): Promise<Answer>
}
