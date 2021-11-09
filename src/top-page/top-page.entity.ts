import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum TopLevelCategory {
    Courses = 'courses',
    Services = 'services',
    Books = 'books,',
    Products = 'products',
}

@Entity({ name: 'top-page' })
export class TopPageEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({
        type: 'enum',
        enum: TopLevelCategory,
    })
    firstCategory: TopLevelCategory;

    @Column()
    secondCategory: string;

    @Column()
    title: string;

    @Column()
    categoty: string;

    @Column('simple-json', { default: {} })
    hh: {
        count: number;
        juniorSalary: number;
        middleSalary: number;
        seniorSalary: number;
    };

    @Column({ type: 'jsonb' })
    advantages: {
        title: string;
        description: string;
    }[];

    @Column()
    seoText: string;

    @Column('simple-array')
    tagsSkills: string[];
}
