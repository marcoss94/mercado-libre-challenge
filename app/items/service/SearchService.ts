import { Functions } from "@/utilities";
import { SearchAdapter } from "../adapter";
import { IResultApi } from "../models";
import { Endpoints } from "@/models";
import { categoriesService } from "./CategoriesService";

export const searchService = async (q: string | null) => {
  let categories = null;
  let urlSearch = Endpoints.GET_SEARCH.replace("{query}", q ? q : "");
  let res = await fetch(urlSearch)
    .then((result) => result.json())
    .then((data) => {
      return data;
    })
    .catch(() => {
      return null;
    });
  const data = await res;
  if (!data) {
    return null;
  }
  const searchList = data.results.slice(0, 4);
  const categoryId =
    Functions.getMostFrequentCategoryId<IResultApi>(searchList);

  if (categoryId) {
    categories = await categoriesService(categoryId);
  }

  const search = SearchAdapter(data, categories);

  return search;
};
