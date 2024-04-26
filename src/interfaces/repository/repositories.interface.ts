import { ObjectLiteral, Repository } from 'typeorm'

export interface IRepositories {
    UserRepository: Repository<ObjectLiteral>
}
