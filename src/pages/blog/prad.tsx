/* eslint-disable react/no-unescaped-entities */
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
              Plano de Recuperação de Áreas Degradadas (PRAD)
            </h1>
            <h2 className="text-lg font-medium tracking-tight">
              Entenda como funciona
            </h2>
            <p className="mt-2 text-gray-600">31/10/2024</p>
            <Image
              src="/images/blog/MU_PRAD.jpg"
              alt="Vegetação"
              width={1200}
              height={300}
              className="mt-4 rounded-lg"
            />
            <div className="prose prose-lg mt-4 text-gray-700">
              <p>
                O PRAD é essencial para reverter danos ambientais causados por
                atividades humanas, como mineração, construção ou desmatamento.
                Ele visa restaurar áreas afetadas, promovendo o equilíbrio
                ecológico e a sustentabilidade.
              </p>

              <h2 className="mb-4 mt-8 text-xl font-semibold tracking-tight">
                Quando é necessário um PRAD?
              </h2>
              <p>
                Qualquer atividade que degrade o meio ambiente – desde grandes
                obras até queimadas – pode exigir um PRAD para recuperar o local
                e cumprir exigências legais.
              </p>

              <h2 className="mb-4 mt-8 text-xl font-semibold tracking-tight">
                As etapas de um PRAD
              </h2>
              <p>
                Diagnóstico Ambiental: Levantamento da situação atual da área.
                Plano de Ação: Definição das atividades, como o plantio de
                vegetação nativa. Execução: Implementação das ações planejadas.
                Monitoramento: Acompanhamento contínuo para assegurar o sucesso
                do projeto.
              </p>

              <h2 className="mb-4 mt-8 text-xl font-semibold tracking-tight">
                Por que o PRAD é importante?
              </h2>
              <p>
                Além de restaurar o ambiente, o PRAD contribui para a
                conservação da biodiversidade e a sustentabilidade, trazendo
                benefícios ambientais e sociais.
              </p>

              <h2 className="mb-4 mt-8 text-xl font-semibold tracking-tight">
                Projetos de sucesso
              </h2>
              <p>
                Exemplos incluem a recuperação de áreas mineradas em Minas
                Gerais e a revitalização de margens de rios no Cerrado, que
                ajudam a evitar erosão e preservar cursos d'água.
              </p>

              <h2 className="mb-4 mt-8 text-xl font-semibold tracking-tight">
                Monte Urbano: Ajudando a transformar o ambiente
              </h2>
              <p>
                A Monte Urbano oferece consultoria completa para a elaboração e
                implementação do PRAD. Desde o diagnóstico até o monitoramento,
                garantimos que seu projeto esteja em conformidade com as normas
                ambientais e entregue resultados de impacto positivo.
              </p>

              <p className="mt-4">
                Entre em contato para saber mais sobre como podemos ajudar na
                obtenção dessa e outras licenças ambientais essenciais para o
                sucesso do seu projeto.
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
