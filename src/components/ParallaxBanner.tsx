// components/ParallaxBanner.js

export const ParallaxBanner = () => {
  return (
    <div className="relative z-[20] h-[330px] bg-[url('/images/parallax.jpeg')] bg-cover bg-fixed bg-center">
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
        <h2 className="font-regular font-[fira-sans] text-2xl text-white md:text-3xl lg:text-4xl">
          Cada projeto é mais uma oportunidade para
        </h2>
        <h2 className=" font-regular text-2xl text-white md:text-3xl lg:text-4xl">
          Um futuro mais sustentável.
        </h2>
      </div>
    </div>
  );
};
