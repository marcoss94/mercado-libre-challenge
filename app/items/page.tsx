"use client";
import { Breadcrumbs, Loading } from "@/components";
import { useSearchParams } from "next/navigation";
import { searchService } from "./service";
import { Suspense, lazy, useEffect, useState } from "react";
import { ISearch } from "./models";
import { Routes } from "@/models";
import "./styles/Container.scss";
import { NotFoundItem } from "@/components/NotFoundItem";

const ResultItem = lazy(() => import("./components/ResultItem/ResultItem"));

function Items() {
  const [data, setData] = useState<ISearch | null>(null);
  const searchParams = useSearchParams();
  const query = searchParams.get("search");

  const getData = async () => {
    const result = await searchService(query);
    setData(result);
  };

  useEffect(() => {
    getData();
  }, [query]);

  if (
    data?.items.length === 0 &&
    window.location.pathname !== Routes.HOME.path
  ) {
    return <NotFoundItem />;
  }

  return (
    <Suspense fallback={<Loading />}>
      {data?.categories && <Breadcrumbs categories={data?.categories} />}
      {!!data?.items.length && (
        <section className="container">
          {data &&
            data?.items.map((item) => <ResultItem key={item.id} item={item} />)}
        </section>
      )}
    </Suspense>
  );
}
export default Items;
