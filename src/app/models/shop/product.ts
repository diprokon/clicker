export enum ProductType {
  cursor,
  worker
}

export interface Product {
  id: number;
  type: ProductType;
  name: string;
  icon: string;
  price: number;
  priceMultiplayer: number;
  power: number;
  quantity?: number;
}

export const productList: Product[] = [
  {
    id: 1,
    type: ProductType.cursor,
    name: 'Knife',
    icon: 'surgical',
    price: 10,
    priceMultiplayer: 1.1,
    power: 2
  },
  {
    id: 2,
    type: ProductType.worker,
    name: 'Worker',
    icon: 'engineering',
    price: 300,
    priceMultiplayer: 1.4,
    power: 5
  }
]
