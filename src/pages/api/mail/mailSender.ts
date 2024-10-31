export type TInputs = {
  value: string;
  files: File[];
};

type TMailSenderParams = {
  form: TInputs[];
};

export const mailSender = async (data: TMailSenderParams): Promise<boolean> => {
  const name = data.form[0]?.value ?? "";
  const email = data.form[1]?.value ?? "";
  const phone = data.form[2]?.value ?? "";
  const subject = data.form[3]?.value ?? "";
  const message = data.form[4]?.value ?? "";
  const files = data.form[5]?.files ?? [];

  let base64File = undefined;

  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  return await new Promise(async (resolve) => {
    if (files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);

      reader.onload = async (e) => {
        // A propriedade result contém os dados do arquivo como uma string base64
        base64File = e.target?.result as string; // Salva o arquivo base64 na constante
        console.log("Base64 string:", base64File);

        const response = await fetch("https://api.brevo.com/v3/smtp/email", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "api-key":
              "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",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            sender: {
              name: "MONTE URBANO WEBSITE",
              email: "sender@sender.com",
            },
            to: [
              {
                email: "felipe@monteurbano.com.br",
                name: "MONTE URBANO",
              },
            ],
            subject: "CTT WEBSITE: " + subject,
            htmlContent: `
       <html>
       <body>
        <h1> Contact from Website </h1>

        <h4><strong>Nome:</strong>${name}</h4>
        <h4><strong>E-mail:</strong>${email}</h4>
        <h4><strong>Telefone/Whatsapp:</strong>${phone}</h4>
        <h4><strong>Assunto:</strong>${subject}</h4>

        <h5><strong>Mensagem:</strong></h5>

        <span style="margin-top:25px">${message} </span>

       </body>
       </html>
        `,
            headers: {
              "X-Mailin-custom":
                "custom_header_1:custom_value_1|custom_header_2:custom_value_2|custom_header_3:custom_value_3",
              charset: "iso-8859-1",
            },
            attachment: [
              {
                name: "bg4.jpg",
                content: base64File.replace(/^data:image\/\w+;base64,/, ""),
              },
            ],
          }),
        });

        if (!response) resolve(false);

        const result = (await response.json()) as unknown;
        if (!result) resolve(false);
        resolve(true);
      };
    } else {
      const response = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "api-key":
            "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",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sender: {
            name: "MONTE URBANO WEBSITE",
            email: "sender@sender.com",
          },
          to: [
            {
              email: "felipe@monteurbano.com.br",
              name: "MONTE URBANO",
            },
          ],
          subject: "CTT WEBSITE: " + subject,
          htmlContent: `
       <html>
       <body>
        <h1> Contato</h1>

        <h4><strong>Nome:</strong>${name}</h4>
        <h4><strong>E-mail:</strong>${email}</h4>
        <h4><strong>Telefone/Whatsapp:</strong>${phone}</h4>
        <h4><strong>Assunto:</strong>${subject}</h4>

        <h5><strong>Mensagem:</strong></h5>

        <span style="margin-top:25px">${message} </span>

       </body>
       </html>
        `,
          headers: {
            "X-Mailin-custom":
              "custom_header_1:custom_value_1|custom_header_2:custom_value_2|custom_header_3:custom_value_3",
            charset: "iso-8859-1",
          },
        }),
      });

      if (!response) resolve(false);

      const result = (await response.json()) as unknown;
      if (!result) resolve(false);
      resolve(true);
    }
  });
};
