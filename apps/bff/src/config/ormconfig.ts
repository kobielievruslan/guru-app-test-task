import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { RowEntity } from '../rows/row.entity';

export const ormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'db',
  port: 5432,
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASS || 'postgres',
  database: process.env.DB_NAME || 'guru_db',
  synchronize: true,
  entities: [RowEntity],
};
