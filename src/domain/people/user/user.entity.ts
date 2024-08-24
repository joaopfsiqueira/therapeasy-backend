import { Entity, PrimaryGeneratedColumn, Column, Index, OneToOne, JoinColumn } from 'typeorm'
import { Person } from '../person/person.entity'

@Entity()
export class User {
    constructor(login: string, email: string, password: string, id_person: number) {
        this.id_person = id_person
        this.login = login
        this.email = email
        this.password = password
    }

    @PrimaryGeneratedColumn({ name: 'id_person', type: 'int' })
    @OneToOne(() => Person, (people) => people.id)
    @JoinColumn({ name: 'id_person' })
    id_person: number

    @Index('id_loginx')
    @Column({ name: 'login', type: 'varchar', length: 100, unique: true })
    login: string

    @Column({ name: 'email', type: 'varchar', length: 255, unique: true })
    email: string

    @Column({ name: 'password', type: 'varchar', length: 255 })
    password: string
}
