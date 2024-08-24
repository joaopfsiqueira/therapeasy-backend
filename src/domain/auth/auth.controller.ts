import { Request, Response, Router } from 'express'
import { Http } from '../../utils/enum/http'
import { IController } from '../../utils/interfaces/controller.interface'
import { IAuthService } from '../../utils/interfaces/auth/auth.service.interface'
import * as jwt from 'jsonwebtoken'
import { AuthSchema } from '../../utils/zod/auth.zod'
import { ErrorZodFormat } from '../../utils/errors/zod.error'

class AuthController implements IController {
    public router: Router
    private readonly basePath = '/auth'

    constructor(private service: IAuthService) {
        this.router = Router()
        this.initializeRouter()
        this.service = service
    }

    //método criado para inicializar nova subrota!
    private initializeRouter(): void {
        this.router.post(`${this.basePath}`, this.authenticate.bind(this))
        //fazendo um binding para a função que será chamada quando a requisição for recebida.
    }

    private async authenticate(_req: Request, res: Response): Promise<Response | Error> {
        try {
            const login = await AuthSchema.safeParseAsync(_req.body)

            if (!login.success) {
                return res.status(Http.BAD_REQUEST).send(ErrorZodFormat(login.error.errors))
            }

            const user = await this.service.login(_req.body)
            const token = jwt.sign({ login: user.login }, process.env.SECRET_KEY, {
                expiresIn: '1h',
            })
            return res.status(Http.OK).json({ token })
        } catch (error) {
            // validando se error é uma instância de Error, para fazer o ternário abaixo e conseguir acessar as propriedades do erro, como error.message! Isso é uma das chatices desse typescript, é uma forma de explicitar o tipo do erro, para evitar erros de tipagem. No javascript normal não seria necessário fazer isso, só precisando fazer um res.status(Http.INTERNAL_SERVER_ERROR).send(error.message).
            const isError = error instanceof Error

            return isError
                ? res.status(Http.INTERNAL_SERVER_ERROR).send(error.message)
                : res.status(Http.INTERNAL_SERVER_ERROR).send(String(error))
        }
    }
}

export default AuthController
