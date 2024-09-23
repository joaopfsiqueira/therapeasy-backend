import { ITopicService } from 'src/utils/interfaces/questions/topic/topic.service.interface'
import { Topic } from './topic.entity'
import { IRepositories } from 'src/utils/interfaces/repository/repositories.interface'

class TopicService implements ITopicService {
    constructor(private readonly repositorie: IRepositories) {}

    public async create(body: Topic): Promise<Topic> {
        try {
            return this.repositorie.TopicRepository.save(body)
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error(String(error))
            }
        }
    }
}

export default TopicService
