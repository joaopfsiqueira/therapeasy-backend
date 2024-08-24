import { User } from 'src/domain/people/user/user.entity'
import { Doctor } from 'src/domain/people/doctors/doctor.entity'
import { Person } from 'src/domain/people/person/person.entity'
import { Repository } from 'typeorm'

export interface IRepositories {
    PersonRepository: Repository<Person>
    DoctorRepository: Repository<Doctor>
    UserRepository: Repository<User>
}
