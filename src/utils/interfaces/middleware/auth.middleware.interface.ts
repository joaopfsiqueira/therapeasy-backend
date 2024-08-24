import { NextFunction, Request, Response } from 'express'

// criando interface para o retorno do "Data" mais abaixo no auth.middleware
export interface TokenPayload {
    login: string
    iat: number
    exp: number
}

export interface IAuthMiddleware {
    AuthToken(_req: Request, res: Response, next: NextFunction): Promise<Response | void>
}
