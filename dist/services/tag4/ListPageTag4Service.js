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
exports.ListPageTag4Service = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class ListPageTag4Service {
    execute(pageTag4 = 1, limitTag4 = 3, name) {
        return __awaiter(this, void 0, void 0, function* () {
            const skip = limitTag4 * (pageTag4 - 1);
            const allTags4 = yield prisma_1.default.tag4.findMany({
                where: {
                    name: name
                },
                orderBy: {
                    createdAt: 'desc'
                }
            });
            const tags4 = yield prisma_1.default.tag4.findMany({
                where: {
                    name: name
                },
                skip,
                take: limitTag4,
                orderBy: {
                    createdAt: 'desc'
                }
            });
            // Retornamos um objeto onde tem a lista e tambem qual numero total de paginas tem com base no limitTag4e que recebeu
            const data = {
                tags4,
                totalTag4: allTags4.length,
                total_pagesTag4: Math.ceil(allTags4.length / limitTag4),
                current_pageTag4: pageTag4,
            };
            return data;
        });
    }
}
exports.ListPageTag4Service = ListPageTag4Service;
