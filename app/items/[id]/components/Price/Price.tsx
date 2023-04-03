import { Functions } from "@/utilities";
import Image from "next/image";
import shippingIcon from "@/app/items/assets/icShipping.png";

interface IProps {
  title: string;
  condition: string;
  soldQuantity: number;
  decimals: number;
  amount: number;
  freeShipping: boolean;
}

function Price({
  title,
  decimals,
  condition,
  soldQuantity,
  amount,
  freeShipping,
}: IProps) {
  let isNew = condition === "new" ? "Nuevo" : "Usado";
  let quantity = soldQuantity ? `- ${soldQuantity} vendidos` : "";
  return (
    <div className="right">
      <div className="condition">{`${isNew} ${quantity}`}</div>
      <h1 className="title">{title}</h1>
      <div className="price">
        <span className="amount">{`$ ${Functions.formatNumber(amount)}`}</span>
        <span className="decimals">
          {decimals ? (decimals * 100).toFixed(0) : "00"}
        </span>
        <span className="free-shipping">
          {freeShipping && (
            <Image src={shippingIcon} alt="Icono free shipping" />
          )}
        </span>
      </div>
      <button>Comprar</button>
    </div>
  );
}
export default Price;
