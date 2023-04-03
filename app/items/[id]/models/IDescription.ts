export interface IDescription {
  text: string;
  plainText: string;
  lastUpdated: string;
  dateCreated: string;
  snapshot: ISnapshot;
}

export interface IDescriptionApi {
  text: string;
  plain_text: string;
  last_updated: string;
  date_created: string;
  snapshot: ISnapshot;
}

interface ISnapshot {
  url: string;
  width: number;
  height: number;
  status: string;
}
