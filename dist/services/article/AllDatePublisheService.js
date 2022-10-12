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
exports.AllDatePublisheService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const CronJob = require('cron').CronJob;
const moment_1 = __importDefault(require("moment"));
const nodemailer_1 = __importDefault(require("nodemailer"));
class AllDatePublisheService {
    execute({ publishDate, article_id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const allDate = yield prisma_1.default.article.findFirst({
                where: {
                    id: article_id,
                    publishDate: publishDate
                }
            });
            const titleArticle = allDate.title;
            const dateAll = allDate.publishDate;
            const dateFuture = (0, moment_1.default)(dateAll).format('DD/MM/YYYY HH:mm');
            console.log("Data futura:", dateFuture);
            const job = new CronJob('0 * * * * *', () => __awaiter(this, void 0, void 0, function* () {
                const dateNow = (0, moment_1.default)(new Date()).format('DD/MM/YYYY HH:mm');
                console.log("Data atual:", dateNow);
                if (dateNow === dateFuture) {
                    console.log('Publicado na data');
                    const dataPublished = yield prisma_1.default.article.update({
                        where: {
                            id: article_id,
                        },
                        data: {
                            published: true,
                        }
                    });
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
                        subject: "Artigo programado no blog",
                        html: `<div style="background-color: rgb(223, 145, 0); color: black; padding: 0 55px;">
                              <h2>Artigo programado no blog</h2>
                          </div>
                          
                          <article>
                              <p>Olá!</p>
                              <p>O artigo de titulo: <b>"${titleArticle}"</b>, programado para ser publicado na data <b>${dateFuture}</b> foi publicado no blog!</p>
                          </article>
                          
                          <div style="background-color: rgb(223, 145, 0); color: black; padding: 0 55px;">
                              <h5>Blog Builder Seu Negocio Online</h5>
                          </div>`,
                    });
                    return dataPublished;
                }
            }), null, true);
        });
    }
}
exports.AllDatePublisheService = AllDatePublisheService;
