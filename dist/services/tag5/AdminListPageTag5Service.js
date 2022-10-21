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
exports.AdminListPageTag5Service = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class AdminListPageTag5Service {
    execute(pageTag5Admin = 1, limitTag5Admin = 3) {
        return __awaiter(this, void 0, void 0, function* () {
            const skip = limitTag5Admin * (pageTag5Admin - 1);
            const allTags5Admin = yield prisma_1.default.tag5.findMany({
                orderBy: {
                    createdAt: 'desc'
                }
            });
            const tags5Admin = yield prisma_1.default.tag5.findMany({
                skip,
                take: limitTag5Admin,
                orderBy: {
                    createdAt: 'desc'
                }
            });
            // Retornamos um objeto onde tem a lista e tambem qual numero total de paginas tem com base no limitTag5e que recebeu
            const data = {
                tags5Admin,
                totalTag5Admin: allTags5Admin.length,
                total_pagesTag5Admin: Math.ceil(allTags5Admin.length / limitTag5Admin),
                current_pageTag5Admin: pageTag5Admin,
            };
            return data;
        });
    }
}
exports.AdminListPageTag5Service = AdminListPageTag5Service;
