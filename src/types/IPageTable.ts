export interface IProduct {
  id: number;
  name: string;
  size: 'XXL' | 'XL' | 'L' | 'M' | 'S'; // Assuming size is one of these options
  amount: number;
  active: boolean;
  createdAt: Date;
}

export interface IPricePlan {
  id: number;
  description: string;
  active: boolean;
  createdAt: Date;
  removedAt: Date;
}

export interface IPage {
  id: number;
  title: string;
  active: boolean;
  updatedAt: Date;
  publishedAt: Date;
}
