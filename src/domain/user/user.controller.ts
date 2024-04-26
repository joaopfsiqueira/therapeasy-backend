import { UserSchema } from '../../utils/zod/user.zod'
import { Request, Response, Router } from 'express'
import { Http } from '../../utils/enum/http'
import { IUserService } from '../../utils/interfaces/user/user.service.interface'
import { IController } from '../../utils/interfaces/controller.interface'

import { ErrorZodFormat } from '../../utils/errors/zod.error'

class UserController implements IController {
    public router: Router
    private readonly basePath = '/user'

    constructor(private service: IUserService) {
        this.router = Router()
        this.initializeRouter()
        this.service = service
    }

    //método criado para inicializar nova subrota!
    private initializeRouter(): void {
        this.router.post(`${this.basePath}`, this.create.bind(this))
        //fazendo um binding para a função que será chamada quando a requisição for recebida.
    }

    private async create(_req: Request, res: Response): Promise<Response | Error> {
        try {
            const user = await UserSchema.safeParseAsync(_req.body) //utilizando o safe parse porque o safeparse não da um throw no erro, ele retorna como mensagem e ai eu faço o que eu bem entender.
            if (!user.success) {
                const error = ErrorZodFormat(user.error.errors)
                return res.status(Http.BAD_REQUEST).send(error)
            }
            await this.service.create(_req.body)
            return res.status(Http.OK).send('User created with success!')
        } catch (error) {
            // validando se error é uma instância de Error, para fazer o ternário abaixo e conseguir acessar as propriedades do erro, como error.message! Isso é uma das chatices desse typescript, é uma forma de explicitar o tipo do erro, para evitar erros de tipagem. No javascript normal não seria necessário fazer isso, só precisando fazer um res.status(Http.INTERNAL_SERVER_ERROR).send(error.message).
            const isError = error instanceof Error

            return isError ? res.status(Http.INTERNAL_SERVER_ERROR).send(error.message) : res.status(Http.INTERNAL_SERVER_ERROR).send(String(error))
        }
    }
}

export default UserController
