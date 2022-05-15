import { RouterCollection, Controller, RequestMethods } from 'src';
import { Context } from 'koa';

@Controller('products')
export class ProductController extends RouterCollection {
  @RequestMethods.Get(':id')
  printProduct(ctx: Context): void {
    ctx.body = { id: ctx.params.id };
    ctx.status = 200;
  }

  @RequestMethods.Post()
  createProduct(ctx: Context): void {
    ctx.status = 201;
  }

  @RequestMethods.Delete(':id')
  deleteProduct(ctx: Context): void {
    ctx.status = 204;
  }

  @RequestMethods.Patch(':id/variants/:variantId')
  updateProductVariant(ctx: Context): void {
    ctx.status = 204;
  }
}
