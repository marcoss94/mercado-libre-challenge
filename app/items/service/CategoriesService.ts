import { Endpoints } from "@/models";
import { CategoriesAdapter } from "../adapter";

export const categoriesService = async (id: string | null) => {
  let res = await fetch(Endpoints.GET_CATEGORIES.replace("{id}", id ? id : ""))
    .then((result) => result.json())
    .then((data) => {
      const category = CategoriesAdapter(data);
      return category;
    });

  return res;
};
