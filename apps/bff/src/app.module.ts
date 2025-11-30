import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ormConfig } from './config/ormconfig';
import { RowsModule } from './rows/rows.module';
import { RealtimeModule } from './realtime/realtime.module';

@Module({
  imports: [TypeOrmModule.forRoot(ormConfig), RowsModule, RealtimeModule],
})
export class AppModule {}
