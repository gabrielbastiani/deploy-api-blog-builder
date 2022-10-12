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
exports.ListPageCategoryService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class ListPageCategoryService {
    execute(page = 1, limit = 4, name) {
        return __awaiter(this, void 0, void 0, function* () {
            const skip = limit * (page - 1);
            const allCategorys = yield prisma_1.default.category.findMany({
                where: {
                    name: name
                },
                orderBy: {
                    created_at: 'desc'
                }
            });
            const categs = yield prisma_1.default.category.findMany({
                where: {
                    name: name
                },
                skip,
                take: limit,
                orderBy: {
                    created_at: 'desc'
                }
            });
            // Retornamos um objeto onde tem a lista e tambem qual numero total de paginas tem com base no limite que recebeu
            const data = {
                categs,
                total: allCategorys.length,
                total_pages: Math.ceil(allCategorys.length / limit),
                current_page: page,
            };
            return data;
        });
    }
}
exports.ListPageCategoryService = ListPageCategoryService;
