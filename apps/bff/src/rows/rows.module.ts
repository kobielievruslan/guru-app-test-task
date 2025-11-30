import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RowEntity } from './row.entity';
import { RowsService } from './rows.service';
import { RowsController } from './rows.controller';
import { RealtimeModule } from '../realtime/realtime.module';

@Module({
  imports: [TypeOrmModule.forFeature([RowEntity]), RealtimeModule],
  controllers: [RowsController],
  providers: [RowsService],
})
export class RowsModule {}
