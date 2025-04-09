
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  inventory: number;
  sales: number;
  createdAt: Date;
  updatedAt: Date;
  tags?: string[];
}