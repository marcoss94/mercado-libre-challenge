import "./styles/Items.scss";

interface IProps {
  children: React.ReactNode;
}

function Layout({ children }: IProps) {
  return <section className="search-result">{children}</section>;
}
export default Layout;
