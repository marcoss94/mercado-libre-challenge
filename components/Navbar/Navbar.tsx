"use client";

import { useRouter, usePathname } from "next/navigation";
import "./styles/Navbar.scss";
import meliLogo from "./assets/meliLogo.png";
import searchLogo from "./assets/searchLogo.png";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { Routes } from "@/models";

function Navbar() {
  const router = useRouter();
  const pathName = usePathname();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    const query = inputRef.current?.value;
    if (query) {
      router.push(`/items?search=${query}`);
    }
  };

  const handleOnKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
      event.preventDefault();
    }
  };

  const handleLogoClick = () => {
    if (inputRef.current?.value) {
      inputRef.current.value = "";
    }
  };

  useEffect(() => {
    if (pathName.startsWith(`/${Routes.ITEMS.path}/`)) {
      handleLogoClick();
    }
  }, [pathName]);

  return (
    <nav className="navbar">
      <Link href={Routes.HOME.path}>
        <Image
          src={meliLogo}
          alt="Logo de la empresa Mercado Libre"
          placeholder="blur"
          width={56}
          height={38}
          onClick={handleLogoClick}
          priority
        />
      </Link>
      <form className="search-container">
        <input
          type="text"
          placeholder="Nunca dejes de buscar"
          ref={inputRef}
          onKeyDown={handleOnKey}
        />
        <span className="search-icon" onClick={handleSearch}>
          <Image src={searchLogo} alt="Icono de buscar" />
        </span>
      </form>
    </nav>
  );
}
export default Navbar;
