import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Contact } from "~/components/Contact";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";

const Orcamento: NextPage = () => {
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
        <Header alwaysBackground selected="orcamento" />

        <section
          id="main-banner"
          className="relative flex max-h-[90vh] min-h-[80vh] w-full flex-col items-center justify-center bg-left-top lg:bg-top"
          style={{
            backgroundImage: `url("/images/hero5.jpg")`,
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 z-[2] flex items-center justify-center bg-black/30">
            <div className="flex flex-col items-center justify-center">
              <div className="text-center text-3xl font-semibold tracking-wider text-[#E9F2F9] md:text-4xl lg:text-6xl">
                {" "}
                Plante a semente do seu projeto
              </div>
              <div className="ml-0 text-4xl font-semibold tracking-wider text-[#E9F2F9] md:text-5xl lg:ml-auto lg:text-7xl">
                em um solo fértil
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

            <div className="mx-auto mt-16 max-w-[900px] text-justify">
              Obter um orçamento preciso e personalizado para os seus projetos
              ambientais é fundamental para o planejamento eficaz e a execução
              bem-sucedida.
              <br />
              <br />
              Na Monte Urbano, nos dedicamos a fornecer estimativas claras e
              detalhadas que refletem não apenas o custo, mas também o valor que
              nossos serviços agregarão ao seu projeto. Nossa equipe está pronta
              para analisar as suas necessidades específicas e propor soluções
              que se encaixam em seu orçamento e objetivos.
              <br />
              <br />
              Entre em contato conosco para iniciar uma conversa sobre como
              podemos ajudar a tornar seu projeto uma realidade sustentável e
              economicamente viável.
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
          <div className="relative z-[2] h-full w-full">
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

export default Orcamento;
