import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1721655574263 implements MigrationInterface {
    name = 'Init1721655574263'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`user_name\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`user_name\` varchar(50) NOT NULL COMMENT '用户名'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`user_name\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`user_name\` varchar(100) NOT NULL COMMENT '用户名'`);
    }

}
