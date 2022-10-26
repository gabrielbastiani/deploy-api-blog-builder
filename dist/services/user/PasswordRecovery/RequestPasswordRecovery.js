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
exports.RequestPasswordRecovery = void 0;
const prisma_1 = __importDefault(require("../../../prisma"));
const nodemailer_1 = __importDefault(require("nodemailer"));
class RequestPasswordRecovery {
    execute({ email }) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield prisma_1.default.user.findFirst({
                where: {
                    email,
                },
            });
            if (!user) {
                throw {
                    error: { field: "email", message: "Conta não encontrada." },
                    code: 400,
                };
            }
            const recovery = yield prisma_1.default.passwordRecovery.create({
                data: {
                    email,
                },
            });
            const transporter = nodemailer_1.default.createTransport({
                host: "smart.iagentesmtp.com.br",
                port: 587,
                auth: {
                    user: "contato@builderseunegocioonline.com",
                    pass: "45839a96"
                }
            });
            yield transporter.sendMail({
                from: '"Blog - Builder Seu Negocio Online" <contato@builderseunegocioonline.com.br>',
                to: user.email,
                subject: "Recuperação de senha",
                html: `<div style="background-color: rgb(223, 145, 0); color: black; padding: 0 55px;">
                <h2>Recupere sua senha!</h2>
            </div>
            
            <article>
                <p>Olá, ${user.name}!</p>
                <p>Voce esqueceu a sua senha?</p>
                <p><a href="https://blog.builderseunegocioonline.com.br/recover?recovery_id=${recovery.id}">CLIQUE AQUI</a>, para crair uma nova senha de acesso.</p>
                <p>Você será redirecionado a uma página em nosso blog onde poderá cadastrar uma nova senha com segurança!</p>
            </article>
            
            <div style="background-color: rgb(223, 145, 0); color: black; padding: 0 55px;">
                <h5>Blog Builder Seu Negocio Online</h5>
            </div>`,
            });
            return {
                message: "Verifique seu E-mail",
            };
        });
    }
}
exports.RequestPasswordRecovery = RequestPasswordRecovery;
