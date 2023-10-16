import { Products } from '../Redux';

export interface CartType {
  cartStatus: 'SUCCESSFUL' | 'FAILURE' | 'PENDING' | 'INACTIVE';
  cart: CartItem[] | [];
  alert: boolean;
  total: number;
}

export interface CartItem {
  id: number;
  product: Products;
  amount: number;
}
