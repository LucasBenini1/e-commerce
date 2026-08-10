export interface Item {
  id: number;
  name: string;
  slug: string;
  category: string;
  subcategory: string;
  brand: string;
  description: string;
  price: number;
  compareAtPrice: number;
  currency: string;
  sizes: string[];
  colors: string[];
  material: string[];
  gender: string;
  stock: number;
  rating: number;
  reviewsCount: number;
  featured: boolean;
  image: string;
}

export interface ItemsResponse {
  items: Item[];
}