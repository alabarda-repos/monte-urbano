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
              Certidão de Esgotamento Sanitário
            </h1>
            <h2 className="text-lg font-medium tracking-tight">
              Um Documento Essencial para o Sucesso do Seu Projeto
            </h2>
            <p className="mt-2 text-gray-600">17/10/2024</p>
            <Image
              src="/images/blog/MU_ESGOTAMENTO.jpg"
              alt="Vegetação"
              width={1200}
              height={300}
              className="mt-4 rounded-lg"
            />
            <div className="prose prose-lg mt-4 text-gray-700">
              <p>
                A Certidão de Esgotamento Sanitário é um documento obrigatório
                que comprova a conformidade do sistema de esgoto de um
                empreendimento com as normas ambientais e sanitárias. Sem essa
                certidão, seu projeto pode enfrentar restrições que afetam o
                cronograma e o desenvolvimento da obra.
              </p>

              <h2 className="mb-4 mt-8 text-xl font-semibold tracking-tight">
                Como a Monte Urbano Pode Ajudar
              </h2>
              <p>
                Na Monte Urbano, simplificamos e agilizamos o processo para
                garantir que seu empreendimento obtenha a certidão necessária de
                forma eficiente, garantindo o cumprimento de todas as exigências
                legais e evitando complicações.
              </p>

              <h2 className="mb-4 mt-8 text-xl font-semibold tracking-tight">
                Por que a Certidão é Importante?
              </h2>
              <p>
                Além de evitar atrasos, a Certidão de Esgotamento Sanitário é
                uma forma de assegurar que o empreendimento está em conformidade
                com as exigências ambientais, preservando a sustentabilidade da
                região onde será instalado. Sem esse documento, seu projeto pode
                ser barrado pelas autoridades competentes, comprometendo a
                viabilidade da operação.
              </p>

              <h2 className="mb-4 mt-8 text-xl font-semibold tracking-tight">
                Como Funciona o Processo
              </h2>
              <p>
                Na Monte Urbano, contamos com uma equipe especializada em
                preparar toda a documentação necessária, realizar as avaliações
                técnicas e conduzir o processo de obtenção da certidão junto aos
                órgãos responsáveis. Nosso objetivo é tornar o processo o mais
                ágil e eficiente possível, sem que sua empresa enfrente
                barreiras ou complicações legais.
              </p>

              <h2 className="mb-4 mt-8 text-xl font-semibold tracking-tight">
                A Importância do Cumprimento das Normas
              </h2>
              <p>
                Cumprir com as normas sanitárias não é apenas uma questão de
                conformidade, mas também uma responsabilidade ambiental.
                Garantir que o sistema de esgoto do seu projeto está adequado às
                exigências contribui diretamente para a preservação dos recursos
                hídricos e para a saúde da população ao redor do empreendimento.
              </p>

              <h2 className="mb-4 mt-8 text-xl font-semibold tracking-tight">
                Conclusão
              </h2>
              <p>
                A obtenção da Certidão de Esgotamento Sanitário é essencial para
                o desenvolvimento responsável e sustentável de qualquer projeto.
                Conte com a Monte Urbano para facilitar esse processo e garantir
                que seu empreendimento esteja em total conformidade com as leis
                ambientais.
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
