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
exports.AdminListPageTag3Service = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class AdminListPageTag3Service {
    execute(pageTag3Admin = 1, limitTag3Admin = 3) {
        return __awaiter(this, void 0, void 0, function* () {
            const skip = limitTag3Admin * (pageTag3Admin - 1);
            const allTags3Admin = yield prisma_1.default.tag3.findMany({
                orderBy: {
                    createdAt: 'desc'
                }
            });
            const tags3Admin = yield prisma_1.default.tag3.findMany({
                skip,
                take: limitTag3Admin,
                orderBy: {
                    createdAt: 'desc'
                }
            });
            // Retornamos um objeto onde tem a lista e tambem qual numero total de paginas tem com base no limitTag3e que recebeu
            const data = {
                tags3Admin,
                totalTag3Admin: allTags3Admin.length,
                total_pagesTag3Admin: Math.ceil(allTags3Admin.length / limitTag3Admin),
                current_pageTag3Admin: pageTag3Admin,
            };
            return data;
        });
    }
}
exports.AdminListPageTag3Service = AdminListPageTag3Service;
