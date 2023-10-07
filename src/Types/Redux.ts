export interface Data {
  currency: 'USD' | 'NGN' | 'EUR' | 'JPN';
  isAllProductsPending: boolean;
  isAllProductsSuccess: boolean;
  isAllProductsFailure: boolean;
  products: Products[] | unknown;
}

export interface Products {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  image: string;
  rating: Rating;
}

export type Category = "men's clothing" | 'jewelery' | 'electronics' | "women's clothing";

export interface Rating {
  rate: number;
  count: number;
}
