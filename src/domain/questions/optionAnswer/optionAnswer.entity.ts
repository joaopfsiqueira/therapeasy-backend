import { PrimaryGeneratedColumn, Index, ManyToOne, JoinColumn, Entity, Column } from 'typeorm'
import { Question } from '../question/question.entity'

@Entity()
export class OptionAnswer {
    constructor(id_question: number, option: string, weigth: number) {
        this.id_question = id_question
        this.option = option
        this.weigth = weigth
    }

    @PrimaryGeneratedColumn('increment')
    id: number = 0

    @Index('id_question_idx')
    @ManyToOne(() => Question, (question) => question.id)
    @JoinColumn({ name: 'id_question' })
    id_question: number

    @Column({ name: 'option', type: 'varchar', length: 100 })
    option: string

    @Column({ name: 'weigth', type: 'int' })
    weigth: number
}
