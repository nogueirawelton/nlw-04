import handlebars from "handlebars";
import fs from "fs";

import nodemailer, { Transporter } from "nodemailer";
import { IMailProvider } from "../IMailProvider";

export class MailProvider implements IMailProvider {
  private client: Transporter
  constructor() {
      const transporter = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "eb60d9d25b055f",
          pass: "03303976e297a0"
        }
      });
      this.client = transporter;
  }
  async execute(to: string, subject: string, variables: object, path: string): Promise<void> {
    const templateFileContent = fs.readFileSync(path).toString("utf8");

    const mailTemplateParse = handlebars.compile(templateFileContent);
    const html = mailTemplateParse(variables);
    await this.client.sendMail({
      to,
      subject,
      html,
      from: "NPS <noreply@nps.com.br>"
    });
  }
}