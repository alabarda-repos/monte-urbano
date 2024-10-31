import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export interface IHeaderParams {
  alwaysBackground?: boolean;
  selected?: string;
}

export const Header = ({ alwaysBackground, selected }: IHeaderParams) => {
  const mobileHeaderMenuRef = useRef<HTMLDivElement | null>(null);
  const [, trigger] = useState(0);
  const scrollY = useRef<number>(0);
  const headerParams = useRef({
    opacity: 0.01,
  });
  const headerRef = useRef<HTMLDivElement | null>(null);

  const handleMobileHeaderMenu = () => {
    if (!mobileHeaderMenuRef.current) return;
    if (mobileHeaderMenuRef.current.style.height === "max-content") {
      mobileHeaderMenuRef.current.style.height = "0px";
      return;
    }
    mobileHeaderMenuRef.current.style.height = "max-content";
  };

  useEffect(() => {
    function handleScroll() {
      scrollY.current = window.scrollY;
      headerParams.current.opacity = Math.min(1, window.scrollY / 250);
      const headerOptions = document.querySelector("#menu-options-container");
      if (!headerOptions || !headerRef.current) return;
      if (window.scrollY > 250) {
        headerRef.current.classList.remove("!mt-4");
        headerRef.current.classList.add("bg-mublack/90");
        headerRef.current.classList.add("backdrop-blur-[3px]");

        trigger(1);
        return;
      }

      headerRef.current.classList.remove("bg-mublack/90");
      headerRef.current.classList.add("!mt-4");
      headerRef.current.classList.remove("backdrop-blur-[3px]");

      trigger(0);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className="relative z-[999]">
      <nav
        className="mobile-header-menu fixed top-[56px] z-[60] flex h-[0px] w-max flex-col items-center justify-start gap-3  overflow-hidden rounded-md border-[#E9F2F9]  bg-mublack px-6 text-[#E9F2F9] lg:hidden   "
        ref={mobileHeaderMenuRef}
        onClick={() => handleMobileHeaderMenu()}
      >
        <div className="flex flex-col gap-6 py-4 text-start">
          <Link
            className="link md:text-md flex cursor-pointer items-center justify-start text-start text-sm font-bold  transition"
            href={"/"}
          >
            Home
          </Link>
          <Link
            className="link md:text-md flex cursor-pointer items-center justify-start text-start text-sm font-bold  transition"
            href={"/empresa"}
          >
            A Empresa
          </Link>
          <Link
            className="link md:text-md flex hidden cursor-pointer items-center justify-start text-start text-sm font-bold  transition"
            href={"/area-de-atuacao"}
          >
            Área de Atuação
          </Link>
          <Link
            className="link md:text-md flex cursor-pointer items-center justify-start text-start text-sm font-bold  transition"
            href={"/servicos"}
          >
            Serviços
          </Link>

          <Link
            className="link md:text-md flex cursor-pointer items-center justify-start text-start text-sm font-bold  transition"
            href={"/orcamento"}
          >
            Orçamento
          </Link>
          <Link
            className="link md:text-md flex cursor-pointer items-center justify-start text-start text-sm font-bold  transition"
            href={"/trabalhe-conosco"}
          >
            Trabalhe Conosco
          </Link>
          <Link
            className="link md:text-md flex cursor-pointer items-center justify-start text-start text-sm font-bold  transition"
            href={"/contato"}
          >
            Contato
          </Link>
          <Link
            className="link md:text-md flex hidden cursor-pointer items-center justify-start text-start text-sm font-bold  transition"
            href={"/blog"}
          >
            Blog
          </Link>
        </div>
      </nav>
      <header className="fixed z-50 hidden w-full md:flex   ">
        <div
          className={`w-full p-3 transition ${alwaysBackground ? "bg-mublack/90" : ""}`}
          ref={headerRef}
        >
          <div className="container mx-auto flex  w-full max-w-[90vw] flex-row items-center justify-between gap-4 p-2 font-[Helvetica] lg:max-w-[1240px]">
            <div
              className="grid grow grid-cols-7  items-center justify-between gap-8 font-[fira-sans] text-mublack"
              id="menu-options-container"
            >
              {" "}
              <Link
                className={`link md:text-md flex cursor-pointer items-center justify-center text-center text-sm  ${selected === "home" ? "font-bold text-white" : "text-white"} transition`}
                href={"/"}
              >
                Home
              </Link>
              <Link
                className={`link md:text-md flex cursor-pointer items-center justify-center text-center text-sm  ${selected === "empresa" ? "font-bold text-white" : "text-white"} transition`}
                href={"/empresa"}
              >
                A Empresa
              </Link>
              <Link
                className={`link md:text-md flex hidden cursor-pointer items-center justify-center text-center text-sm  ${selected === "area" ? "font-bold text-white" : "text-white"} transition`}
                href={"area-de-atuacao"}
              >
                Área de Atuação
              </Link>
              <Link
                className={`link md:text-md flex cursor-pointer items-center justify-center text-center text-sm  ${selected === "servicos" ? "font-bold text-white" : "text-white"} transition`}
                href={"/servicos"}
              >
                Serviços
              </Link>
              <Link
                className={`link md:text-md flex cursor-pointer items-center justify-center text-center text-sm  ${selected === "home" ? "font-bold text-white" : "text-white"} transition`}
                href={"/"}
              >
                <Image
                  src={"/svg/logotext.svg"}
                  width={170}
                  height={170}
                  alt="logo-text"
                  className=""
                />
              </Link>
              <Link
                className={`link md:text-md flex cursor-pointer items-center justify-center text-center text-sm  ${selected === "orcamento" ? "font-bold text-white" : "text-white"} transition`}
                href={"/orcamento"}
              >
                Orçamento
              </Link>
              <Link
                className={`link md:text-md flex cursor-pointer items-center justify-center text-center text-sm  ${selected === "trabalhe" ? "font-bold text-white" : "text-white"} transition`}
                href={"/trabalhe-conosco"}
              >
                Trabalhe Conosco
              </Link>
              <Link
                className={`link md:text-md flex cursor-pointer items-center justify-center text-center text-sm  ${selected === "contato" ? "font-bold text-white" : "text-white"} transition`}
                href={"/contato"}
              >
                Contato
              </Link>
              <Link
                className={`link md:text-md flex hidden cursor-pointer items-center justify-center text-center text-sm  ${selected === "blog" ? "font-bold text-white" : "text-white"} transition`}
                href={"/blog"}
              >
                Blog
              </Link>
            </div>
          </div>
        </div>{" "}
      </header>

      <header className="visible fixed z-50 grid  h-16 w-screen grid-cols-3 items-center justify-between bg-mublack px-6 py-2 font-bold text-white md:hidden">
        <div className="text-start" onClick={() => handleMobileHeaderMenu()}>
          Menu
        </div>
        <div className="flex justify-center">
          {" "}
          <Image
            src={"/svg/logo1.svg"}
            height={200}
            width={200}
            alt={"logo"}
            className=" h-[40px] w-auto cursor-pointer transition hover:scale-[1.02]"
            id="header-logo-mobile"
          />
        </div>
      </header>
    </header>
  );
};
