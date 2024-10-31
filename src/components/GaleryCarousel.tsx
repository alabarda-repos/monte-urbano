// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import Image from "next/image";

export const GaleryCarousel = () => {
  return (
    <Splide
      aria-label="Galeria Monte Urbano"
      options={{
        type: "fade",
        pagination: true,
        arrows: true,
        rewind: true,
        autoplay: true,
        interval: 4500,
        speed: 1300, // Adjust the speed of the fade transition
        pauseOnHover: false,
        pauseOnFocus: false,
      }}
      className="z-[5] w-full p-0"
    >
      <SplideSlide>
        <div className="flex w-full">
          <div className="absolute left-[50%] top-[80%] mb-6 translate-x-[-50%] translate-y-[-50%] text-center text-2xl font-semibold text-white"></div>
          <Image
            src={"/images/home-gallery/image (2).jpg"}
            width={1920}
            height={1080}
            alt="galery-image"
            className="h-auto max-h-[80vh] w-screen object-cover "
          />
        </div>
      </SplideSlide>

      <SplideSlide>
        <div className="flex w-full">
          <div className="absolute left-[50%] top-[80%] mb-6 translate-x-[-50%] translate-y-[-50%] text-center text-2xl font-semibold text-white"></div>
          <Image
            src={"/images/home-gallery/image (3).jpg"}
            width={1920}
            height={1080}
            alt="galery-image"
            className="h-auto max-h-[80vh] w-screen object-cover"
          />
        </div>
      </SplideSlide>

      <SplideSlide>
        <div className="flex w-full">
          <div className="absolute left-[50%] top-[80%] mb-6 translate-x-[-50%] translate-y-[-50%] text-center text-2xl font-semibold text-white"></div>
          <Image
            src={"/images/home-gallery/image (4).jpg"}
            width={1920}
            height={1080}
            alt="galery-image"
            className="h-auto max-h-[80vh] w-screen object-cover"
          />
        </div>
      </SplideSlide>

      <SplideSlide>
        <div className="flex w-full">
          <div className="absolute left-[50%] top-[80%] mb-6 translate-x-[-50%] translate-y-[-50%] text-center text-2xl font-semibold text-white"></div>
          <Image
            src={"/images/home-gallery/image (5).jpg"}
            width={1920}
            height={1080}
            alt="galery-image"
            className="h-auto max-h-[80vh] w-screen object-cover"
          />
        </div>
      </SplideSlide>

      <SplideSlide>
        <div className="flex w-full">
          <div className="absolute left-[50%] top-[80%] mb-6 translate-x-[-50%] translate-y-[-50%] text-center text-2xl font-semibold text-white"></div>
          <Image
            src={"/images/home-gallery/image (6).jpg"}
            width={1920}
            height={1080}
            alt="galery-image"
            className="h-auto max-h-[80vh] w-screen object-cover"
          />
        </div>
      </SplideSlide>

      <SplideSlide>
        <div className="flex w-full">
          <div className="absolute left-[50%] top-[80%] mb-6 translate-x-[-50%] translate-y-[-50%] text-center text-2xl font-semibold text-white"></div>
          <Image
            src={"/images/home-gallery/image (7).jpg"}
            width={1920}
            height={1080}
            alt="galery-image"
            className="h-auto max-h-[80vh] w-screen object-cover"
          />
        </div>
      </SplideSlide>

      <SplideSlide>
        <div className="flex w-full">
          <div className="absolute left-[50%] top-[80%] mb-6 translate-x-[-50%] translate-y-[-50%] text-center text-2xl font-semibold text-white"></div>
          <Image
            src={"/images/home-gallery/image (8).jpg"}
            width={1920}
            height={1080}
            alt="galery-image"
            className="h-auto max-h-[80vh] w-screen object-cover"
          />
        </div>
      </SplideSlide>
    </Splide>
  );
};
