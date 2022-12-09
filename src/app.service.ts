import { ReportType } from '@/interfaces';
import { database } from '@/database';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAllReports(type: ReportType) {
    return database.report.filter((report) => report.type === type);
  }
}
