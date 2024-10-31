import { GeistSans } from "geist/font/sans";
import { type AppType } from "next/app";

import "@splidejs/react-splide/css/sea-green";
import { IconBrandWhatsapp, IconChevronUp } from "@tabler/icons-react";
import { useRef } from "react";
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
        <button
          className="animate-pulse rounded-full p-1 text-emerald-500"
          onClick={() => {
            window.open(
              "https://api.whatsapp.com/send?phone=5516997307031",
              "_blank",
            );
          }}
        >
          <IconBrandWhatsapp size={40} />
        </button>
      </div>
      <div className="fixed bottom-5 right-4 z-[99]">
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
