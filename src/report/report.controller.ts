import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  ParseUUIDPipe,
  ParseEnumPipe,
} from '@nestjs/common';

import { ReportService } from '@/report/report.service';
import { ReportType } from '@/interfaces';
import { CreateReportDTO, ReportResponseDTO, UpdateReportDTO } from '@/dtos';

@Controller('api/report/:type')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @Get()
  getAllReports(
    @Param('type', new ParseEnumPipe(ReportType)) type: string,
  ): ReportResponseDTO[] {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    return this.reportService.getAllReports(reportType);
  }

  @Get(':id')
  getReportById(
    @Param('type', new ParseEnumPipe(ReportType)) type: string,
    @Param('id', ParseUUIDPipe) id: string,
  ): ReportResponseDTO {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    return this.reportService.getReportById(reportType, id);
  }

  @Post()
  createReport(
    @Body() { amount, source }: CreateReportDTO,
    @Param('type', new ParseEnumPipe(ReportType)) type: string,
  ): ReportResponseDTO {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    return this.reportService.createReport(reportType, { amount, source });
  }

  @Put(':id')
  updateReport(
    @Param('type', new ParseEnumPipe(ReportType)) type: string,
    @Param('id', ParseUUIDPipe) id: string,
    @Body() body: UpdateReportDTO,
  ): ReportResponseDTO {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    return this.reportService.updateReport(reportType, id, body);
  }

  @Delete(':id')
  @HttpCode(204)
  deleteReport(@Param('id', ParseUUIDPipe) id: string) {
    return this.reportService.deleteReport(id);
  }
}
