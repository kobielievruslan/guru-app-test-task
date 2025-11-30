import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RowEntity } from './row.entity';
import { UpdateRowDto } from './dto/update-row.dto';
import { RealtimeGateway } from '@/realtime/realtime.gateway';

@Injectable()
export class RowsService {
  constructor(
    @InjectRepository(RowEntity)
    private readonly repo: Repository<RowEntity>,
    private readonly realtime: RealtimeGateway,
  ) {}

  async find(offset: number, limit: number): Promise<RowEntity[]> {
    return this.repo.find({
      skip: offset,
      take: limit,
      order: { id: 'ASC' },
    });
  }

  async update(id: number, dto: UpdateRowDto): Promise<RowEntity> {
    await this.repo.update(id, dto);

    const updated = await this.repo.findOneBy({ id });
    if (!updated) {
      throw new NotFoundException(`Row ${id} not found`);
    }

    this.realtime.broadcastRowUpdate(updated);

    return updated;
  }
}
