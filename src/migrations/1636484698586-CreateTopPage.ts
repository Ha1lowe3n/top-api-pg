import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTopPage1636484698586 implements MigrationInterface {
    name = 'CreateTopPage1636484698586'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."top-page_firstcategory_enum" AS ENUM('courses', 'services', 'books,', 'products')`);
        await queryRunner.query(`CREATE TABLE "top-page" ("id" SERIAL NOT NULL, "firstCategory" "public"."top-page_firstcategory_enum" NOT NULL, "secondCategory" character varying NOT NULL, "title" character varying NOT NULL, "categoty" character varying NOT NULL, "hh" text NOT NULL DEFAULT '{}', "advantages" jsonb NOT NULL, "seoText" character varying NOT NULL, "tagsSkills" text NOT NULL, CONSTRAINT "PK_78a804318edfa91b8ae8bc27956" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "top-page"`);
        await queryRunner.query(`DROP TYPE "public"."top-page_firstcategory_enum"`);
    }

}
