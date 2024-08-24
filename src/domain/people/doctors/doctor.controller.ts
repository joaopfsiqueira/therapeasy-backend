import { Router, Request, Response } from 'express'
import { ErrorZodFormat } from 'src/utils/errors/zod.error'
import { Http } from '../../../utils/enum/http'
import { IController } from 'src/utils/interfaces/controller.interface'
import { IDoctorService } from 'src/utils/interfaces/doctor/doctor.service.interface'
import { DoctorSchema } from 'src/utils/zod/doctor.zod'
import { IAuthMiddleware } from 'src/utils/interfaces/middleware/auth.middleware.interface'

class DoctorController implements IController {
    public router: Router
    private readonly basePath = '/doctor'

    constructor(private service: IDoctorService, private AuthMiddleware: IAuthMiddleware) {
        this.router = Router()
        this.initializeRouter()
        this.service = service
    }

    private initializeRouter(): void {
        // this.router.post(`${this.basePath}`, this.AuthMiddleware.AuthToken.bind(this), this.create.bind(this))
        this.router.post(`${this.basePath}`, this.create.bind(this))
    }

    private async create(_req: Request, res: Response): Promise<Response | Error> {
        try {
            const doctor = await DoctorSchema.safeParseAsync(_req.body)
            if (!doctor.success) {
                const error = ErrorZodFormat(doctor.error.errors)
                return res.status(Http.BAD_REQUEST).send(error)
            }
            await this.service.create(_req.body)
            return res.status(Http.OK).send('Doctor created with success!')
        } catch (error) {
            const isError = error instanceof Error

            return isError
                ? res.status(Http.INTERNAL_SERVER_ERROR).send(error.message)
                : res.status(Http.INTERNAL_SERVER_ERROR).send(String(error))
        }
    }
}

export default DoctorController
