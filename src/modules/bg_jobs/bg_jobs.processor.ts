import { Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';
import { PrismaService } from '../../prisma.service';
import { CacheControlService } from '@modules/cache_control/cache_control.service';
import { order_status } from '../../@generated/order-status/order-status.model';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { SearchService } from '@modules/search/search.service';

import { PubSub } from 'graphql-subscriptions';

const pubSub = new PubSub();

@Processor('bg_jobs')
export class BgJobsProcessor {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly cacheService: CacheControlService,
    private readonly searchService: SearchService,
  ) {}
  private readonly logger = new Logger(BgJobsProcessor.name);

}
