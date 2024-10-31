// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import Image from "next/image";
import { type MouseEvent } from "react";

export const imageMap: Record<string, number[]> = {
  ["Laudo Técnico de Recursos Naturais"]: [1, 2, 3, 4, 5, 6, 7],
  ["Levantamento Planialtimétrico"]: [1, 2, 3, 4, 5],
  ["Medição de Vazão de Córrego"]: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  ["Relatório Técnico Ambiental (RTA) e do Estudo de Impacto de Vizinhança (EIV)"]:
    [1, 2, 3, 4],
};

export interface IModalAlbumCarouselParams {
  album: string;
  closeAlbum: () => void;
}

export const ModalAlbumCarousel = ({
  album,
  closeAlbum,
}: IModalAlbumCarouselParams) => {
  const backdropClick = (e: MouseEvent) => {
    const target = e.target as HTMLDivElement;
    if (target.id === "modal-backdrop") closeAlbum();
  };

  return (
    <div
      id="modal-backdrop"
      className="fixed inset-0 left-0 top-0 z-[999] flex h-screen w-screen items-center justify-center bg-black/30 backdrop-blur"
      onClick={backdropClick}
    >
      <Splide
        aria-label="Albuns Monte Urbano"
        options={{
          perPage: 1,
          arrows: true,
          type: "loop",
          pagination: false,
        }}
        className=" w-auto bg-mugreen/50 p-0"
      >
        {imageMap[album]?.map((img, index) => (
          <SplideSlide
            key={`album-img-${index}`}
            className="flex items-center justify-center"
          >
            <div className="  flex h-[70vh] min-w-[350px] max-w-[1000px]  items-center justify-center ">
              <div className="relative h-full">
                <div className="absolute inset-0 flex items-center justify-center  text-center text-2xl font-semibold text-white">
                  <div className=""></div>
                </div>
                <Image
                  src={`/images/partnership/${album}/${img}.jpg`}
                  width={1920}
                  height={1080}
                  alt="galery-image"
                  className="h-full w-auto object-cover"
                />
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};
