import { Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Topic } from '../topic/topic.entity'
import { Question } from '../question/question.entity'

@Entity()
export class QuestionTopic {
    constructor(id_question: number, id_topic: number) {
        this.id_question = id_question
        this.id_topic = id_topic
    }

    @PrimaryGeneratedColumn('increment')
    id: number = 0

    @Index('id_question_idx')
    @ManyToOne(() => Question, (question) => question.id)
    @JoinColumn({ name: 'id_question' })
    id_question: number

    @Index('id_topic_idx')
    @ManyToOne(() => Topic, (topic) => topic.id)
    @JoinColumn({ name: 'id_topic' })
    id_topic: number
}
