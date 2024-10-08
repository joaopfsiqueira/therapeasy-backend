import { Router, Request, Response } from 'express'
import { ErrorZodFormat } from 'src/utils/errors/zod.error'
import { Http } from '../../../utils/enum/http'
import { IController } from 'src/utils/interfaces/controller.interface'
import { IQuestionnaireService } from 'src/utils/interfaces/questions/questionnaire/questionnaire.service.interface'
import { QuestionnaireSchema } from 'src/utils/zod/questions/questionnaire.zod'

class QuestionnaireController implements IController {
    public router: Router
    private readonly basePath = '/questionnaire'

    constructor(private service: IQuestionnaireService) {
        this.router = Router()
        this.initializeRouter()
        this.service = service
    }

    private initializeRouter(): void {
        this.router.post(`${this.basePath}`, this.create.bind(this))
        // this.router.post(`${this.basePath}`, this.create.bind(this))
    }

    private async create(_req: Request, res: Response): Promise<Response | Error> {
        try {
            const questionnaire = await QuestionnaireSchema.safeParseAsync(_req.body)
            if (!questionnaire.success) {
                const error = ErrorZodFormat(questionnaire.error.errors)
                return res.status(Http.BAD_REQUEST).send(error)
            }
            await this.service.create(_req.body)
            return res.status(Http.OK).send('Questionnaire created with success!')
        } catch (error) {
            const isError = error instanceof Error

            return isError
                ? res.status(Http.INTERNAL_SERVER_ERROR).send(error.message)
                : res.status(Http.INTERNAL_SERVER_ERROR).send(String(error))
        }
    }
}

export default QuestionnaireController
