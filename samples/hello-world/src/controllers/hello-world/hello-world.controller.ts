import { Context } from 'koa';
import {
  Controller,
  RouterCollection,
  RequestMethods,
} from 'decorators-in-koa';

@Controller('hello-world')
export class HelloWorldController extends RouterCollection {
  @RequestMethods.Get()
  printHelloWorld(context: Context): void {
    context.body = 'Hello World';
    context.res.statusCode = 200;
  }
}
