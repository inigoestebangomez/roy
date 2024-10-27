export interface Yacht {
  id: string;
  name: string;
  coverImage: { url: string };
  buyPrice: { EUR: number };
  length: { meters: number };
  guestsNumber: number;
  cabinsNumber: number;
  formattedPrice?: string;
}

export interface Pagination {
  total: number;
}

export interface YachtResponse {
  data: Yacht[];
  meta: Pagination;
}
