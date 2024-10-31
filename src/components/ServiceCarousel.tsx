// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

export const ServiceCarousel = () => {
  return (
    <div className="relative w-full">
      <Splide
        aria-label="Serviços Monte Urbano"
        options={{
          perPage: 3.5,
          perMove: 3,
          gap: "2rem",
          type: "loop",
          pagination: false,
          breakpoints: {
            1024: {
              perPage: 2.5,
              perMove: 2,
            },
            768: {
              perPage: 1.5,
              perMove: 1,
            },
            640: {
              perPage: 1.2,
              perMove: 1,
            },
          },
        }}
        className="relative w-full min-w-[60vw] max-w-[1200px] p-0"
      >
        <SplideSlide>
          <div className="flex h-full w-full flex-col bg-white p-6">
            <div className="mb-6 text-center text-2xl font-semibold">
              Licenciamento Ambiental
            </div>
            <div className="text-justify text-sm">
              Navegar pelos complexos processos de licenciamento ambiental exige
              expertise e precisão. Na Monte Urbano, simplificamos esse processo
              para nossos clientes, garantindo que todos os requisitos legais
              sejam cumpridos com eficiência. Nosso trabalho cobre todas as
              etapas, desde Licenças Prévias até Licenças de Operação,
              facilitando um desenvolvimento responsável e legalizado.
            </div>
          </div>
        </SplideSlide>

        <SplideSlide>
          <div className="flex h-full w-full flex-col bg-white p-6">
            <div className="mb-6 text-center text-2xl font-semibold">
              Gestão de Resíduos
            </div>
            <div className="text-justify text-sm">
              Administrar resíduos de forma sustentável é crucial para a saúde
              ambiental. Oferecemos o planejamento ideal para o seu projeto de
              forma que os impactos ambientais sejam reduzidos ou até mesmo
              evitados, além de transformar os resíduos em recursos, promovendo
              uma economia circular.
            </div>
          </div>
        </SplideSlide>

        <SplideSlide>
          <div className="flex h-full w-full flex-col bg-white p-6">
            <div className="mb-6 text-center text-2xl font-semibold">
              Estudos de Impacto Ambiental (EIA/RIMA)
            </div>
            <div className="text-justify text-sm">
              Realizamos Estudos de Impacto Ambiental detalhados para prever e
              mitigar os efeitos de grandes projetos no meio ambiente. Nosso
              objetivo é desenvolver relatórios claros e precisos (RIMA) que
              orientem decisões responsáveis, garantindo que as iniciativas de
              desenvolvimento sejam sustentáveis e informadas.
            </div>
          </div>
        </SplideSlide>

        <SplideSlide>
          <div className="flex h-full w-full flex-col bg-white p-6">
            <div className="mb-6 text-center text-2xl font-semibold">
              Avaliação e Remediação de Passivos Ambientai
            </div>
            <div className="text-justify text-sm">
              Identificamos, avaliamos e remediemos passivos ambientais,
              oferecendo soluções que restauram áreas contaminadas. A Monte
              Urbano trabalha para transformar legados de impacto negativo em
              futuros positivos, utilizando tecnologias avançadas e métodos
              eficazes de recuperação.
            </div>
          </div>
        </SplideSlide>

        <SplideSlide>
          <div className="flex h-full w-full flex-col bg-white p-6">
            <div className="mb-6 text-center text-2xl font-semibold">
              Consultoria em Sustentabilidade
            </div>
            <div className="text-justify text-sm">
              Ajudamos empresas a integrar práticas sustentáveis em suas
              operações e estratégias corporativas. Desde a otimização do uso de
              recursos até a implementação de políticas de sustentabilidade,
              nossa consultoria visa potencializar o desempenho ambiental e
              econômico, alinhando negócios com as melhores práticas globais.
            </div>
          </div>
        </SplideSlide>
      </Splide>
      <div className="absolute right-0 top-0 z-[5] h-full w-[25px] bg-gradient-to-l from-black/10 via-black/5 to-transparent"></div>
    </div>
  );
};
