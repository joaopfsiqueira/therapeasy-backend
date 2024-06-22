import { People } from '../../../domain/people/people.entity'
import { Repository } from 'typeorm'

export interface IRepositories {
    PeopleRepository: Repository<People>
}
