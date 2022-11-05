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
exports.SendEmailNewsService = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
require('dotenv/config');
class SendEmailNewsService {
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            const transporter = nodemailer_1.default.createTransport({
                host: process.env.HOST_SMTP,
                port: 465,
                auth: {
                    user: process.env.USER_SMTP,
                    pass: process.env.PASS_SMTP
                }
            });
            yield transporter.sendMail({
                from: '"Blog - Builder Seu Negocio Online" <contato@builderseunegocioonline.com.br>',
                to: 'gabriel.bastiani@hotmail.com.br',
                subject: "Novo contato em sua Newslatter",
                html: `<div style="background-color: rgb(223, 145, 0); color: black; padding: 0 55px;">
                <h2>Cadastro contato newslatters no Blog!</h2>
            </div>
            
            <article>
                <p>Você acaba de receber um novo cadastro de NewsLatters em seu Blog.</p>
                <p>Para verificar esse cadastro, basta acessar seu painel administrativo da sua conta no Blog, e navegar até o menu "Lista de E-mails".</p>
            </article>
            
            <div style="background-color: rgb(223, 145, 0); color: black; padding: 0 55px;">
                <h5>Blog Builder Seu Negocio Online</h5>
            </div>`,
            });
            return {
                message: "Obrigado pela mensagem, retornaremos em breve!",
            };
        });
    }
}
exports.SendEmailNewsService = SendEmailNewsService;
