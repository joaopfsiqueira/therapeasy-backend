import { Entity, PrimaryGeneratedColumn, Column, Index, OneToOne, JoinColumn } from 'typeorm'
import { People } from '../people/people.entity'
import { Doctor } from '../doctors/doctor.entity'

@Entity()
export class Patients {
    constructor(id_medico: number, id_pessoa: number) {
        this.id_pessoa = id_pessoa
        this.id_medico = id_medico
    }

    @Index('id_idx')
    @PrimaryGeneratedColumn('increment')
    id: number = 0

    @Column({ name: 'id_person', type: 'int' })
    @OneToOne(() => People, (people) => people.id)
    @JoinColumn({ name: 'id_person' })
    id_pessoa: number

    @Column({ name: 'id_doctor', type: 'int' })
    @OneToOne(() => Doctor, (doctor) => doctor.id)
    @JoinColumn({ name: 'id_doctor' })
    id_medico: number
}
