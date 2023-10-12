export interface Data {
  currency: 'USD' | 'NGN' | 'EUR' | 'JPN';
  products: Products[] | unknown;
  productStatus: 'SUCCESSFUL' | 'FAILURE' | 'PENDING' | 'INACTIVE';
  productsByCategory: Products[];
  productsByCategoryStatus: 'SUCCESSFUL' | 'FAILURE' | 'PENDING' | 'INACTIVE';
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
