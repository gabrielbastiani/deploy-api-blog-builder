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
exports.PageArticlesService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class PageArticlesService {
    execute({ title }) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const post = yield prisma_1.default.article.findUnique({
                where: {
                    title: title,
                }
            });
            const postPrevious = yield prisma_1.default.article.findFirst({
                where: {
                    created_at: { lt: (_a = post === null || post === void 0 ? void 0 : post.created_at) === null || _a === void 0 ? void 0 : _a.toISOString() },
                    published: true
                },
                orderBy: {
                    created_at: "desc",
                },
            });
            const postNext = yield prisma_1.default.article.findFirst({
                where: {
                    created_at: { gt: (_b = post === null || post === void 0 ? void 0 : post.created_at) === null || _b === void 0 ? void 0 : _b.toISOString() },
                    published: true
                },
                orderBy: {
                    created_at: "asc",
                },
            });
            const dataPage = {
                post,
                postPrevious,
                postNext
            };
            return dataPage;
        });
    }
}
exports.PageArticlesService = PageArticlesService;
