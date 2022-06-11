import { Controller, Get, Request } from '@nestjs/common';

@Controller('test/t')
export class TestController {
    @Get('/t')
    getUrlLink(@Request() req: Request): string {
        return req.url;
    }
}
