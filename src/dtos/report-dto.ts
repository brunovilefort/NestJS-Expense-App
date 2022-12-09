import { ReportType } from '@/interfaces';
import { Exclude } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

export class CreateReportDTO {
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  amount: number;
  @IsString()
  @IsNotEmpty()
  source: string;
}

export class UpdateReportDTO {
  @IsOptional()
  @IsNumber()
  @IsPositive()
  amount: number;
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  source: string;
}

export class ReportResponseDTO {
  id: string;
  source: string;
  amount: number;
  created_at: Date;
  @Exclude()
  updated_at: Date;
  type: ReportType;
}
