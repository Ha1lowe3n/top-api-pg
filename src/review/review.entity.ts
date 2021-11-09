import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
} from 'typeorm';

@Entity({ name: 'review' })
export class ReviewEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    rating: string;

    @CreateDateColumn()
    createdAt: Date;
}
