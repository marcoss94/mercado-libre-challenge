import { IItemParce, Routes } from "@/models";
import Link from "next/link";
import Image from "next/image";
import { Functions } from "@/utilities";
import shippingIcon from "@/app/items/assets/icShipping.png";
import "./styles/ResultItem.scss";
import { testImgBlur } from "@/app/models";

interface IProps {
  item: IItemParce;
}

function ResultItem({ item }: IProps) {
  const decimals = item.price.decimals * 100;
  return (
    <article className="result-item">
      <Link href={`${Routes.ITEMS.path}/${item.id}`}>
        <div className="image">
          <Image
            src={item.picture}
            alt={`Imagen del producto ${item.title}`}
            width={180}
            height={180}
            placeholder="blur"
            blurDataURL={testImgBlur}
            priority
          />
        </div>
      </Link>
      <div className="info">
        <Link href={`${Routes.ITEMS.path}/${item.id}`}>
          <div className="price">
            <span className="amount">
              {`$ ${Functions.formatNumber(item.price.amount)}`}
            </span>
            <span className="decimals">
              {decimals ? decimals.toFixed(0) : ""}
            </span>
            <span className="free-shipping">
              {item.freeShipping && (
                <Image src={shippingIcon} alt="Icono free shipping" />
              )}
            </span>
          </div>
        </Link>
        <div className="title">
          <Link href={`${Routes.ITEMS.path}/${item.id}`}>
            <p>{item.title}</p>
          </Link>
        </div>
      </div>
      <div className="city">{item.address.stateName}</div>
    </article>
  );
}
export default ResultItem;
