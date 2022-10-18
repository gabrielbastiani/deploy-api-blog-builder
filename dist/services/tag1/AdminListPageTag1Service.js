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
exports.AdminListPageTag1Service = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class AdminListPageTag1Service {
    execute(pageTag1Admin = 1, limitTag1Admin = 3) {
        return __awaiter(this, void 0, void 0, function* () {
            const skip = limitTag1Admin * (pageTag1Admin - 1);
            const allTags1Admin = yield prisma_1.default.tag1.findMany({
                orderBy: {
                    createdAt: 'desc'
                }
            });
            const tags1Admin = yield prisma_1.default.tag1.findMany({
                skip,
                take: limitTag1Admin,
                orderBy: {
                    createdAt: 'desc'
                }
            });
            // Retornamos um objeto onde tem a lista e tambem qual numero total de paginas tem com base no limitTag1e que recebeu
            const data = {
                tags1Admin,
                totalTag1Admin: allTags1Admin.length,
                total_pagesTag1Admin: Math.ceil(allTags1Admin.length / limitTag1Admin),
                current_pageTag1Admin: pageTag1Admin,
            };
            return data;
        });
    }
}
exports.AdminListPageTag1Service = AdminListPageTag1Service;
