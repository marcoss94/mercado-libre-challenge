import { ICategories } from "../../models/ICategories";
import { IItem, IItemApi } from "../models";

export const ItemAdapter = (
  item: IItemApi,
  description: string,
  categories?: ICategories
): IItem => {
  let decimals = item.price % 1;
  let categoriesList =
    categories?.pathFromRoot.map((category) => category.name) || [];

  return {
    author: {
      name: "Marcos",
      lastname: "Alvarez",
    },
    item: {
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
      soldQuantity: item.sold_quantity,
      description,
      categories: categoriesList,
      pictures: item.pictures || [],
    },
  };
};
