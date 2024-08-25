import { Entity, PrimaryGeneratedColumn, Column, Index, OneToOne, JoinColumn } from 'typeorm'
import { Person } from '../../people/person/person.entity'

@Entity()
export class Questionnaire {
    constructor(id_person: number, q_hour: Date, weigth: number, answered: boolean, week: number) {
        this.id_person = id_person
        this.q_hour = q_hour
        this.weigth = weigth
        this.answered = answered
        this.week = week
    }

    @Index('id_idx')
    @PrimaryGeneratedColumn('increment')
    id: number = 0

    @Index('idperson_idx', { unique: false })
    @OneToOne(() => Person, (person) => person.id)
    @JoinColumn({ name: 'id_person' })
    id_person: number

    @Column({ name: 'week', type: 'int' })
    week: number

    @Column({ name: 'weigth', type: 'int' })
    weigth: number

    @Index(['id_person', 'q_hour'], { unique: false })
    @Column({ type: 'datetime' })
    q_hour: Date

    @Column({ name: 'answered', type: 'boolean', default: false })
    answered: boolean
}
