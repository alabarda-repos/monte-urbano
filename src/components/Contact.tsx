import { IconBrandWhatsapp, IconMail } from "@tabler/icons-react";
import Link from "next/link";
import { type FormEvent } from "react";
import { mailSender, type TInputs } from "~/pages/api/mail/mailSender";

export const Contact = () => {
  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const result = await mailSender({
      form: e.target as unknown as TInputs[],
    });

    if (!result) {
      alert(
        "Houve um erro ao enviar sua mensagem, entre em contato conosco por outro canal.",
      );
      return;
    }

    alert("Sua mensagem foi enviada");
  };
  return (
    <>
      <div className=" w-screen py-12 ">
        <div className="mx-auto flex max-w-[92vw] flex-col items-center justify-center lg:max-w-[1200px]">
          <div className="mb-12 flex w-full flex-row justify-center gap-3 text-2xl text-mublack lg:text-3xl">
            Entre em <strong>contato</strong>
          </div>
          <div className="flex h-full flex-col gap-6 lg:flex-row  ">
            <div className="items-around flex basis-[35%] flex-col justify-between gap-6  text-mublack">
              <div className="flex flex-col gap-4 rounded-md bg-white p-6 shadow-xl">
                <div className="text-3xl font-bold">Contato</div>

                <button
                  className="flex flex-col gap-2"
                  onClick={() => window.open("https://wa.me/16993731717")}
                >
                  <span className="text-xs">Telefone (Whatsapp):</span>
                  <div className="flex items-center gap-1">
                    <IconBrandWhatsapp />
                    (16) 99373-1717
                  </div>
                </button>
                <div className="flex flex-col gap-2">
                  <span className="text-xs">E-mail:</span>
                  <Link
                    href={"mailto:felipe@monteurbano.com.br"}
                    target="_blank"
                    className="flex items-center gap-1"
                  >
                    <IconMail />
                    felipe@monteurbano.com.br
                  </Link>
                  <Link
                    href={"mailto:maria@monteurbano.com.br"}
                    target="_blank"
                    className="flex items-center gap-1"
                  >
                    <IconMail />
                    maria@monteurbano.com.br
                  </Link>
                </div>

                <div className="mt-4 flex flex-col gap-4 overflow-hidden rounded-md">
                  <div className="flex flex-col justify-center gap-3 text-center text-sm lg:justify-start lg:text-start">
                    Rua Passeio dos Ipês, 320 - Parque Faber Castell II <br />
                    Torre Londres - Sala 603 <br />
                    São Carlos - SP
                    <br />
                    CEP: 13561-390
                  </div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3698.7924481443415!2d-47.9191835882913!3d-22.019262206673716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b877514c3cb3ed%3A0xf34093238ebda89d!2sRua%20Passeio%20dos%20Ip%C3%AAs%2C%20320%20-%20Parque%20Faber%20Castell%20II%2C%20S%C3%A3o%20Carlos%20-%20SP%2C%2013561-390!5e0!3m2!1spt-BR!2sbr!4v1719410268200!5m2!1spt-BR!2sbr"
                    width="600"
                    height="450"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="basis-[60%] rounded-md bg-white p-6 shadow-xl">
              <form
                onSubmit={(e) => void handleFormSubmit(e)}
                className="flex flex-row flex-wrap gap-4"
              >
                <input
                  type="text"
                  className="basis-[60%] rounded-md border px-2 py-1"
                  placeholder="Nome"
                  required
                />
                <input
                  type="text"
                  className="basis-[37.5%] rounded-md border px-2 py-1"
                  placeholder="E-mail"
                  required
                />
                <input
                  type="text"
                  className="basis-[100%] rounded-md border px-2 py-1"
                  placeholder="Telefone/Whatsapp"
                  required
                />

                <input
                  type="text"
                  className="basis-[100%] rounded-md border px-2 py-1"
                  placeholder="Assunto"
                />
                <textarea
                  className="basis-[100%] rounded-md border px-2 py-1"
                  placeholder="Mensagem"
                  required
                />

                <div className="flex flex-col">
                  <div className="text-sm text-slate-500">
                    Currículo ou outro anexo
                  </div>
                  <input type="file" />
                </div>

                <div className="flex w-full flex-row justify-end">
                  {" "}
                  <button className="mt-12 w-max rounded-md bg-mublack px-6 py-2 text-xl font-bold text-white transition hover:bg-mublack/80 active:scale-[0.97]">
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
