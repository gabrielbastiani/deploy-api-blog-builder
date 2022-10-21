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
exports.EmailExportContactFormService = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
class EmailExportContactFormService {
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
                subject: "Lista de contatos do Blog",
                html: `<div style="background-color: rgb(223, 145, 0); color: black; padding: 0 55px;">
                      <h2>Lista de Contatos do Blog</h2>
                  </div>
                  
                  <article>
                      <p>Olá!</p>
                      <p>Segue em anexo o arquivo com a listagem de contatos cadastrados no Blog?</p>
                  </article>
                  
                  <div style="background-color: rgb(223, 145, 0); color: black; padding: 0 55px;">
                      <h5>Blog Builder Seu Negocio Online</h5>
                  </div>`,
                attachments: [{
                        filename: 'ListaContatosBlog.xlsx',
                        path: 'ListaContatosBlog.xlsx'
                    }]
            });
            return {
                message: "Verifique seu E-mail",
            };
        });
    }
}
exports.EmailExportContactFormService = EmailExportContactFormService;
