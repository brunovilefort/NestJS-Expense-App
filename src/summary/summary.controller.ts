import { Controller, Get } from '@nestjs/common';

import { SummaryService } from '@/summary/summary.service';

@Controller('api/summary')
export class SummaryController {
  constructor(private readonly summaryService: SummaryService) {}

  @Get()
  getSummary() {
    return this.summaryService.calculateSummary();
  }
}
