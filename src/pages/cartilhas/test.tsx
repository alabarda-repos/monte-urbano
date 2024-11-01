import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { ProductView } from "~/components/ProductView";

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
          className="relative flex max-h-[90vh] min-h-[30vh] w-full flex-col items-center justify-center bg-left-top lg:bg-top"
          style={{
            backgroundImage: `url("/images/hero4.jpg")`,
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 z-[2] flex items-center justify-center bg-black/50">
            <div className="flex flex-col items-center justify-center">
              <div className="text-center text-3xl font-semibold tracking-wider text-[#E9F2F9] md:text-4xl lg:text-6xl">
                Monte Urbano
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
        <section className="relative mx-auto flex min-h-screen w-full max-w-[1200px] flex-col gap-8 px-4  py-24">
          <ProductView />

          <div className="">
            <Link
              href="/cartilhas"
              className="text-indigo-600 hover:text-indigo-900"
            >
              ← Voltar
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Blog;
