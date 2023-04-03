import { Breadcrumbs } from "@/components";
import { getItems } from "./service";
import "./styles/Detail.scss";
import Image from "next/image";
import { Functions } from "@/utilities";
import shippingIcon from "@/app/items/assets/icShipping.png";
import React from "react";
import { NotFoundItem } from "@/components/NotFoundItem";

interface IProps {
  params: { id: string };
}

async function Detail({ params }: IProps) {
  const data = await getItems(params.id);

  if (!data) {
    return <NotFoundItem />;
  }

  const decimals = data.item.price.decimals * 100;
  let condition = data?.item.condition === "new" ? "Nuevo" : "Usado";
  let soldQuantity = data?.item.soldQuantity
    ? `- ${data?.item.soldQuantity} vendidos`
    : "";

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
        <div className="left">
          <div className="image">
            <img
              src={data.item.pictures?.[0].url || ""}
              alt={`Imagen del producto ${data.item.title}`}
            />
          </div>
          <div className="description">
            <div className="title">Descripción del producto</div>
            <p>{parseText(data.item.description)}</p>
          </div>
        </div>
        <div className="right">
          <div className="condition">{`${condition} ${soldQuantity}`}</div>
          <h1 className="title">{data.item.title}</h1>
          <div className="price">
            <span className="amount">
              {`$ ${Functions.formatNumber(data.item.price.amount)}`}
            </span>
            <span className="decimals">
              {decimals ? decimals.toFixed(0) : "00"}
            </span>
            <span className="free-shipping">
              {data.item.freeShipping && (
                <Image src={shippingIcon} alt="Icono free shipping" />
              )}
            </span>
          </div>
          <button>Comprar</button>
        </div>
      </article>
    </>
  );
}
export default Detail;
