import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandWhatsapp,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="relative z-[10] bg-mublack pb-4">
      <div className="mx-auto flex max-w-[1200px] flex-col px-4">
        <div className="grid grid-cols-1 items-center justify-around  gap-10  pt-6 text-[#E9F2F9] md:grid-cols-3">
          <div className="flex flex-col justify-center gap-3 text-center lg:justify-start lg:text-start">
            <div className="">CNPJ: 47.675.218/0001-00</div>
            Rua Passeio dos Ipês, 320 - Parque Faber Castell II <br />
            Torre Londres - Sala 603 <br />
            São Carlos - SP
            <br />
            CEP: 13561-390
          </div>

          <div className="flex justify-center ">
            <Image
              src={"/svg/logo2.svg"}
              height={100}
              width={100}
              alt={"logo"}
              className="cursor-pointer py-4"
            />
          </div>

          <div className="mb-12 flex flex-col  items-center justify-center text-center font-bold md:mb-6 lg:mb-0 lg:items-end">
            {" "}
            <div className="text-xl">Siga-nos nas redes sociais</div>
            <div className="flex flex-row items-center gap-4">
              <div className="mt-4 transition hover:text-[#f1f1f1] hover:opacity-70">
                <Link
                  href={
                    "https://www.linkedin.com/company/monte-urbano-engenharia-ambiental"
                  }
                  target="_blank"
                >
                  <IconBrandLinkedin size={30} />
                </Link>
              </div>
              <div className="mt-4 transition hover:text-[#f1f1f1] hover:opacity-70">
                <Link
                  href={"https://www.instagram.com/muambiental/"}
                  target="_blank"
                >
                  <IconBrandInstagram size={30} />
                </Link>
              </div>
              <div className="mt-4 transition hover:text-[#f1f1f1] hover:opacity-70">
                <Link
                  href={
                    "https://www.facebook.com/profile.php?id=61556944645121"
                  }
                  target="_blank"
                >
                  <IconBrandFacebook size={30} />
                </Link>
              </div>
              <div className="mt-4 transition hover:text-[#f1f1f1] hover:opacity-70">
                <Link href={"https://wa.me/16993731717"} target="_blank">
                  <IconBrandWhatsapp size={30} />
                </Link>
              </div>
            </div>
            <Link
              className="mt-12 text-xs hover:text-yellow-500 hover:underline"
              target="_blank"
              href="https://alabarda.com.br"
            >
              Desenvolvido por Alabarda
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
