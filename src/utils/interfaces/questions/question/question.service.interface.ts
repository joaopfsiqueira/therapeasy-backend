import { Question } from 'src/domain/questions/question/question.entity'

export interface IQuestionService {
    create(body: Question): Promise<Question>
}
