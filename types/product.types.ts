export type Discount = {
  amount: number;
  percentage: number;
};

export type Product = {
  id: string;
  discountPercent?: number;
  category?: string;
  price: number;
  sizes: string[];
  image: string;
  gallery?: string[];
  description: string;
  name: string;
  title?: string;
  stock: number;
};
