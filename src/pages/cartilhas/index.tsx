import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import BookThumbnail from "~/components/BookThumbnail";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";

const Blog: NextPage = () => {
  return (
    <>
      <Head>
        <title>Cartilhas</title>
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
                Cartilhas Monte Urbano
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
        <section className="relative mx-auto flex w-full max-w-[1200px] flex-col gap-8 px-4  py-24">
          <div className="grid w-full grid-cols-1 place-items-center content-center gap-12 md:grid-cols-2 lg:grid-cols-3 ">
            <BookThumbnail
              description={`
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe assumenda voluptate labore atque recusandae, fuga tempore amet? Alias, aperiam quos.

                `}
              image="/images/blog/bp1-1.png"
              link="/cartilhas/test"
              title="Lorem ipsum dolor sit amet consectetu"
              key={1}
            />

            <BookThumbnail
              description={`
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe assumenda voluptate labore atque recusandae, fuga tempore amet? Alias, aperiam quos.

                `}
              image="/images/blog/bp1-1.png"
              link="/cartilhas/o-que-e-o-laudo-de-caracterizacao-vegetal"
              title="Lorem ipsum dolor sit amet consectetu"
              key={1}
            />

            <BookThumbnail
              description={`
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe assumenda voluptate labore atque recusandae, fuga tempore amet? Alias, aperiam quos.

                `}
              image="/images/blog/bp1-1.png"
              link="/cartilhas/o-que-e-o-laudo-de-caracterizacao-vegetal"
              title="Lorem ipsum dolor sit amet consectetu"
              key={1}
            />
          </div>

          <Link
            target="_blank"
            href={"/contato"}
            className="mt-12 rounded-md bg-mugreen px-12 py-2 text-center font-semibold text-white transition hover:bg-mugreen/70"
          >
            <span>
              Precisa de uma cartilha personalizada? Entre em contato!
            </span>
          </Link>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Blog;
