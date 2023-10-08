import { Products } from '../Redux';

export interface CartType {
  cartStatus: 'SUCCESSFUL' | 'FAILURE' | 'PENDING' | 'INACTIVE';
  cart: Cart[] | [];
}

interface Cart {
  id: number;
  product: Products;
  amount: number;
}
