import { Questionnaire } from 'src/domain/questions/questionnaire/questionnaire.entity'

export interface IQuestionnaireService {
    create(questionnaire: Questionnaire): Promise<Questionnaire>
}
