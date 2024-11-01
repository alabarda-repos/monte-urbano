// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import Image from "next/image";

export const ClientCarousel = () => {
  return (
    <Splide
      aria-label="Clientes Monte Urbano"
      options={{
        perPage: 4.5,
        perMove: 1,
        pauseOnHover: true,
        pagination: false,
        autoplay: true,
        interval: 2110,
        gap: "6rem",
        type: "loop",
        breakpoints: {
          1024: {
            perPage: 3.5,
          },
          768: {
            perPage: 2.5,
          },
          640: {
            perPage: 2.2,
          },
        },
      }}
      className="arrows-out w-full min-w-[60vw] max-w-[1100px] p-0"
    >
      <SplideSlide>
        <Image
          src={"/images/clients/ADN.png"}
          width={200}
          height={200}
          alt="client-placeholder"
        />
      </SplideSlide>

      <SplideSlide>
        <Image
          src={"/images/clients/GRUPOPLANO.png"}
          width={200}
          height={200}
          alt="client-placeholder"
        />
      </SplideSlide>
      <SplideSlide>
        <Image
          src={"/images/clients/GRUPOCEM.png"}
          width={200}
          height={200}
          alt="client-placeholder"
        />
      </SplideSlide>
      <SplideSlide>
        <Image
          src={"/images/clients/EMBRAPLAN.png"}
          width={200}
          height={200}
          alt="client-placeholder"
        />
      </SplideSlide>
      <SplideSlide>
        <Image
          src={"/images/clients/LOTTER.png"}
          width={200}
          height={200}
          alt="client-placeholder"
        />
      </SplideSlide>
      <SplideSlide>
        <Image
          src={"/images/clients/NG.png"}
          width={200}
          height={200}
          alt="client-placeholder"
        />
      </SplideSlide>
      <SplideSlide>
        <Image
          src={"/images/clients/VISTA.png"}
          width={200}
          height={200}
          alt="client-placeholder"
        />
      </SplideSlide>
      <SplideSlide>
        <Image
          src={"/images/clients/RODRIGUESPENTEADO.png"}
          width={200}
          height={200}
          alt="client-placeholder"
        />
      </SplideSlide>
      <SplideSlide>
        <Image
          src={"/images/clients/BAMBU&SABIÁ.png"}
          width={200}
          height={200}
          alt="client-placeholder"
        />
      </SplideSlide>
      <SplideSlide>
        <Image
          src={"/images/clients/BILD.png"}
          width={200}
          height={200}
          alt="client-placeholder"
        />
      </SplideSlide>
      <SplideSlide>
        <Image
          src={"/images/clients/BIOART.png"}
          width={200}
          height={200}
          alt="client-placeholder"
        />
      </SplideSlide>
      <SplideSlide>
        <Image
          src={"/images/clients/BROTAS.png"}
          width={200}
          height={200}
          alt="client-placeholder"
        />
      </SplideSlide>
      <SplideSlide>
        <Image
          src={"/images/clients/BRUMATI.png"}
          width={200}
          height={200}
          alt="client-placeholder"
        />
      </SplideSlide>
      <SplideSlide>
        <Image
          src={"/images/clients/CONCRETIZA.png"}
          width={200}
          height={200}
          alt="client-placeholder"
        />
      </SplideSlide>
      <SplideSlide>
        <Image
          src={"/images/clients/CORPAL.png"}
          width={200}
          height={200}
          alt="client-placeholder"
        />
      </SplideSlide>
      <SplideSlide>
        <Image
          src={"/images/clients/FRATTA.png"}
          width={200}
          height={200}
          alt="client-placeholder"
        />
      </SplideSlide>
      <SplideSlide>
        <Image
          src={"/images/clients/GREENPETFOOD.png"}
          width={200}
          height={200}
          alt="client-placeholder"
        />
      </SplideSlide>
      <SplideSlide>
        <Image
          src={"/images/clients/GRUPOBANDEIRANTES.png"}
          width={200}
          height={200}
          alt="client-placeholder"
        />
      </SplideSlide>
      <SplideSlide>
        <Image
          src={"/images/clients/HOGA.png"}
          width={200}
          height={200}
          alt="client-placeholder"
        />
      </SplideSlide>
      <SplideSlide>
        <Image
          src={"/images/clients/HOLOS.png"}
          width={200}
          height={200}
          alt="client-placeholder"
        />
      </SplideSlide>
      <SplideSlide>
        <Image
          src={"/images/clients/LOBO GUARÁ.png"}
          width={200}
          height={200}
          alt="client-placeholder"
        />
      </SplideSlide>
      <SplideSlide>
        <Image
          src={"/images/clients/MONTRECON.png"}
          width={200}
          height={200}
          alt="client-placeholder"
        />
      </SplideSlide>
      <SplideSlide>
        <Image
          src={"/images/clients/MRV.png"}
          width={200}
          height={200}
          alt="client-placeholder"
        />
      </SplideSlide>
      <SplideSlide>
        <Image
          src={"/images/clients/OCTON.png"}
          width={200}
          height={200}
          alt="client-placeholder"
        />
      </SplideSlide>
      <SplideSlide>
        <Image
          src={"/images/clients/PACAEMBU.png"}
          width={200}
          height={200}
          alt="client-placeholder"
        />
      </SplideSlide>
      <SplideSlide>
        <Image
          src={"/images/clients/PAFIL.png"}
          width={200}
          height={200}
          alt="client-placeholder"
        />
      </SplideSlide>
      <SplideSlide>
        <Image
          src={"/images/clients/PETRA.png"}
          width={200}
          height={200}
          alt="client-placeholder"
        />
      </SplideSlide>
      <SplideSlide>
        <Image
          src={"/images/clients/POLICARBON.png"}
          width={200}
          height={200}
          alt="client-placeholder"
        />
      </SplideSlide>
      <SplideSlide>
        <Image
          src={"/images/clients/SANMARINO.png"}
          width={200}
          height={200}
          alt="client-placeholder"
        />
      </SplideSlide>
      <SplideSlide>
        <Image
          src={"/images/clients/SUNPLAINS.png"}
          width={200}
          height={200}
          alt="client-placeholder"
        />
      </SplideSlide>
      <SplideSlide>
        <Image
          src={"/images/clients/TARGA.png"}
          width={200}
          height={200}
          alt="client-placeholder"
        />
      </SplideSlide>
      <SplideSlide>
        <Image
          src={"/images/clients/TEANI.png"}
          width={200}
          height={200}
          alt="client-placeholder"
        />
      </SplideSlide>
      <SplideSlide>
        <Image
          src={"/images/clients/USP.png"}
          width={200}
          height={200}
          alt="client-placeholder"
        />
      </SplideSlide>
      <SplideSlide>
        <Image
          src={"/images/clients/VILAURBE.png"}
          width={200}
          height={200}
          alt="client-placeholder"
        />
      </SplideSlide>
      <SplideSlide>
        <Image
          src={"/images/clients/VITORENZO.png"}
          width={200}
          height={200}
          alt="client-placeholder"
        />
      </SplideSlide>
      <SplideSlide>
        <Image
          src={"/images/clients/VITTA.png"}
          width={200}
          height={200}
          alt="client-placeholder"
        />
      </SplideSlide>
    </Splide>
  );
};
