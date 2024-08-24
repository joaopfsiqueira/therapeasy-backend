import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Topic {
    constructor(description: string) {
        this.description = description
    }

    @PrimaryGeneratedColumn('increment')
    id: number = 0

    @Column({ name: 'description', type: 'varchar', length: 50 })
    description: string
}
