import { GeistSans } from "geist/font/sans";
import { type AppType } from "next/app";

import "@splidejs/react-splide/css/sea-green";
import { IconChevronUp } from "@tabler/icons-react";
import { useRef } from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  const topRef = useRef<HTMLDivElement | null>(null);

  const scrollTop = () => {
    if (!topRef.current) return;
    topRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <main className={GeistSans.className}>
      <div className="" ref={topRef}></div>
      <Component {...pageProps} />
      <div className="fixed bottom-[80px] right-4 z-[99]">
        <FloatingWhatsApp
          accountName="Monte Urbano"
          phoneNumber="16993731717"
          chatMessage="Olá, como podemos ajudar?"
          placeholder="Escreva sua dúvida"
          className="bottom-[80px]"
          buttonClassName="!bottom-[80px]"
          avatar="/svg/logo2.svg"
        />
        {/* <button
          className="animate-pulse rounded-full p-1 text-emerald-500"
          onClick={() => {
            window.open(
              "https://api.whatsapp.com/send?phone=16993731717",
              "_blank",
            );
          }}
        >
          <IconBrandWhatsapp size={40} />
        </button> */}
      </div>
      <div className="fixed bottom-5 right-[2.2rem] z-[99]">
        <button
          className="animate-pulse rounded-full p-1 text-emerald-500"
          onClick={scrollTop}
        >
          <IconChevronUp size={40} />
        </button>
      </div>
    </main>
  );
};

export default MyApp;
