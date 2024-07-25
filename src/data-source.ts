import { DataSource, DataSourceOptions } from 'typeorm';
import { User } from './modules/user/entities/user.entity';

export const dataSourceOptions = {
  type: 'mysql',
  host: '124.221.1.101',
  port: 3306,
  username: 'root',
  password: 'admin123',
  database: 'mall',
  synchronize: false,
  logging: true,
  entities: [User],
  poolSize: 10,
  migrations: ['src/migrations/**.ts'],
  connectorPackage: 'mysql2',
};

export default new DataSource(dataSourceOptions as DataSourceOptions);
