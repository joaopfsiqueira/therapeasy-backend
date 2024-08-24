import { User } from 'src/domain/user/user.entity'
import { Doctor } from '../../../domain/doctors/doctor.entity'
import { Person } from '../../../domain/person/person.entity'
import { Repository } from 'typeorm'

export interface IRepositories {
    PersonRepository: Repository<Person>
    DoctorRepository: Repository<Doctor>
    UserRepository: Repository<User>
}
