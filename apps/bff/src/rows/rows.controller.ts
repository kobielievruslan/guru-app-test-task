import { Controller, Get, Query, Patch, Param, Body } from '@nestjs/common';

import { RowsService } from './rows.service';
import { UpdateRowDto } from './dto/update-row.dto';
import { RowEntity } from './row.entity';

@Controller('rows')
export class RowsController {
  constructor(private readonly service: RowsService) {}

  @Get()
  async getAll(
    @Query('offset') offset = 0,
    @Query('limit') limit = 50,
  ): Promise<RowEntity[]> {
    return this.service.find(Number(offset), Number(limit));
  }

  @Patch(':id')
  async updateRow(
    @Param('id') id: string,
    @Body() dto: UpdateRowDto,
  ): Promise<RowEntity | null> {
    return this.service.update(Number(id), dto);
  }
}
