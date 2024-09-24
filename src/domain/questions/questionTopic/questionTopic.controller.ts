import { Router, Request, Response } from 'express'
import { ErrorZodFormat } from 'src/utils/errors/zod.error'
import { Http } from '../../../utils/enum/http'
import { IController } from 'src/utils/interfaces/controller.interface'
import { IQuestionService } from 'src/utils/interfaces/questions/question/question.service.interface'
import { QuestionTopicSchema } from 'src/utils/zod/questions/questionTopic.zod'

class PatientTopicController implements IController {
    public router: Router
    private readonly basePath = '/questionTopic'

    constructor(private service: IQuestionService) {
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
            const questionTopic = await QuestionTopicSchema.safeParseAsync(_req.body)
            if (!questionTopic.success) {
                const error = ErrorZodFormat(questionTopic.error.errors)
                return res.status(Http.BAD_REQUEST).send(error)
            }
            await this.service.create(_req.body)
            return res.status(Http.OK).send('questionTopic created with success!')
        } catch (error) {
            const isError = error instanceof Error

            return isError
                ? res.status(Http.INTERNAL_SERVER_ERROR).send(error.message)
                : res.status(Http.INTERNAL_SERVER_ERROR).send(String(error))
        }
    }
}

export default PatientTopicController
