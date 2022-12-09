import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';

import { SummaryModule } from '@/summary/summary.module';
import { ReportModule } from '@/report/report.module';
import { AppController } from '@/app.controller';
import { AppService } from '@/app.service';

@Module({
  imports: [SummaryModule, ReportModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
  ],
})
export class AppModule {}
