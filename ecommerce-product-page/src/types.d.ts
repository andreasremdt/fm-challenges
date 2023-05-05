export type Image = {
  src: string;
  alt: string;
};

export type Product = {
  company: string;
  name: string;
  description: string;
  price: number;
  discount?: number;
  images: Image[];
  available: number;
};

export type CartEntry = {
  product: Product;
  quantity: number;
};
