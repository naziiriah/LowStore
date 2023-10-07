export interface CartType {
  cartStatus: 'SUCCESSFUL' | 'FAILURE' | 'PENDING' | 'INACTIVE';
  data: string | number | boolean | unknown;
}
