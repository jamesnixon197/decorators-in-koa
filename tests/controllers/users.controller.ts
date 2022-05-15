import { RouterCollection, Controller, RequestMethods } from 'src';
import { Context } from 'koa';

@Controller('users')
export class UserController extends RouterCollection {
  @RequestMethods.Get(':id')
  printUser(ctx: Context): void {
    ctx.body = { id: ctx.params.id };
    ctx.status = 200;
  }

  @RequestMethods.Post()
  createUser(ctx: Context): void {
    ctx.status = 201;
  }

  @RequestMethods.Delete(':id')
  deleteUser(ctx: Context): void {
    ctx.status = 204;
  }

  @RequestMethods.Patch(':id/hobbies/:hobbyId')
  updateUserHobby(ctx: Context): void {
    ctx.status = 204;
  }
}
