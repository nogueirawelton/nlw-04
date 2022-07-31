import { Transporter } from "nodemailer"

export interface IMailProvider {
  execute(to: string, subject: string, variables: object, path: string): Promise<void>
}