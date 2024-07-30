import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';

config({ path: `${process.cwd()}/.env.development` });

export const dataSourceOptions = {
  type: process.env['DB_TYPE'],
  host: process.env['DB_HOST'],
  port: Number(process.env['DB_PORT']),
  username: process.env['DB_USERNAME'],
  password: process.env['DB_PASSWORD'],
  database: process.env['DB_DATABASE'],
  synchronize: false,
  logging: true,
  entities: ['src/modules/**/entities/*.entity.ts'],
  poolSize: 10,
  migrations: ['src/migrations/**.ts'],
  connectorPackage: 'mysql2',
};

export default new DataSource(dataSourceOptions as DataSourceOptions);
