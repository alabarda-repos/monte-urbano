// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRef, useState } from "react";
import { AlbumCarousel } from "~/components/AlbumCarousel";
import { ClientCarousel } from "~/components/ClientCarousel";
import { Contact } from "~/components/Contact";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { ModalAlbumCarousel } from "~/components/ModalAlbumCarousel";

const Empresa: NextPage = () => {
  const splideRef = useRef<Splide>();
  const [album, setAlbum] = useState("");
  const [modalAlbumVisible, setModalAlbumVisible] = useState(false);

  const openAlbum = (album: string) => {
    console.log(album);
    setAlbum(album);
    setModalAlbumVisible(true);
  };

  const closeAlbum = () => setModalAlbumVisible(false);

  const goNext = () => {
    if (splideRef.current) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      splideRef.current.splide.go(">");
    }
  };

  return (
    <>
      <Head>
        <title>Monte Urbano</title>
        <meta name="description" content="Trimplum IT" />
        <link rel="icon" href="/svg/fav.svg" />
        <link
          rel="stylesheet"
          href="https://use.typekit.net/pqr2cne.css"
        ></link>
      </Head>
      <main className="w-full  overflow-x-hidden font-[fira-sans]">
        <Header alwaysBackground selected="empresa" />

        <section
          id="main-banner"
          className="relative flex max-h-[90vh] min-h-[80vh] w-full flex-col items-center justify-center bg-left-top lg:bg-top"
          style={{
            backgroundImage: `url("/images/hero2.jpg")`,
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 z-[2] flex items-center justify-center bg-black/30">
            <div className="flex flex-col items-center justify-center">
              <div className="text-center text-3xl font-semibold tracking-wider text-[#E9F2F9] md:text-4xl lg:text-6xl">
                {" "}
                Uma empresa que respira e inspira
              </div>
              <div className="ml-0 text-4xl font-semibold tracking-wider text-[#E9F2F9] md:text-5xl lg:ml-auto lg:text-7xl">
                sustentabilidade
              </div>
            </div>
          </div>
        </section>

        <section className="relative w-full">
          <Image
            src={"/svg/leaf1.svg"}
            alt="leaft"
            width={650}
            height={1050}
            className="absolute left-[-331px] top-[150px] z-[2] opacity-80"
          />
          <Image
            src={"/svg/leaf2.svg"}
            alt="leaft"
            width={520}
            height={830}
            className="absolute right-[-270px] top-[350px] z-[2] opacity-80"
          />
          <div className="relative z-[10] mx-auto flex max-w-[1200px] flex-col items-center justify-center px-4 py-16">
            <Image src={"/svg/logo1.svg"} width={180} height={180} alt="logo" />
            <div className="mt-1 w-full text-center text-3xl  text-mublack">
              São mais de <strong>15 anos</strong> de projetos
            </div>
            <div className="mx-auto mt-16 max-w-[900px] text-justify">
              Fundada em 2008 sob o nome de FH Engenharia Ambiental, a Monte
              Urbano começou como uma visionária consultoria ambiental em São
              Carlos/SP, dedicada a atender os setores público, privado e
              terceiro setor.
              <br />
              <br />
              Desde o início, nos destacamos pelo uso de tecnologias limpas e
              procedimentos inovadores, sempre com o objetivo de adequar nossas
              soluções às necessidades específicas de cada cliente.
              <br />
              <br />
              Ao longo dos anos, nossa empresa cresceu e evoluiu, conquistando
              um lugar de destaque no mercado de consultoria ambiental. Em 2024,
              para refletir melhor nossa evolução e o amplo espectro de nossos
              serviços, a FH Engenharia Ambiental passou por um re-branding
              completo, adotando o nome Monte Urbano. Este novo nome simboliza
              nossa capacidade de integrar desenvolvimento urbano e
              sustentabilidade, sempre com o foco em inovação e qualidade.
            </div>
          </div>
        </section>

        <section className="relative w-full bg-[#f1f1f1]">
          <Image
            src={"/svg/mountain.svg"}
            alt="mountains"
            width={1920}
            height={1050}
            className="absolute left-[0x] top-[-45%] z-[1] w-full opacity-80 lg:top-[-35%]"
          />

          <div className="relative z-[10] mx-auto  flex max-w-[1200px] flex-col items-center justify-center gap-16 px-4 py-16 lg:flex-row">
            <Splide
              ref={splideRef}
              aria-label="Serviços Monte Urbano"
              options={{
                type: "fade",
                pagination: true,
                arrows: true,
                rewind: true,
                autoplay: true,
                interval: 4500,
                speed: 900, // Adjust the speed of the fade transition
                pauseOnHover: true,
                pauseOnFocus: false,
              }}
              className="arrows-out relative w-full min-w-[60vw] max-w-[1200px] p-0"
            >
              <SplideSlide>
                <div className="grid grid-cols-1 items-center justify-center gap-16 lg:grid-cols-2 ">
                  <Image
                    src={"/images/MU_ELEMENTOS_COMPROMISSO.png"}
                    alt="MU_ELEMENTOS_COMPROMISSO"
                    width={600}
                    height={600}
                    className=""
                  />
                  <div className="flex flex-col gap-8 ">
                    <h2 className="text-3xl text-mugreen">
                      Compromisso com a <br />
                      <strong>Sustentabilidade</strong>.
                    </h2>
                    <span className="text-justify">
                      A Monte Urbano é movida pela missão de inovar no mercado
                      de consultoria ambiental, desenvolvendo e implementando
                      tecnologias diferenciadas que promovem o desenvolvimento
                      sustentável. Estamos comprometidos em oferecer serviços
                      personalizados que não apenas atendem, mas superam as
                      expectativas de nossos clientes, ao mesmo tempo em que
                      contribuímos positivamente para o meio ambiente.
                    </span>
                    <button
                      onClick={goNext}
                      className="ml-auto w-full bg-mugreen/80 px-6 py-1 text-end font-semibold text-white"
                    >
                      Uma Visão de Futuro
                    </button>
                  </div>
                </div>
              </SplideSlide>

              <SplideSlide>
                <div className="grid grid-cols-1 items-center justify-center gap-16 lg:grid-cols-2 ">
                  <Image
                    src={"/images/MU_ELEMENTOS_FUTURO.png"}
                    alt="MU_ELEMENTOS_FUTURO"
                    width={600}
                    height={600}
                    className=""
                  />
                  <div className="flex flex-col gap-8 ">
                    <h2 className="text-3xl text-mugreen">
                      Uma Visão de <strong>Futuro</strong>.
                    </h2>
                    <span className="text-justify">
                      Nossa visão é ser uma referência nacional, reconhecida
                      pela qualidade e inovação técnica, aliada à
                      responsabilidade socioambiental. Nos esforçamos para que
                      cada projeto reflita nosso compromisso com a excelência e
                      com a preservação do planeta para as gerações futuras.
                    </span>
                    <button
                      onClick={goNext}
                      className="ml-auto w-full bg-mugreen/80 px-6 py-1 text-end font-semibold text-white"
                    >
                      Valores que nos Orientam
                    </button>
                  </div>
                </div>
              </SplideSlide>

              <SplideSlide>
                <div className="grid grid-cols-1 items-center justify-center gap-16 lg:grid-cols-2 ">
                  <Image
                    src={"/images/MU_ELEMENTOS_SUST.png"}
                    alt="MU_ELEMENTOS_SUST"
                    width={600}
                    height={600}
                    className=""
                  />
                  <div className="flex flex-col gap-8 ">
                    <h2 className="text-3xl text-mugreen">
                      Valores que nos <strong>Orientam</strong>.
                    </h2>
                    <span className="text-justify">
                      Nossos valores incluem ética, competência, eficiência,
                      seriedade, qualidade e confiabilidade. Estes princípios
                      são a base de tudo que fazemos e garantem que mantemos
                      nossa integridade e nosso compromisso com os altos padrões
                      em todos os projetos.
                    </span>
                    <button
                      onClick={goNext}
                      className="ml-auto w-full bg-mugreen/80 px-6 py-1 text-end font-semibold text-white"
                    >
                      Compromisso com a Sustentabilidade
                    </button>
                  </div>
                </div>
              </SplideSlide>
            </Splide>
          </div>
        </section>

        <section>
          <div className="relative z-[20] h-[330px] bg-[url('/images/parallax2.jpg')] bg-cover bg-fixed bg-center">
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
              <h2 className="font-regular mr-0 text-center font-[fira-sans] text-2xl text-white md:text-3xl lg:mr-24 lg:text-start lg:text-4xl">
                Colaboração é o alicerce para
              </h2>
              <h2 className="font-regular ml-0 text-3xl text-white md:text-4xl lg:ml-24 lg:text-5xl">
                Qualquer grande realização
              </h2>
            </div>
          </div>
        </section>

        <section className="relative z-[50] flex  w-full bg-mugray pt-24 text-mublack">
          <div className="flex flex-col flex-col items-center justify-start ">
            <div className="text-3xl  md:text-4xl lg:text-5xl">
              Parcerias que <strong>Transformam</strong>
            </div>
            <div className="mb-24 mt-3 w-full text-center text-xs text-gray-600">
              Clique em um álbum para ver todas as fotos
            </div>
            <AlbumCarousel openAlbum={openAlbum} />
          </div>
        </section>

        {modalAlbumVisible && (
          <ModalAlbumCarousel album={album} closeAlbum={closeAlbum} />
        )}

        <section className="w-full">
          <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-center gap-8 px-4 py-24">
            <h2 className="text-3xl  text-mublack">
              Clientes <strong>Monte Urbano</strong>
            </h2>
            <ClientCarousel />
          </div>
        </section>

        <section id="contact-section" className=" w-full">
          <div className=" h-full w-full  bg-[#f1f1f1]">
            <div className="container mx-auto flex max-w-[90vw] flex-col py-20 lg:max-w-[1240px]">
              {" "}
              <div className="flex h-full flex-col items-center justify-center">
                <Contact />
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Empresa;
