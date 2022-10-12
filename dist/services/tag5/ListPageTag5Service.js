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
exports.ListPageTag5Service = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class ListPageTag5Service {
    execute(pageTag5 = 1, limitTag5 = 3, name) {
        return __awaiter(this, void 0, void 0, function* () {
            const skip = limitTag5 * (pageTag5 - 1);
            const allTags5 = yield prisma_1.default.tag5.findMany({
                where: {
                    name: name
                },
                orderBy: {
                    createdAt: 'desc'
                }
            });
            const tags5 = yield prisma_1.default.tag5.findMany({
                where: {
                    name: name
                },
                skip,
                take: limitTag5,
                orderBy: {
                    createdAt: 'desc'
                }
            });
            // Retornamos um objeto onde tem a lista e tambem qual numero total de paginas tem com base no limitTag5e que recebeu
            const data = {
                tags5,
                totalTag5: allTags5.length,
                total_pagesTag5: Math.ceil(allTags5.length / limitTag5),
                current_pageTag5: pageTag5,
            };
            return data;
        });
    }
}
exports.ListPageTag5Service = ListPageTag5Service;
