import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ClientCarousel } from "~/components/ClientCarousel";
import { Contact } from "~/components/Contact";
import { Footer } from "~/components/Footer";
import { GaleryCarousel } from "~/components/GaleryCarousel";
import { Header } from "~/components/Header";
import { ParallaxBanner } from "~/components/ParallaxBanner";
import { ServiceCarousel } from "~/components/ServiceCarousel";

const Index: NextPage = () => {
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
        <Header selected="home" />

        <section
          id="main-banner"
          className="relative flex max-h-[95vh] min-h-[87vh] w-full flex-col items-center justify-center bg-bottom "
          style={{
            backgroundImage: `url("/images/header-home.jpg")`,
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 z-[2] flex items-center justify-center bg-black/40">
            <div className="   flex flex-col ">
              <div className="text-4xl font-semibold tracking-wider text-[#E9F2F9] md:text-5xl lg:text-7xl">
                {" "}
                Construindo um Futuro
              </div>
              <div className="ml-auto text-4xl font-semibold tracking-wider text-[#E9F2F9] md:text-5xl lg:text-7xl">
                Sustentável
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
            <div className="mt-1 w-full text-center text-3xl font-bold  text-mublack">
              Os 3 pilares Monte Urbano
            </div>
            <div className=" mt-6 grid grid-cols-1 items-start gap-16 lg:grid-cols-3">
              <div className="flex flex-col items-center justify-center">
                <Image
                  src={"/images/svg/iconmonstr-construction-13.svg"}
                  alt="MU_CONSTRUINDO"
                  width={120}
                  height={120}
                  className=""
                />
                <div className="my-4 text-2xl font-semibold tracking-tight">
                  Construindo
                </div>
                <div className="mt-2 text-justify font-extralight">
                  Na Monte Urbano, estamos comprometidos com o desenvolvimento
                  urbano que transforma e melhora. Participamos ativamente na
                  construção de projetos que não apenas atendem às necessidades
                  de infraestrutura moderna, mas também respeitam o tecido
                  histórico e cultural das comunidades. Nosso trabalho é
                  construir espaços que fomentem o crescimento e o bem-estar.
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Image
                  src={"/images/svg/iconmonstr-globe-5.svg"}
                  alt="MU_FUTURO"
                  width={120}
                  height={120}
                  className=""
                />
                <div className="my-4 text-2xl font-semibold tracking-tight">
                  Um Futuro
                </div>
                <div className="mt-2 text-justify font-extralight">
                  A inovação é a pedra angular de tudo que fazemos na Monte
                  Urbano. Empregamos as mais recentes tecnologias e métodos
                  inovadores para garantir que cada projeto seja a frente de seu
                  tempo. Focamos em criar soluções que preparem nossos clientes
                  e comunidades para o futuro, incorporando adaptabilidade e
                  visão de longo prazo.
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Image
                  src={"/images/svg/iconmonstr-leaf-1.svg"}
                  alt="MU_ECO"
                  width={120}
                  height={120}
                  className=""
                />
                <div className="my-4 text-2xl font-semibold tracking-tight">
                  Sustentável
                </div>
                <div className="mt-2 text-justify font-[200]">
                  Sustentabilidade é fundamental em cada aspecto de nosso
                  trabalho na Monte Urbano. Nos dedicamos a práticas que
                  preservam o ambiente, promovem a eficiência energética e
                  utilizam recursos de maneira responsável. Cada projeto é uma
                  oportunidade para nós de demonstrar como desenvolvimento
                  urbano e sustentabilidade podem andar de mãos dadas.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative w-full bg-[#f1f1f1]">
          <Image
            src={"/svg/mountain.svg"}
            alt="mountains"
            width={1920}
            height={1050}
            className="absolute left-[0x] top-[-35%] z-[1] w-full opacity-80"
          />

          <div className="relative z-[10] mx-auto flex max-w-[1200px] flex-col items-center justify-center px-4 py-16">
            <div className="mt-1 w-full text-start text-3xl  text-mublack">
              Nossos <strong>Serviços</strong>
            </div>
            <div className="mt-6 flex w-full">
              <ServiceCarousel />
            </div>
            <div className="mt-6 flex w-full">
              <Link
                href={"/servicos"}
                className="ml-auto flex bg-white/70 px-6 py-1 text-center transition hover:bg-mugreen/10"
              >
                Conheça todos os nossos serviços
              </Link>
            </div>
          </div>
        </section>

        <section>
          <ParallaxBanner />
        </section>

        <section className="flex  ">
          <GaleryCarousel />
        </section>

        <section className="w-full">
          <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-center gap-12 px-4 py-24">
            <h2 className="text-4xl text-mublack">Clientes Monte Urbano</h2>
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

export default Index;
