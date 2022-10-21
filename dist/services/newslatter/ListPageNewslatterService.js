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
exports.ListPageNewslatterService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class ListPageNewslatterService {
    execute(pageNews = 1, limitNews = 9) {
        return __awaiter(this, void 0, void 0, function* () {
            const skip = limitNews * (pageNews - 1);
            const allNewslatter = yield prisma_1.default.newslatter.findMany({
                orderBy: {
                    created_at: 'desc'
                }
            });
            const newslatter = yield prisma_1.default.newslatter.findMany({
                skip,
                take: limitNews,
                orderBy: {
                    created_at: 'desc'
                }
            });
            // Retornamos um objeto onde tem a lista e tambem qual numero total de paginas tem com base no limite que recebeu
            const data = {
                newslatter,
                totalNews: allNewslatter.length,
                total_pagesNews: Math.ceil(allNewslatter.length / limitNews),
                current_pageNews: pageNews,
            };
            return data;
        });
    }
}
exports.ListPageNewslatterService = ListPageNewslatterService;
