import { IItemParce } from "@/models";
import { IResultApi } from "../models";

export const ItemParceAdapter = (item: IResultApi): IItemParce => {
  let decimals = item.price % 1;

  return {
    id: item.id,
    title: item.title,
    price: {
      currency: item.currency_id,
      amount: item.price,
      decimals,
    },
    picture: item.thumbnail,
    condition: item.condition,
    freeShipping: item.shipping.free_shipping,
    address: {
      stateName: item.seller_address?.state?.name,
      cityName: item.seller_address?.city?.name,
    },
  };
};
