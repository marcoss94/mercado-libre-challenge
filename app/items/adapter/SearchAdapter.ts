import { IItemParce } from "@/models";
import { ISearch, ISearchApi } from "../models/ISearch";
import { ItemParceAdapter } from "./ItemParceAdapter";
import { ICategories } from "../models/ICategories";

export const SearchAdapter = (
  item: ISearchApi,
  categories?: ICategories | null
): ISearch => {
  let items: IItemParce[] = [];
  let categoriesList = categories?.pathFromRoot.map((path) => path.name) || [];
  if (item.results.length > 0) {
    let data = item.results.slice(0, 4);

    items = data.map((itemParse) => {
      return ItemParceAdapter(itemParse);
    });
  }

  return {
    author: {
      name: "Marcos",
      lastname: "Alvarez",
    },
    categories: categoriesList,
    items,
  };
};
