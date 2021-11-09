import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateProduct1636482390036 implements MigrationInterface {
    name = 'CreateProduct1636482390036'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product" ("id" SERIAL NOT NULL, "image" character varying NOT NULL, "title" character varying NOT NULL, "price" integer NOT NULL, "oldPrice" integer NOT NULL, "credit" integer NOT NULL, "calculatedRating" integer NOT NULL, "description" character varying NOT NULL, "advantages" character varying NOT NULL, "disAdvantages" character varying NOT NULL, "categories" text NOT NULL, "characteristics" text NOT NULL, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "product"`);
    }

}
