import { Controller, Get } from '@nestjs/common';

@Controller('/app')
export class AppController {
    @Get('/greet')
    getRootRoute() {
        return 'hello world';
    }
}