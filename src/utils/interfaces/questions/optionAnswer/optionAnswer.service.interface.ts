import { OptionAnswer } from 'src/domain/questions/optionAnswer/optionAnswer.entity'

export interface IOptionAnswerService {
    create(body: OptionAnswer): Promise<OptionAnswer>
}
