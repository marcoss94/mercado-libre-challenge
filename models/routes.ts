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
    path: "404",
    name: "404",
  },
};

export interface Route {
  path: string;
  name: string;
}
