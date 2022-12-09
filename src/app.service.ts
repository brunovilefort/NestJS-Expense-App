import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { ReportType } from '@/interfaces';
import { database } from '@/database';

type ReportData = { amount: number; source: string };

@Injectable()
export class AppService {
  getAllReports(type: ReportType) {
    return database.report.filter((report) => report.type === type);
  }

  getReportById(type: ReportType, id: string) {
    return database.report
      .filter((report) => report.type === type)
      .find((report) => report.id === id);
  }

  createReport(type: ReportType, { amount, source }: ReportData) {
    const newReport = {
      id: uuid(),
      source,
      amount,
      created_at: new Date(),
      updated_at: new Date(),
      type,
    };
    database.report.push(newReport);
    return newReport;
  }
}
