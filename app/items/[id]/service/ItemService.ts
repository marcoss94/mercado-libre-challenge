import { Endpoints } from "@/models";
import { DescriptionAdapter, ItemAdapter } from "../adapter";
import { categoriesService } from "../../service";

export const getItems = async (id: string) => {
  let urlItem = Endpoints.GET_ITEM.replace("{id}", id);
  let urlDescription = Endpoints.GET_DESCRIPTION.replace("{id}", id);

  let res = Promise.all([fetch(urlItem), fetch(urlDescription)])
    .then((responses) =>
      Promise.all(responses.map((response) => response.json()))
    )
    .then((data) => {
      const item = data[0];
      const description = data[1];
      if (item.error) {
        return null;
      }
      return { item, description };
    })
    .catch(() => {
      return null;
    });

  const data = await res;
  if (!data) {
    return null;
  }
  const categories = await categoriesService(data?.item.category_id);
  const description = DescriptionAdapter(data?.description);
  // console.log(description);
  const result = ItemAdapter(data?.item, description.plainText, categories);

  return result;
};
