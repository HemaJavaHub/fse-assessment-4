import { Product } from './product';

describe('Product', () => {
  it('should create an instance', () => {
    expect( new Product("dresses","gucci","red",1966)).toBeTruthy();
  });
});