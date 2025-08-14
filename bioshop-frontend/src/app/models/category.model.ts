export interface Category {
  id: number;
  name: string;
  imageUrl: string;
  productCount: number;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  categoryId: number;
}