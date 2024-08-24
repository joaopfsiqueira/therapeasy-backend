import { Person } from '../../../domain/people/person/person.entity'

export interface IPersonService {
    create(body: Person): Promise<Person>
    getUserInformation(username: string): Promise<Person>
}
