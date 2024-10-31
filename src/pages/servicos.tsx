import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { ClientCarousel } from "~/components/ClientCarousel";
import { Contact } from "~/components/Contact";
import { Footer } from "~/components/Footer";
import { environmentalServices } from "~/components/FullServiceCarousel";
import { Header } from "~/components/Header";
import { ServiceCard } from "~/components/ServiceCard";

const Servicos: NextPage = () => {
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
        <Header alwaysBackground selected="servicos" />

        <section
          id="main-banner"
          className="relative flex max-h-[90vh] min-h-[80vh] w-full flex-col items-center justify-center bg-bottom"
          style={{
            backgroundImage: `url("/images/hero4.jpg")`,
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 z-[2] flex items-center justify-center bg-black/30">
            <div className="flex flex-col items-center justify-center">
              <div className="md:text5xl text-center text-4xl font-semibold tracking-wider text-[#E9F2F9] lg:text-7xl">
                {" "}
                Nossos serviços,
              </div>
              <div className="ml-0 text-3xl font-semibold tracking-wider text-[#E9F2F9] md:text-4xl lg:ml-auto lg:text-6xl">
                soluções para o seu projeto
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
          <div className="relative z-[10] mx-auto flex max-w-[900px] flex-col items-center justify-center px-4 py-16 text-justify">
            <Image src={"/svg/logo1.svg"} width={180} height={180} alt="logo" />
            <div className="mt-1 w-full text-center text-3xl  text-mublack">
              Soluções especializadas para cultivar seu projeto de forma segura
              e sustentável
            </div>
            <div className="mx-auto mt-16 ">
              Na Monte Urbano, oferecemos uma gama completa de serviços de
              consultoria ambiental projetados para atender às necessidades
              específicas de cada projeto.
              <br />
              <br />
              De licenciamentos ambientais a estudos de impacto e gestão de
              resíduos, nossa equipe multidisciplinar utiliza as mais avançadas
              técnicas e tecnologias para garantir soluções eficientes e
              sustentáveis. Compreendemos os desafios do desenvolvimento moderno
              e estamos aqui para ajudar sua empresa a alcançar seus objetivos
              com responsabilidade ambiental e conformidade regulatória.
              <br />
              <br />
              Explore nossos serviços e descubra como podemos contribuir para o
              sucesso do seu empreendimento.
            </div>
          </div>
        </section>

        <section className="relative w-full bg-[#f1f1f1]">
          <Image
            src={"/svg/mountain.svg"}
            alt="mountains"
            width={1920}
            height={1050}
            className="absolute left-[0x] top-[-15%] z-[1] w-full opacity-80 lg:top-[-35%]"
          />

          <div className="relative z-[10] mx-auto flex max-w-[1200px] flex-col items-center justify-center px-4 py-16">
            <div className="mt-1 w-full text-start text-3xl  text-mublack">
              Nossos <strong>Serviços</strong>
            </div>

            <div className="w-full text-start text-xs text-gray-600">
              Clique em um item para ver mais informações
            </div>
            <div className="mt-6 grid grid-cols-2 gap-6 transition-all duration-[500ms] lg:grid-cols-4">
              {environmentalServices.map((svc, index) => (
                <ServiceCard
                  body={svc.body}
                  index={index}
                  title={svc.title}
                  key={`svc-card-${index}`}
                />
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="relative z-[20] h-[330px] bg-[url('/images/parallax3.jpg')] bg-cover bg-fixed bg-center">
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
              <h2 className="font-regular mr-0 text-center font-[fira-sans] text-2xl text-white md:text-3xl lg:mr-24 lg:text-start lg:text-4xl">
                Construindo hoje, o mundo
              </h2>
              <h2 className="font-regular ml-0 text-center text-3xl text-white md:text-4xl lg:ml-24 lg:text-5xl">
                em que queremos viver amanhã.
              </h2>
            </div>
          </div>
        </section>

        <section className="w-full">
          <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-center gap-8 px-4 py-24">
            <h2 className="text-2xl text-mublack">Clientes Monte Urbano</h2>
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

export default Servicos;
