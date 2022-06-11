import { Controller, Get } from '@nestjs/common';

@Controller('test/t')
export class TestController {
    @Get()
    getHello(): string {
        return 'Hello Test!';
    }
}
