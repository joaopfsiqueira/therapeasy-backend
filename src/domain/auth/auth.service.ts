import { IAuthService } from '../../utils/interfaces/auth/auth.service.interface'
import { IRepositories } from '../../utils/interfaces/repository/repositories.interface'
import { Users } from '../people/people.entity'
import bcrypt from 'bcrypt'

export type AuthBody = {
    username: string
    password: string
}

class AuthService implements IAuthService {
    constructor(private repository: IRepositories) {}
    async login(body: AuthBody): Promise<Users> {
        try {
            const loginUser = await this.repository.UserRepository.findOne({
                where: {
                    username: body.username,
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
