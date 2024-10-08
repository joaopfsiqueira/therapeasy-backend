import { Entity, PrimaryGeneratedColumn, Column, Index, OneToOne, JoinColumn, ManyToOne } from 'typeorm'
import { Person } from '../person/person.entity'
import { Doctor } from '../doctors/doctor.entity'

@Entity()
export class Patient {
    constructor(id_medico: number, id_pessoa: number) {
        this.id_pessoa = id_pessoa
        this.id_medico = id_medico
    }

    @Index('id_idx')
    @PrimaryGeneratedColumn('increment')
    id: number = 0

    @Column({ name: 'id_person', type: 'int' })
    @OneToOne(() => Person, (person) => person.id)
    @JoinColumn({ name: 'id_person' })
    id_pessoa: number

    @Column({ name: 'id_doctor', type: 'int' })
    @ManyToOne(() => Doctor, (doctor) => doctor.id)
    @JoinColumn({ name: 'id_doctor' })
    id_medico: number
}
