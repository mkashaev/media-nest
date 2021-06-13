import {MigrationInterface, QueryRunner} from "typeorm";

export class AddUsernameToUsers1623583231260 implements MigrationInterface {
    name = 'AddUsernameToUsers1623583231260'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "username" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "username"`);
    }

}
