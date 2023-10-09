import { Products } from './Redux';

export interface CarouselProp {
  products: Products[];
}

export interface CardPieceprop {
  product: Products;
}

export interface AllProductType {
  products: {
    productStatus: 'PENDING' | 'FAILURE' | 'SUCCESSFUL';
  };
}
