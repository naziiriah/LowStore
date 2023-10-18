/* eslint-disable @typescript-eslint/no-explicit-any */
import { Products } from '../Redux';

export interface CartType {
  cartStatus: 'SUCCESSFUL' | 'FAILURE' | 'PENDING' | 'INACTIVE';
  cart: CartItem[] | any[];
  alert: string;
  total: number;
}

export interface CartItem {
  id: number;
  product: Products;
  amount: number;
}
