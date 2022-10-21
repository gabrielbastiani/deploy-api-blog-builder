"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendEmailContacFormService = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
class SendEmailContacFormService {
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            const transporter = nodemailer_1.default.createTransport({
                host: "smtplw.com.br",
                port: 587,
                auth: {
                    user: "gabrielbastiani",
                    pass: "xbZwBGam6780"
                }
            });
            yield transporter.sendMail({
                from: '"Blog - Builder Seu Negocio Online" <contato@smtpemailwebapp.com.br>',
                to: 'gabriel.bastiani@hotmail.com.br',
                subject: "Mensagem recebida no Blog",
                html: `<div style="background-color: rgb(223, 145, 0); color: black; padding: 0 55px;">
                <h2>Mensagem do formulario de contato no Blog!</h2>
            </div>
            
            <article>
                <p>Você acaba de receber uma nova mensagem de um visitante em seu Blog.</p>
                <p>Para ler a mensagem, acesse o seu painel administrativo na sua conta no Blog, e navegue até o menu "Contatos".</p>
            </article>
            
            <div style="background-color: rgb(223, 145, 0); color: black; padding: 0 55px;">
                <h5>Blog Builder Seu Negocio Online</h5>
            </div>`,
            });
            return;
        });
    }
}
exports.SendEmailContacFormService = SendEmailContacFormService;
