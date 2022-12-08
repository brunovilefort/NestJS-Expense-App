import { Data, ReportType } from '@/interfaces';

export const database: Data = {
  report: [
    {
      id: 'uuid1',
      source: 'salary',
      amount: 7500,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.INCOME,
    },
    {
      id: 'uuid2',
      source: 'food',
      amount: 3000,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.EXPENSE,
    },
    {
      id: 'uuid3',
      source: 'shows',
      amount: 15000,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.EXPENSE,
    },
  ],
};
