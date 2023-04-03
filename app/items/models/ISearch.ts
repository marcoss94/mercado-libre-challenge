import { IAuthor, IItemParce } from "@/models";

export interface ISearch {
  author: IAuthor;
  categories: string[];
  items: IItemParce[];
}

export interface ISearchApi {
  site_id: string;
  country_default_time_zone: string;
  query: string;
  paging: IPaging;
  results: IResultApi[];
  sort: ISort;
  available_sorts: ISort[];
  filters: [];
  available_filters: IFilters[];
}

interface IPaging {
  total: number;
  primary_results: number;
  offset: number;
  limit: number;
}
interface ISort {
  id: string;
  name: string;
}

interface IFilters {
  id: string;
  name: string;
  type: string;
  values: [];
}

export interface IResultApi {
  id: string;
  title: string;
  condition: string;
  thumbnail_id: string;
  catalog_product_id: string;
  listing_type_id: string;
  permalink: string;
  buying_mode: string;
  site_id: string;
  category_id: string;
  domain_id: string;
  thumbnail: string;
  currency_id: string;
  order_backend: number;
  price: number;
  original_price: number;
  sale_price?: any;
  sold_quantity: number;
  available_quantity: number;
  official_store_id?: any;
  use_thumbnail_id: boolean;
  accepts_mercadopago: boolean;
  tags: string[];
  shipping: IShipping;
  stop_time: string;
  seller: ISeller;
  seller_address: ISelleraddress;
  address: IAddress;
  attributes: IAttribute[];
  installments: IInstallments;
  winner_item_id?: any;
  catalog_listing: boolean;
  discounts?: any;
  promotions: any[];
  inventory_id?: any;
}

interface IInstallments {
  quantity: number;
  amount: number;
  rate: number;
  currency_id: string;
}

interface IAttribute {
  id: string;
  name: string;
  value_id: string;
  value_name: string;
  attribute_group_id: string;
  attribute_group_name: string;
  value_struct?: IValuestruct;
  values: IValue[];
  source: number;
  value_type: string;
}

interface IValue {
  id: string;
  name: string;
  struct?: IValuestruct;
  source: number;
}

interface IValuestruct {
  number: number;
  unit: string;
}

interface IAddress {
  state_id: string;
  state_name: string;
  city_id?: any;
  city_name: string;
}

interface ISelleraddress {
  comment: string;
  address_line: string;
  zip_code: string;
  id?: any;
  latitude?: any;
  longitude?: any;
  country: ICountry;
  state: ICountry;
  city: ICity;
}

interface ICity {
  id?: any;
  name: string;
}

interface ICountry {
  id: string;
  name: string;
}

interface ISeller {
  id: number;
  nickname: string;
  car_dealer: boolean;
  real_estate_agency: boolean;
  _: boolean;
  registration_date: string;
  tags: string[];
  car_dealer_logo: string;
  permalink: string;
  seller_reputation: ISellerreputation;
  eshop: IEshop;
}

interface IEshop {
  eshop_id: number;
  seller: number;
  nick_name: string;
  eshop_status_id: number;
  site_id: string;
  eshop_experience: number;
  eshop_rubro?: any;
  eshop_locations: any[];
  eshop_logo_url: string;
}

interface ISellerreputation {
  level_id: string;
  power_seller_status: string;
  transactions: ITransactions;
  metrics: IMetrics;
}

interface IMetrics {
  sales: ISales;
  claims: IClaims;
  delayed_handling_time: IClaims;
  cancellations: IClaims;
}

interface IClaims {
  period: string;
  rate: number;
  value: number;
}

interface ISales {
  period: string;
  completed: number;
}

interface ITransactions {
  canceled: number;
  completed: number;
  period: string;
  ratings: IRatings;
  total: number;
}

interface IRatings {
  negative: number;
  neutral: number;
  positive: number;
}

interface IShipping {
  store_pick_up: boolean;
  free_shipping: boolean;
  logistic_type: string;
  mode: string;
  tags: string[];
  promise?: any;
}
