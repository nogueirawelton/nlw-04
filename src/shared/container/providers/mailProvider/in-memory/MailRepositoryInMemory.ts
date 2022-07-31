import { IMailProvider } from "../../IMailProvider";


export class MailRepositoryInMemory implements IMailProvider{
  mails: {
    to: string;
    subject: string;
  }[] = [];

  async execute(to: string, subject: string, variables: object, path: string): Promise<void> {
    this.mails.push({
      to,
      subject,
    })
  }
}