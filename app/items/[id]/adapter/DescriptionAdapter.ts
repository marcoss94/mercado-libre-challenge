import { IDescription, IDescriptionApi } from "../models";

export const DescriptionAdapter = (
  description: IDescriptionApi
): IDescription => {
  return {
    text: description.text,
    plainText: description.plain_text,
    lastUpdated: description.last_updated,
    dateCreated: description.date_created,
    snapshot: {
      url: description.snapshot.url,
      width: description.snapshot.width,
      height: description.snapshot.height,
      status: description.snapshot.status,
    },
  };
};
