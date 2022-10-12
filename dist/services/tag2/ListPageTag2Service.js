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
exports.ListPageTag2Service = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class ListPageTag2Service {
    execute(pageTag2 = 1, limitTag2 = 3, name) {
        return __awaiter(this, void 0, void 0, function* () {
            const skip = limitTag2 * (pageTag2 - 1);
            const allTags2 = yield prisma_1.default.tag2.findMany({
                where: {
                    name: name
                },
                orderBy: {
                    createdAt: 'desc'
                }
            });
            const tags2 = yield prisma_1.default.tag2.findMany({
                where: {
                    name: name
                },
                skip,
                take: limitTag2,
                orderBy: {
                    createdAt: 'desc'
                }
            });
            // Retornamos um objeto onde tem a lista e tambem qual numero total de paginas tem com base no limitTag2e que recebeu
            const data = {
                tags2,
                totalTag2: allTags2.length,
                total_pagesTag2: Math.ceil(allTags2.length / limitTag2),
                current_pageTag2: pageTag2,
            };
            return data;
        });
    }
}
exports.ListPageTag2Service = ListPageTag2Service;
