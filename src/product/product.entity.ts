import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'product' })
export class ProductEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    image: string;

    @Column()
    title: string;

    @Column()
    price: number;

    @Column()
    oldPrice: number;

    @Column()
    credit: number;

    @Column() // !! нужно будет переделать, создать связь с отзывами (review)
    calculatedRating: number;

    @Column()
    description: string;

    @Column()
    advantages: string;

    @Column()
    disAdvantages: string;

    @Column('simple-array') // ?? может быть нужно будет создать новую таблицу категорий
    categories: string[];

    @Column('simple-json')
    characteristics: {
        [key: string]: string;
    };
}
