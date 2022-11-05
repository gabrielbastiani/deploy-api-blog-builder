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
exports.ListPageTag1Service = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class ListPageTag1Service {
    execute(pageTag1 = 1, limitTag1 = 3, name) {
        return __awaiter(this, void 0, void 0, function* () {
            const skip = limitTag1 * (pageTag1 - 1);
            const allTags1 = yield prisma_1.default.tag1.findMany({
                where: {
                    name: name
                },
                orderBy: {
                    createdAt: 'desc'
                }
            });
            const tags1 = yield prisma_1.default.tag1.findMany({
                where: {
                    name: name
                },
                skip,
                take: limitTag1,
                orderBy: {
                    createdAt: 'desc'
                }
            });
            // Retornamos um objeto onde tem a lista e tambem qual numero total de paginas tem com base no limitTag1e que recebeu
            const data = {
                tags1,
                totalTag1: allTags1.length,
                total_pagesTag1: Math.ceil(allTags1.length / limitTag1),
                current_pageTag1: pageTag1,
            };
            return data;
        });
    }
}
exports.ListPageTag1Service = ListPageTag1Service;
