import { Breadcrumbs } from "@/components";
import { ResultItem } from "./components";
import { searchService } from "./service";
import { NotFoundItem } from "@/components/NotFoundItem";
import "./styles/Container.scss";

async function Items({ searchParams }: { searchParams: { search: string } }) {
  const query = searchParams.search;
  const data = await searchService(query);

  if (data?.items.length === 0) {
    return <NotFoundItem />;
  }
  return (
    <>
      {data?.categories && <Breadcrumbs categories={data?.categories} />}
      {!!data?.items.length && (
        <section className="container">
          {data &&
            data?.items.map((item) => <ResultItem key={item.id} item={item} />)}
        </section>
      )}
    </>
  );
}
export default Items;
