import { Entity, PrimaryGeneratedColumn, Column, Index, OneToOne, JoinColumn } from 'typeorm'
import { People } from '../people/people.entity'

@Entity()
export class Doctor {
    constructor(crm: string, id_pessoa: number) {
        this.id_pessoa = id_pessoa
        this.crm = crm
    }

    @PrimaryGeneratedColumn({ name: 'id_person', type: 'int' })
    @OneToOne(() => People, (people) => people.id)
    @JoinColumn({ name: 'id_person' })
    id_pessoa: number

    @Index('id_crmx')
    @Column({ name: 'crm', type: 'char', length: 10, unique: true })
    crm: string
}
