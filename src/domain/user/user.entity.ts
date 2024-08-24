import { Entity, PrimaryGeneratedColumn, Column, Index, OneToOne, JoinColumn } from 'typeorm'
import { People } from '../people/people.entity'

@Entity()
export class User {
    constructor(login: string, email: string, senha: string, id_pessoa: number) {
        this.id_pessoa = id_pessoa
        this.login = login
        this.email = email
        this.senha = senha
    }

    @PrimaryGeneratedColumn({ name: 'id_person', type: 'int' })
    @OneToOne(() => People, (people) => people.id)
    @JoinColumn({ name: 'id_person' })
    id_pessoa: number

    @Index('id_loginx')
    @Column({ name: 'login', type: 'varchar', length: 100, unique: true })
    login: string

    @Column({ name: 'email', type: 'varchar', length: 255, unique: true })
    email: string

    @Column({ name: 'senha', type: 'varchar', length: 255 })
    senha: string
}
