import { Patient } from 'src/domain/people/patients/patient.entity'
import { Entity, PrimaryGeneratedColumn, Index, ManyToOne, JoinColumn } from 'typeorm'
import { Topic } from '../topic/topic.entity'

@Entity()
export class PatientTopic {
    constructor(id_patient: number, id_topic: number) {
        this.id_patient = id_patient
        this.id_topic = id_topic
    }

    @PrimaryGeneratedColumn('increment')
    id: number = 0

    @Index('id_patient_idx')
    @ManyToOne(() => Patient, (patient) => patient.id)
    @JoinColumn({ name: 'id_patient' })
    id_patient: number

    @Index('id_topic_idx')
    @ManyToOne(() => Topic, (topic) => topic.id)
    @JoinColumn({ name: 'id_topic' })
    id_topic: number
}
