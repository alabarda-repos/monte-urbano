import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";

const Blog: NextPage = () => {
  return (
    <>
      <Head>
        <title>Monte Urbano</title>
        <meta name="description" content="Monte Urbano - Blog" />
        <link rel="icon" href="/svg/fav.svg" />
        <link
          rel="stylesheet"
          href="https://use.typekit.net/pqr2cne.css"
        ></link>
      </Head>
      <main className="w-full  overflow-x-hidden font-[fira-sans]">
        <Header alwaysBackground selected="blog" />

        <section
          id="main-banner"
          className="relative flex max-h-[90vh] min-h-[80vh] w-full flex-col items-center justify-center bg-left-top lg:bg-top"
          style={{
            backgroundImage: `url("/images/hero4.jpg")`,
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 z-[2] flex items-center justify-center bg-black/50">
            <div className="flex flex-col items-center justify-center">
              <div className="text-center text-3xl font-semibold tracking-wider text-[#E9F2F9] md:text-4xl lg:text-6xl">
                {" "}
                Blog Monte Urbano
              </div>
            </div>
          </div>
        </section>

        <section className="relative hidden w-full">
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
            className="absolute right-[-270px] top-[250px] z-[2] opacity-80"
          />
        </section>

        <section className="relative mx-auto w-full max-w-[1200px]  py-24">
          <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
              O que é o Laudo de Caracterização Vegetal?
            </h1>
            <p className="mt-2 text-gray-600">31/07/2024</p>
            <Image
              src="/images/blog/bp1-1.png"
              alt="Vegetação"
              width={1200}
              height={300}
              className="mt-4 rounded-lg"
            />
            <div className="prose prose-lg mt-4 text-gray-700">
              <p>
                Entender a vegetação ao seu redor é essencial, não só para a
                conformidade ambiental mas para a sustentabilidade do seu
                projeto! Descubra o que é o Laudo de Caracterização Vegetal e
                por que ele é crucial para o seu sucesso.
              </p>

              <h2 className="mb-4 mt-8 text-xl font-semibold tracking-tight">
                O que é o Laudo de Caracterização Vegetal?
              </h2>
              <p>
                O Laudo de Caracterização Vegetal é um documento técnico que
                descreve detalhadamente a vegetação presente em uma determinada
                área. Esse laudo é essencial para projetos de construção,
                agricultura, mineração, e outros que possam impactar o meio
                ambiente. Ele avalia a flora local, identificando espécies
                nativas, exóticas e invasoras, e fornece informações sobre a
                saúde e a densidade da vegetação.
              </p>
              <h2 className="mt-8 text-xl font-semibold tracking-tight">
                Por que o Laudo de Caracterização Vegetal é Crucial?
              </h2>
              <h3 className="mt-4 font-semibold">1. Conformidade Ambiental</h3>
              <p>
                Um dos principais motivos para a realização do Laudo de
                Caracterização Vegetal é garantir que o projeto esteja em
                conformidade com as leis ambientais. Muitas regulamentações
                exigem a apresentação desse laudo antes do início de qualquer
                atividade que possa afetar o meio ambiente. Sem ele, você pode
                enfrentar penalidades legais e interrupções no seu projeto.
              </p>
              <h3 className="mt-2 font-semibold">
                2. Sustentabilidade do Projeto
              </h3>
              <p>
                Além da conformidade legal, o laudo ajuda a promover a
                sustentabilidade do seu projeto. Ao entender a vegetação local,
                você pode planejar melhor as suas ações para minimizar os
                impactos ambientais negativos e maximizar os benefícios
                ecológicos. Isso inclui a preservação de espécies nativas, a
                remoção de espécies invasoras e o planejamento de áreas verdes
                no seu projeto.
              </p>
            </div>

            <Link
              href={"/contato"}
              className="my-8 flex w-full items-center justify-center rounded-md bg-mublack py-6 text-center font-bold text-white"
            >
              Entre em contato conosco!
            </Link>

            <div className="">
              <Link
                href="/blog"
                className="text-indigo-600 hover:text-indigo-900"
              >
                ← Voltar para o Blog
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Blog;
