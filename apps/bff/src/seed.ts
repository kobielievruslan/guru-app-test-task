import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { RowEntity } from './rows/row.entity';

const SELECT_OPTIONS = ['A', 'B', 'C'];
const STATUS_OPTIONS = ['todo', 'in-progress', 'done'];
const CATEGORY_OPTIONS = ['alpha', 'beta', 'gamma', 'delta', 'omega'];
const TAG_OPTIONS = ['tag-red', 'tag-blue', 'tag-green'];

async function seed() {
  const dataSource = new DataSource({
    type: 'postgres',
    url:
      process.env.DATABASE_URL ||
      'postgresql://postgres:postgres@db:5432/guru_db?schema=public',
    entities: [RowEntity],
    synchronize: true,
  });

  await dataSource.initialize();
  const repo = dataSource.getRepository(RowEntity);

  const count = await repo.count();
  if (count > 0) {
    console.log(`Database already has ${count} rows. Skipping seed.`);
    await dataSource.destroy();
    return;
  }

  console.log('Seeding 50,000 rows...');

  const rows: RowEntity[] = [];

  for (let i = 1; i <= 50000; i++) {
    const now = new Date();

    rows.push({
      text: `Row ${i}`,
      number: i,
      select: SELECT_OPTIONS[i % SELECT_OPTIONS.length],
      status: STATUS_OPTIONS[i % STATUS_OPTIONS.length],
      category: CATEGORY_OPTIONS[i % CATEGORY_OPTIONS.length],
      priority: i % 5,
      flagged: i % 2 === 0,
      owner: `User ${i % 50}`,
      rating: (i % 10) + 1,
      tag: TAG_OPTIONS[i % TAG_OPTIONS.length],
      description: `Description for row ${i}`,
      note: `Internal note ${i}`,
      email: `user${i}@test.com`,
      phone: `+3805012345${i % 10}${i % 10}`,

      createdAt: new Date(now.getTime() - i * 10000),
      updatedAt: new Date(now.getTime() - i * 5000),

      amount: Math.floor(Math.random() * 10000),
      percentage: Math.floor(Math.random() * 100),
      isActive: i % 2 === 0,
    } as RowEntity);
  }

  const batchSize = 1000;
  for (let i = 0; i < rows.length; i += batchSize) {
    const batch = rows.slice(i, i + batchSize);
    await repo.insert(batch);

    console.log(
      `Inserted rows ${i + 1}-${Math.min(i + batchSize, rows.length)}`,
    );
  }

  console.log('Seed completed.');
  await dataSource.destroy();
}

seed().catch((err) => {
  console.error('Seed failed', err);
  process.exit(1);
});
