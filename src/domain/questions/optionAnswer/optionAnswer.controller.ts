import { Router, Request, Response } from 'express'
import { ErrorZodFormat } from 'src/utils/errors/zod.error'
import { Http } from '../../../utils/enum/http'
import { IController } from 'src/utils/interfaces/controller.interface'
import { IOptionAnswerService } from 'src/utils/interfaces/questions/optionAnswer/optionAnswer.service.interface'
import { OptionAnswerSchema } from 'src/utils/zod/questions/optionAnswer.zod'

class OptionAnswerController implements IController {
    public router: Router
    private readonly basePath = '/optionAnswer'

    constructor(private service: IOptionAnswerService) {
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
            const optionAnswer = await OptionAnswerSchema.safeParseAsync(_req.body)
            if (!optionAnswer.success) {
                const error = ErrorZodFormat(optionAnswer.error.errors)
                return res.status(Http.BAD_REQUEST).send(error)
            }
            await this.service.create(_req.body)
            return res.status(Http.OK).send('optionAnswer created with success!')
        } catch (error) {
            const isError = error instanceof Error

            return isError
                ? res.status(Http.INTERNAL_SERVER_ERROR).send(error.message)
                : res.status(Http.INTERNAL_SERVER_ERROR).send(String(error))
        }
    }
}

export default OptionAnswerController
