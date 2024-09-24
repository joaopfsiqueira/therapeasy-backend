import { IRepositories } from 'src/utils/interfaces/repository/repositories.interface'
import { OptionAnswer } from './optionAnswer.entity'
import { IOptionAnswerService } from 'src/utils/interfaces/questions/optionAnswer/optionAnswer.service.interface'

class OptionAnswerService implements IOptionAnswerService {
    constructor(private readonly repository: IRepositories) {}

    async create(body: OptionAnswer): Promise<OptionAnswer> {
        try {
            return this.repository.OptionAnswerRepository.save(body)
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error(String(error))
            }
        }
    }
}

export default OptionAnswerService
