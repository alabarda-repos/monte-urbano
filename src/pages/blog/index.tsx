import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import BlogPostThumbnail from "~/components/BlogPostThumbnail";
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

        <section className="relative mx-auto w-full max-w-[1200px] px-4  py-24">
          <div className="grid w-full grid-cols-1 place-items-center content-center gap-12 lg:grid-cols-2">
            <BlogPostThumbnail
              date="31/07/2024"
              description={`
                Entender a vegetação ao seu redor é essencial, não só para a conformidade ambiental mas para a sustentabilidade do seu projeto!
\n\n
Descubra o que é o Laudo de Caracterização Vegetal e por que ele é crucial para o seu sucesso.`}
              image="/images/blog/bp1-1.png"
              link="/blog/o-que-e-o-laudo-de-caracterizacao-vegetal"
              title="O que é o Laudo de Caracterização Vegetal?"
              key={1}
            />
            <BlogPostThumbnail
              date="17/10/2024"
              description={`
               A Certidão de Esgotamento Sanitário é um documento obrigatório que comprova a conformidade do sistema de esgoto de um empreendimento com as normas ambientais e sanitárias. 
               Sem essa certidão, seu projeto pode enfrentar restrições que afetam o cronograma e o desenvolvimento da obra.
`}
              image="/images/blog/MU_ESGOTAMENTO.jpg"
              link="/blog/certidao-de-esgotamento-sanitario"
              title="Certidão de Esgotamento Sanitário"
              key={2}
            />

            <BlogPostThumbnail
              date="31/10/2024"
              description={`O PRAD é essencial para reverter danos ambientais causados por atividades humanas, como mineração, construção ou desmatamento. 
              Ele visa restaurar áreas afetadas, promovendo o equilíbrio ecológico e a sustentabilidade.`}
              image="/images/blog/MU_PRAD.jpg"
              link="/blog/prad"
              title="Plano de Recuperação de Áreas Degradadas"
              key={3}
            />
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Blog;
