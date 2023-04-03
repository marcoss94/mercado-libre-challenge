import { ICategories, ICategoriesApi } from "../models/ICategories";

export const CategoriesAdapter = (category: ICategoriesApi): ICategories => {
  return {
    id: category.id,
    name: category.name,
    pathFromRoot: category.path_from_root,
  };
};
