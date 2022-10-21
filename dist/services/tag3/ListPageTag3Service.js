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
exports.ListPageTag3Service = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class ListPageTag3Service {
    execute(pageTag3 = 1, limitTag3 = 3, name) {
        return __awaiter(this, void 0, void 0, function* () {
            const skip = limitTag3 * (pageTag3 - 1);
            const allTags3 = yield prisma_1.default.tag3.findMany({
                where: {
                    name: name
                },
                orderBy: {
                    createdAt: 'desc'
                }
            });
            const tags3 = yield prisma_1.default.tag3.findMany({
                where: {
                    name: name
                },
                skip,
                take: limitTag3,
                orderBy: {
                    createdAt: 'desc'
                }
            });
            // Retornamos um objeto onde tem a lista e tambem qual numero total de paginas tem com base no limitTag3e que recebeu
            const data = {
                tags3,
                totalTag3: allTags3.length,
                total_pagesTag3: Math.ceil(allTags3.length / limitTag3),
                current_pageTag3: pageTag3,
            };
            return data;
        });
    }
}
exports.ListPageTag3Service = ListPageTag3Service;
