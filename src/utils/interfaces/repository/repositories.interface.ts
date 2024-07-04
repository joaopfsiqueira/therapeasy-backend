import { User } from 'src/domain/user/user.entity'
import { Doctor } from '../../../domain/doctors/doctor.entity'
import { People } from '../../../domain/people/people.entity'
import { Repository } from 'typeorm'

export interface IRepositories {
    PeopleRepository: Repository<People>
    DoctorRepository: Repository<Doctor>
    UserRepository: Repository<User>
}
