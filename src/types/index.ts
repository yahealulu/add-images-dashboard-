export interface Product {
  id: number;
  product_code: string;
  name_translations: {
    en: string;
    ar: string;
    de: string;
    fr: string;
    cn: string;
    ru: string;
    tur: string;
    ir: string;
    dk: string;
  };
  description_translations: any[];
  category_id: number;
  country_origin_id: {
    id: number;
    name: string;
    code: string;
    type: string;
    air: boolean;
    sea: boolean;
    land: boolean;
    sea_allowed_sizes: any[];
    land_allowed_sizes: any[];
    air_allowed_sizes: any[];
    created_at: string;
    updated_at: string;
  };
  material_property: string;
  product_category: string;
  weight_unit: string;
  barcode: string | null;
  image: string | null;
  in_stock: boolean;
  is_hidden: boolean;
  is_new: boolean;
  created_at: string;
  updated_at: string;
}

export interface ProductsResponse {
  status: boolean;
  message: string;
  data: {
    data: Product[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
  };
}