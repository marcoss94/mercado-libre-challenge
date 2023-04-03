import "./styles/NotFoundItem.scss";
import searchSvg from "./assets/searchSvg.svg";
import Image from "next/image";
import Link from "next/link";
import { Routes } from "@/models";

function NotFoundItem() {
  return (
    <section className="not-found-item">
      <Image
        src={searchSvg}
        alt="Imagen de un hombre buscando algo"
        width={300}
        height={300}
      />
      <h3>Lo sentimos, no encontramos lo que buscabas</h3>
      <Link href={Routes.HOME.path}>Ir a la página principal</Link>
    </section>
  );
}
export default NotFoundItem;
