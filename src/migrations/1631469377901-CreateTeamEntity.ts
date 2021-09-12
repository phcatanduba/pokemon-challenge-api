import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTeamEntity1631469377901 implements MigrationInterface {
    name = 'CreateTeamEntity1631469377901'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "teams" ("id" SERIAL NOT NULL, "pokemonId" integer NOT NULL, "name" character varying NOT NULL, "image" character varying NOT NULL, "colorOne" character varying NOT NULL, "colorTwo" character varying NOT NULL, "teamName" character varying NOT NULL, CONSTRAINT "PK_7e5523774a38b08a6236d322403" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "teams"`);
    }

}
