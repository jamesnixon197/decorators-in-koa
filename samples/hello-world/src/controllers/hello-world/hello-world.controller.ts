import { Context } from 'koa';

@Controller('hello-world')
export class AuthController extends RouterCollection {
  @RequestMethods.Get()
  searchBySku(context: Context): void {
    context.body = 'Hello World';
    context.res.statusCode = 200;
  }

  @RequestMethods.Post('post')
  getHealthCheck(): void {
    console.log('hit endpoint');
  }
}
