import { Router, Request, Response } from 'express'
import { ErrorZodFormat } from 'src/utils/errors/zod.error'
import { Http } from '../../../utils/enum/http'
import { IController } from 'src/utils/interfaces/controller.interface'
import { IAuthMiddleware } from 'src/utils/interfaces/middleware/auth.middleware.interface'
import { TopicSchema } from 'src/utils/zod/questions/topic.zod'
import { ITopicService } from 'src/utils/interfaces/questions/topic/topic.service.interface'

class TopicController implements IController {
    public router: Router
    private readonly basePath = '/topic'

    constructor(private service: ITopicService, private AuthMiddleware: IAuthMiddleware) {
        this.router = Router()
        this.initializeRouter()
        this.service = service
    }

    private initializeRouter(): void {
        this.router.post(`${this.basePath}`, this.AuthMiddleware.AuthToken.bind(this), this.create.bind(this))
        // this.router.post(`${this.basePath}`, this.create.bind(this))
    }

    private async create(_req: Request, res: Response): Promise<Response | Error> {
        try {
            const topic = await TopicSchema.safeParseAsync(_req.body)
            if (!topic.success) {
                const error = ErrorZodFormat(topic.error.errors)
                return res.status(Http.BAD_REQUEST).send(error)
            }
            await this.service.create(_req.body)
            return res.status(Http.OK).send('Topic created with success!')
        } catch (error) {
            const isError = error instanceof Error

            return isError
                ? res.status(Http.INTERNAL_SERVER_ERROR).send(error.message)
                : res.status(Http.INTERNAL_SERVER_ERROR).send(String(error))
        }
    }
}

export default TopicController
