export interface Produtcs {
  id: string;
  isFeatured: boolean;
  rating: number;
  countInStock: number;
  price: number;
  brand: string;
  images: [string];
  image: string;
  richDescription: string;
  description: string;
  dataCreated?: Date;
  name: string;
  __v: number;
}
