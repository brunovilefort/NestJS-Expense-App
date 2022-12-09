import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { ReportType } from '@/interfaces';
import { database } from '@/database';
import { ReportResponseDTO } from '@/dtos';

type ReportData = { amount: number; source: string };
type UpdateReport = { amount?: number; source?: string };

@Injectable()
export class AppService {
  getAllReports(type: ReportType): ReportResponseDTO[] {
    return database.report
      .filter((report) => report.type === type)
      .map((report) => new ReportResponseDTO(report));
  }

  getReportById(type: ReportType, id: string): ReportResponseDTO {
    const report = database.report
      .filter((report) => report.type === type)
      .find((report) => report.id === id);
    if (!report) return;
    return new ReportResponseDTO(report);
  }

  createReport(
    type: ReportType,
    { amount, source }: ReportData,
  ): ReportResponseDTO {
    const newReport = {
      id: uuid(),
      source,
      amount,
      created_at: new Date(),
      updated_at: new Date(),
      type,
    };
    database.report.push(newReport);
    return new ReportResponseDTO(newReport);
  }

  updateReport(
    type: ReportType,
    id: string,
    body: UpdateReport,
  ): ReportResponseDTO {
    const reportToUpdate = database.report
      .filter((report) => report.type === type)
      .find((report) => report.id === id);
    if (!reportToUpdate) return;
    const reportIndex = database.report.findIndex(
      (report) => report.id === reportToUpdate.id,
    );
    database.report[reportIndex] = {
      ...database.report[reportIndex],
      ...body,
      updated_at: new Date(),
    };
    return new ReportResponseDTO(database.report[reportIndex]);
  }

  deleteReport(id: string) {
    const reportIndex = database.report.findIndex((report) => report.id === id);
    if (reportIndex === -1) return;
    database.report.splice(reportIndex, 1);
    return;
  }
}
