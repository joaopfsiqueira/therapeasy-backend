import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Question } from '../question/question.entity'
import { Patient } from 'src/domain/people/patients/patient.entity'

@Entity()
export class Answer {
    constructor(id_question: number, id_questionnaire: number, answer: string, id_option: null | number, created_at: Date) {
        this.id_question = id_question
        this.id_questionnaire = id_questionnaire
        this.answer = answer
        this.id_option = id_option
        this.created_at = created_at
    }

    @PrimaryGeneratedColumn('increment')
    id: number = 0

    @Index('id_question_idx')
    @ManyToOne(() => Question, (question) => question.id)
    @JoinColumn({ name: 'id_question' })
    id_question: number

    @Index(['id_question', 'id_questionnaire'], { unique: false })
    @Index('id_questionnaire_idx')
    @ManyToOne(() => Patient, (patient) => patient.id)
    @JoinColumn({ name: 'id_questionnaire' })
    id_questionnaire: number

    @Column({ name: 'answer', type: 'text' })
    answer: string

    @Column({ type: 'int', nullable: true })
    id_option: null | number

    @Column({ name: 'created_at', type: 'timestamp' })
    created_at: Date
}
