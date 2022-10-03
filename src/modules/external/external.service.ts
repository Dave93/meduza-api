import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateExternalDto } from './dto/create-external.dto';
import { UpdateExternalDto } from './dto/update-external.dto';
import { CacheControlService } from '@modules/cache_control/cache_control.service';
import { api_tokens } from '../../@generated/api-tokens/api-tokens.model';
import { PrismaService } from '../../prisma.service';
import dayjs from 'dayjs';
import { sort, max } from 'radash';

import isBetween from 'dayjs/plugin/isBetween';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { getMinutes, getMinutesNow } from '../../helpers/dates';
import axios from 'axios';

dayjs.extend(utc);
dayjs.extend(timezone);

dayjs.tz.setDefault('Asia/Tashkent');

dayjs.extend(isBetween);

@Injectable()
export class ExternalService {
  constructor(private readonly cacheControl: CacheControlService, private readonly prismaService: PrismaService) {}

  findAll() {
    return `This action returns all external`;
  }

  findOne(id: number) {
    return `This action returns a #${id} external`;
  }

  update(id: number, updateExternalDto: UpdateExternalDto) {
    return `This action updates a #${id} external`;
  }

  remove(id: number) {
    return `This action removes a #${id} external`;
  }
}
