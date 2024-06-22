import { Entity, PrimaryGeneratedColumn, Column, Index } from 'typeorm'

@Entity()
export class People {
    constructor(
        nome: string,
        cpf: string,
        gender: string,
        type: string,
        birth_date: Date,
        created_at: Date,
        updated_at: Date,
        active: boolean
    ) {
        this.nome = nome
        this.cpf = cpf
        this.gender = gender
        this.type = type
        this.birth_date = birth_date
        this.created_at = created_at
        this.updated_at = updated_at
        this.active = active
    }

    @Index('id_idx')
    @PrimaryGeneratedColumn('increment')
    id: number = 0

    // @Index('username_idx', { unique: true })
    // @Column({ name: '', type: 'varchar', length: 50 })
    // : string

    @Column({ name: 'nome', type: 'varchar', length: 255 })
    nome: string

    // @Column({ type: 'varchar', length: 255 })
    // password: string

    // @Index('email_idx', { unique: true })
    // @Column({ name: 'email', type: 'varchar', length: 100 })
    // email: string

    @Index('cpf_idx', { unique: true })
    @Column({ name: 'cpf', type: 'varchar', length: 11 })
    cpf: string

    @Column({ name: 'gender', type: 'varchar', length: 9 })
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
