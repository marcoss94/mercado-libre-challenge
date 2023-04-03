import { IAuthor } from "@/models";

export interface IItem {
  author: IAuthor;
  item: IItemParce;
}

interface IItemParce {
  id: string;
  title: string;
  price: IPrice;
  picture: string;
  condition: string;
  freeShipping: Boolean;
  soldQuantity: number;
  description: string;
  categories: string[];
  pictures?: IPicture[];
}

interface IPrice {
  currency: string;
  amount: number;
  decimals: number;
}

interface IPicture {
  id: string;
  url: string;
  size: string;
  max_size: string;
}

export interface IItemApi {
  id: string;
  site_id: string;
  title: string;
  subtitle?: any;
  seller_id: number;
  category_id: string;
  official_store_id?: any;
  price: number;
  base_price: number;
  original_price: number;
  currency_id: string;
  initial_quantity: number;
  available_quantity: number;
  sold_quantity: number;
  sale_terms: ISaleterm[];
  buying_mode: string;
  listing_type_id: string;
  start_time: string;
  stop_time: string;
  condition: string;
  permalink: string;
  thumbnail_id: string;
  thumbnail: string;
  secure_thumbnail: string;
  pictures: IPictureApi[];
  video_id?: any;
  descriptions: any[];
  accepts_mercadopago: boolean;
  non_mercado_pago_payment_methods: any[];
  shipping: IShipping;
  international_delivery_mode: string;
  seller_address: ISelleraddress;
  seller_contact?: any;
  location: ILocation;
  coverage_areas: any[];
  attributes: IAttribute[];
  warnings: any[];
  listing_source: string;
  variations: IVariation[];
  status: string;
  sub_status: any[];
  tags: string[];
  warranty: string;
  catalog_product_id?: any;
  domain_id: string;
  parent_item_id?: any;
  differential_pricing?: any;
  deal_ids: string[];
  automatic_relist: boolean;
  date_created: string;
  last_updated: string;
  health: number;
  catalog_listing: boolean;
  channels: string[];
}

interface IVariation {
  id: number;
  price: number;
  I_combinations: IAttributecombination[];
  available_quantity: number;
  sold_quantity: number;
  sale_terms: any[];
  picture_ids: string[];
  catalog_product_id?: any;
}

interface IAttributecombination {
  id: string;
  name: string;
  value_id?: string | string;
  value_name: string;
  value_struct?: any;
  values: IValue3[];
  value_type: string;
}

interface IValue3 {
  id?: string | string;
  name: string;
  struct?: any;
}

interface IAttribute {
  id: string;
  name: string;
  value_id?: string;
  value_name: string;
  value_struct?: any;
  values: IValue2[];
  attribute_group_id: string;
  attribute_group_name: string;
  value_type: string;
}

interface IValue2 {
  id?: string;
  name: string;
  struct?: any;
}

interface ILocation {}

interface ISelleraddress {
  city: ICity;
  state: IState;
  country: IState;
  search_location: ISearchlocation;
  id: number;
}

interface ISearchlocation {
  neighborhood: IState;
  city: IState;
  state: IState;
}

interface IState {
  id: string;
  name: string;
}

interface ICity {
  name: string;
}

interface IShipping {
  mode: string;
  methods: any[];
  tags: string[];
  dimensions?: any;
  local_pick_up: boolean;
  free_shipping: boolean;
  logistic_type: string;
  store_pick_up: boolean;
}

interface IPictureApi {
  id: string;
  url: string;
  secure_url: string;
  size: string;
  max_size: string;
  quality: string;
}

interface ISaleterm {
  id: string;
  name: string;
  value_id?: string;
  value_name: string;
  value_struct?: IValuestruct;
  values: IValue[];
  value_type: string;
}

interface IValue {
  id?: string;
  name: string;
  struct?: IValuestruct;
}

interface IValuestruct {
  number: number;
  unit: string;
}
