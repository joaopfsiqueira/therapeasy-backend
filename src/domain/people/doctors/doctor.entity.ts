import { Entity, PrimaryGeneratedColumn, Column, Index, OneToOne, JoinColumn } from 'typeorm'
import { Person } from '../person/person.entity'

@Entity()
export class Doctor {
    constructor(crm: string, id_pessoa: number) {
        this.id_pessoa = id_pessoa
        this.crm = crm
    }

    @PrimaryGeneratedColumn('increment')
    id: number = 0

    @Column({ name: 'id_person', type: 'int' })
    @OneToOne(() => Person, (person) => person.id)
    @JoinColumn({ name: 'id_person' })
    id_pessoa: number

    @Index('id_crmx')
    @Column({ name: 'crm', type: 'char', length: 10, unique: true })
    crm: string
}
