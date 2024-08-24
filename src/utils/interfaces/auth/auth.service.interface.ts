import { Users } from '../../../domain/person/person.entity'
import { AuthBody } from '../../../domain/auth/auth.service'

export interface IAuthService {
    login(body: AuthBody): Promise<Users>
}
