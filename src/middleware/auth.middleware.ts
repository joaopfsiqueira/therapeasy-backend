import { NextFunction, Request, Response } from 'express'
import * as jwt from 'jsonwebtoken'
import { IAuthMiddleware, TokenPayload } from '../utils/interfaces/middleware/auth.middleware.interface'
import { Http } from '../utils/enum/http'

class AuthMiddleware implements IAuthMiddleware {
    async AuthToken(_req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        const { authorization } = _req.headers

        const token = authorization?.split(' ')[1] // pegando o token que está vindo no header da requisição, e separando o Bearer do token, para pegar somente o token.
        // acreditem se quiser, tive que fazer dessa forma pois estou usando CLASSE, e jwt com instância funciona dessa maneira, se fosse function não reclamaria.

        if (!token) {
            return res.status(401).send('Token not provided')
        }

        try {
            const data = jwt.verify(token, process.env.SECRET_KEY)
            const { login } = data as TokenPayload

            _req.login = login // atribuindo ao atributo criado dentro de @types express manualmente o username que foi extraido do token, fazendo ser acessado em qualquer lugar da aplicação que tenha acesso ao request. Vai ser util nas rotas.
            next()
        } catch (error) {
            // validando se error é uma instância de Error, para fazer o ternário abaixo e conseguir acessar as propriedades do erro, como error.message! Isso é uma das chatices desse typescript, é uma forma de explicitar o tipo do erro, para evitar erros de tipagem. No javascript normal não seria necessário fazer isso, só precisando fazer um res.status(Http.INTERNAL_SERVER_ERROR).send(error.message).
            const isError = error instanceof Error

            return isError ? res.status(Http.UNAUTHORIZED).send(error.message) : res.status(Http.UNAUTHORIZED).send(String(error))
        }
    }
}

export default AuthMiddleware
