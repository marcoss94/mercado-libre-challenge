import "./styles/Breadcrumbs.scss";

interface IProps {
  categories?: string[] | undefined;
}

function Breadcrumbs({ categories }: IProps) {
  if (!categories) {
    return <></>;
  }

  return (
    <section className="breadcrumbs-container">
      {categories.map((category, index) => (
        <span
          className={index === categories.length - 1 ? "last" : ""}
          key={index}
        >
          {category}
        </span>
      ))}
    </section>
  );
}
export default Breadcrumbs;
