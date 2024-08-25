import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Question {
    constructor(question: string, free_field: boolean, weigth: number) {
        this.question = question
        this.free_field = free_field
        this.weigth = weigth
    }

    @PrimaryGeneratedColumn('increment')
    id: number = 0

    @Column({ name: 'question', type: 'text' })
    question: string

    @Column({ name: 'free_field', type: 'boolean', default: false })
    free_field: boolean

    @Column({ name: 'weigth', type: 'int' })
    weigth: number
}
