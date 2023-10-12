import { Products } from '../Redux';

export interface CartType {
  cartStatus: 'SUCCESSFUL' | 'FAILURE' | 'PENDING' | 'INACTIVE';
  cart: Cart[] | [];
  alert: boolean;
}

interface Cart {
  id: number;
  product: Products;
  amount: number;
}
