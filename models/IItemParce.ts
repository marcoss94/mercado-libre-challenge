export interface IItemParce {
  id: string;
  title: string;
  price: IPrice;
  picture: string;
  condition: string;
  freeShipping: boolean;
  address: IAddress;
}

interface IPrice {
  currency: string;
  amount: number;
  decimals: number;
}

interface IAddress {
  stateName: string;
  cityName: string;
}
