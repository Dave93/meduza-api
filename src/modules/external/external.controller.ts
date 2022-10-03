import { Controller, Get, Post, Body, Patch, Param, Delete, Request } from '@nestjs/common';
import { ExternalService } from './external.service';
import { CreateExternalDto } from './dto/create-external.dto';
import { UpdateExternalDto } from './dto/update-external.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { TOKEN_NAME } from '@auth';

@ApiBearerAuth(TOKEN_NAME)
@Controller('external')
export class ExternalController {
  constructor(private readonly externalService: ExternalService) {}
}
