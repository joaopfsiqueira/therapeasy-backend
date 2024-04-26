import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Users {
    constructor(
        username: string,
        nome: string,
        password: string,
        email: string,
        cpf: string,
        gender: string,
        type: string,
        birth_date: Date,
        created_at: Date,
        updated_at: Date,
        active: boolean
    ) {
        this.username = username
        this.nome = nome
        this.password = password
        this.email = email
        this.cpf = cpf
        this.gender = gender
        this.type = type
        this.birth_date = birth_date
        this.created_at = created_at
        this.updated_at = updated_at
        this.active = active
    }

    @PrimaryGeneratedColumn('increment')
    id: number = 0

    @Column({ name: 'username', unique: true, type: 'varchar', length: 50 })
    username: string

    @Column({ name: 'nome', type: 'varchar', length: 255 })
    nome: string

    @Column({ type: 'varchar', length: 255 })
    password: string

    @Column({ name: 'email', unique: true, type: 'varchar', length: 100 })
    email: string

    @Column({ name: 'cpf', unique: true, type: 'varchar', length: 11 })
    cpf: string

    @Column({ name: 'gender', type: 'varchar', length: 1 })
    gender: string

    @Column({ name: 'type', type: 'varchar', length: 15, nullable: true })
    type: string

    @Column({ type: 'datetime' })
    birth_date: Date

    @Column({ name: 'created_at', type: 'datetime', precision: 0, nullable: false })
    created_at: Date

    @Column({ name: 'updated_at', type: 'datetime', precision: 0, nullable: false })
    updated_at: Date

    @Column({ name: 'active', type: 'boolean', default: true })
    active: boolean
}
