import { QuestionTopic } from 'src/domain/questions/questionTopic/questionTopic.entity'

export interface IQuestionTopicService {
    create(body: QuestionTopic): Promise<QuestionTopic>
}
