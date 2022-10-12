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
exports.AdminListPageTag4Service = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class AdminListPageTag4Service {
    execute(pageTag4Admin = 1, limitTag4Admin = 3) {
        return __awaiter(this, void 0, void 0, function* () {
            const skip = limitTag4Admin * (pageTag4Admin - 1);
            const allTags4Admin = yield prisma_1.default.tag4.findMany({
                orderBy: {
                    createdAt: 'desc'
                }
            });
            const tags4Admin = yield prisma_1.default.tag4.findMany({
                skip,
                take: limitTag4Admin,
                orderBy: {
                    createdAt: 'desc'
                }
            });
            // Retornamos um objeto onde tem a lista e tambem qual numero total de paginas tem com base no limitTag4e que recebeu
            const data = {
                tags4Admin,
                totalTag4Admin: allTags4Admin.length,
                total_pagesTag4Admin: Math.ceil(allTags4Admin.length / limitTag4Admin),
                current_pageTag4Admin: pageTag4Admin,
            };
            return data;
        });
    }
}
exports.AdminListPageTag4Service = AdminListPageTag4Service;
