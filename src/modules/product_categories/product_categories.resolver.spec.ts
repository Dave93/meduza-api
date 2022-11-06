import { Test, TestingModule } from '@nestjs/testing';
import { ProductCategoriesResolver } from './product_categories.resolver';
import { ProductCategoriesService } from './product_categories.service';

describe('ProductCategoriesResolver', () => {
  let resolver: ProductCategoriesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductCategoriesResolver, ProductCategoriesService],
    }).compile();

    resolver = module.get<ProductCategoriesResolver>(ProductCategoriesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
