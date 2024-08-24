import { IAuthService } from '../../utils/interfaces/auth/auth.service.interface'
import { IRepositories } from '../../utils/interfaces/repository/repositories.interface'
import { User } from '../people/user/user.entity'
import bcrypt from 'bcrypt'

export type AuthBody = {
    login: string
    password: string
}

class AuthService implements IAuthService {
    constructor(private repository: IRepositories) {}
    async login(body: AuthBody): Promise<User> {
        try {
            const loginUser = await this.repository.UserRepository.findOne({
                where: {
                    login: body.login,
                },
            })

            if (!loginUser) {
                throw new Error('Usuario ou senha incorretos!')
            }

            const isMatch = bcrypt.compareSync(body.password, loginUser.password)
            if (!isMatch) {
                throw new Error('Usuario ou senha incorretos!')
            }
            return loginUser
        } catch (error) {
            throw new Error('Usuario ou senha incorretos!')
        }
    }
}

export default AuthService
