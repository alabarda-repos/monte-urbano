// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import Image from "next/image";

export interface IAlbumCarouselParams {
  openAlbum: (album: string) => void;
}

export const AlbumCarousel = ({ openAlbum }: IAlbumCarouselParams) => {
  return (
    <Splide
      aria-label="Albuns Monte Urbano"
      options={{
        perPage: 4,
        breakpoints: {
          640: {
            perPage: 2,
          },
        },

        pagination: false,
      }}
      className="w-full p-0"
    >
      <SplideSlide>
        <div
          className="grid h-[90vh] grid-cols-1 items-center justify-center"
          onClick={() => openAlbum("Laudo Técnico de Recursos Naturais")}
        >
          <div className="relative h-full">
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 px-2 text-center text-2xl font-semibold text-white">
              <div className="">Laudo Técnico de Recursos Naturais</div>
            </div>
            <Image
              src={
                "/images/partnership/Laudo Técnico de Recursos Naturais/3.jpg"
              }
              width={1920}
              height={1080}
              alt="galery-image"
              className="h-full w-auto object-cover "
            />
          </div>
        </div>
      </SplideSlide>

      <SplideSlide>
        <div
          className="grid h-[90vh] grid-cols-1 items-center justify-center"
          onClick={() => openAlbum("Levantamento Planialtimétrico")}
        >
          <div className="relative h-full">
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 px-2 text-center text-2xl font-semibold text-white">
              <div className="">Levantamento Planialtimétrico</div>
            </div>
            <Image
              src={"/images/partnership/Levantamento Planialtimétrico/3.jpg"}
              width={1920}
              height={1080}
              alt="galery-image"
              className="h-full w-auto object-cover "
            />
          </div>
        </div>
      </SplideSlide>

      <SplideSlide>
        <div
          className="grid h-[90vh] grid-cols-1 items-center justify-center"
          onClick={() => openAlbum("Medição de Vazão de Córrego")}
        >
          <div className="relative h-full">
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 px-2 text-center text-2xl font-semibold text-white">
              <div className="">Medição de Vazão de Córrego</div>
            </div>
            <Image
              src={"/images/partnership/Medição de Vazão de Córrego/3.jpg"}
              width={1920}
              height={1080}
              alt="galery-image"
              className="h-full w-auto object-cover "
            />
          </div>
        </div>
      </SplideSlide>

      <SplideSlide>
        <div
          className="grid h-[90vh] grid-cols-1 items-center justify-center"
          onClick={() =>
            openAlbum(
              "Relatório Técnico Ambiental (RTA) e do Estudo de Impacto de Vizinhança (EIV)",
            )
          }
        >
          <div className="relative h-full">
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 px-2 text-center text-2xl font-semibold text-white">
              <div className="">
                Relatório Técnico Ambiental (RTA) e do Estudo de Impacto de
                Vizinhança (EIV)
              </div>
            </div>
            <Image
              src={
                "/images/partnership/Relatório Técnico Ambiental (RTA) e do Estudo de Impacto de Vizinhança (EIV)/3.jpg"
              }
              width={1920}
              height={1080}
              alt="galery-image"
              className="h-full w-auto object-cover "
            />
          </div>
        </div>
      </SplideSlide>
    </Splide>
  );
};
