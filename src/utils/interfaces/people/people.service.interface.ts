import { People } from '../../../domain/people/people.entity'

export interface IPeopleService {
    create(body: People): Promise<People>
    getUserInformation(username: string): Promise<People>
}
