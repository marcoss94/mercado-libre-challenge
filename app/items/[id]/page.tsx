import { Breadcrumbs } from "@/components";
import { getItems } from "./service";
import "./styles/Detail.scss";
import React from "react";
import { NotFoundItem } from "@/components/NotFoundItem";
import { Price } from "./components";

interface IProps {
  params: { id: string };
}

async function Detail({ params }: IProps) {
  const data = await getItems(params.id);

  if (!data) {
    return <NotFoundItem />;
  }

  const parseText = (text: string): JSX.Element[] => {
    const lines = text.split(/(\r\n|\n)/);
    const parsedText: JSX.Element[] = [];

    lines.forEach((line, index) => {
      parsedText.push(<React.Fragment key={index}>{line}</React.Fragment>);

      if (index < lines.length - 1) {
        parsedText.push(<br key={`br-${index}`} />);
      }
    });

    return parsedText;
  };

  return (
    <>
      <Breadcrumbs categories={data?.item?.categories} />
      <article className="container-detail">
        <div className="image">
          <img
            src={data.item.pictures?.[0].url || ""}
            alt={`Imagen del producto ${data.item.title}`}
          />
        </div>
        <Price
          soldQuantity={data?.item.soldQuantity}
          title={data?.item.title}
          amount={data.item.price.amount}
          condition={data?.item.condition}
          decimals={data?.item.price.decimals}
          freeShipping={data?.item.freeShipping}
        />
        <div className="description">
          <div className="title">Descripción del producto</div>
          <p>{parseText(data.item.description)}</p>
        </div>
      </article>
    </>
  );
}
export default Detail;
