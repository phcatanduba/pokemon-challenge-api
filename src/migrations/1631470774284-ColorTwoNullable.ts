import {MigrationInterface, QueryRunner} from "typeorm";

export class ColorTwoNullable1631470774284 implements MigrationInterface {
    name = 'ColorTwoNullable1631470774284'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."teams" ALTER COLUMN "colorTwo" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."teams" ALTER COLUMN "colorTwo" SET NOT NULL`);
    }

}
