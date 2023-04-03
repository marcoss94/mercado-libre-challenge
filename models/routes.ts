export const Routes = {
  HOME: {
    path: "/",
    name: "Home",
  },
  ITEMS: {
    path: "items",
    name: "Items",
  },
  CUSTOM_404: {
    path: "not-found",
    name: "Not Found",
  },
};

export interface Route {
  path: string;
  name: string;
}
