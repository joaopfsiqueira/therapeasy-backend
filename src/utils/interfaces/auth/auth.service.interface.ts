import { Users } from '../../../domain/people/person/person.entity'
import { AuthBody } from '../../../domain/auth/auth.service'

export interface IAuthService {
    login(body: AuthBody): Promise<Users>
}
