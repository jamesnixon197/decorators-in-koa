import { Context } from 'koa';
import {
  Controller,
  RouterCollection,
  RequestMethods,
} from 'decorators-in-koa';

@Controller('hello')
export class HelloWorldController extends RouterCollection {
  @RequestMethods.Get('world')
  printHelloWorld(context: Context): void {
    context.body = 'Hello World';
    context.res.statusCode = 200;
  }
}
