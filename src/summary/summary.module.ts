import { Module } from '@nestjs/common';

import { ReportModule } from '@/report/report.module';
import { SummaryController } from '@/summary/summary.controller';
import { SummaryService } from '@/summary/summary.service';

@Module({
  imports: [ReportModule],
  controllers: [SummaryController],
  providers: [SummaryService],
})
export class SummaryModule {}
