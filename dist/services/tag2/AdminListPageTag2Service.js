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
exports.AdminListPageTag2Service = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class AdminListPageTag2Service {
    execute(pageTag2Admin = 1, limitTag2Admin = 3) {
        return __awaiter(this, void 0, void 0, function* () {
            const skip = limitTag2Admin * (pageTag2Admin - 1);
            const allTags2Admin = yield prisma_1.default.tag2.findMany({
                orderBy: {
                    createdAt: 'desc'
                }
            });
            const tags2Admin = yield prisma_1.default.tag2.findMany({
                skip,
                take: limitTag2Admin,
                orderBy: {
                    createdAt: 'desc'
                }
            });
            // Retornamos um objeto onde tem a lista e tambem qual numero total de paginas tem com base no limitTag2e que recebeu
            const data = {
                tags2Admin,
                totalTag2Admin: allTags2Admin.length,
                total_pagesTag2Admin: Math.ceil(allTags2Admin.length / limitTag2Admin),
                current_pageTag2Admin: pageTag2Admin,
            };
            return data;
        });
    }
}
exports.AdminListPageTag2Service = AdminListPageTag2Service;
