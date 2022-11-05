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
exports.AdminDashboardPageArticlesService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class AdminDashboardPageArticlesService {
    execute(pageAdmin = 1, limitAdmin = 4) {
        return __awaiter(this, void 0, void 0, function* () {
            const skip = limitAdmin * (pageAdmin - 1);
            //Pegar quantidade de todos os artigos
            const allarticlesAdmin = yield prisma_1.default.article.findMany({
                orderBy: {
                    created_at: 'desc'
                }
            });
            const admin = yield prisma_1.default.article.findMany({
                skip,
                take: limitAdmin,
                orderBy: {
                    created_at: 'desc'
                }
            });
            // Retornamos um objeto onde tem a lista e tambem qual numero total de paginas tem com base no limite que recebeu
            const data = {
                admin,
                totalAdmin: allarticlesAdmin.length,
                total_pagesAdmin: Math.ceil(allarticlesAdmin.length / limitAdmin),
                current_pageAdmin: pageAdmin,
            };
            return data;
        });
    }
}
exports.AdminDashboardPageArticlesService = AdminDashboardPageArticlesService;
