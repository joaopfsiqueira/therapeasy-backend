import { Topic } from 'src/domain/questions/topic/topic.entity'

export interface ITopicService {
    create(body: Topic): Promise<Topic>
}
