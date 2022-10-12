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
exports.UpdateArticleService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class UpdateArticleService {
    execute({ article_id, title, description, banner, categoryName, tagName1, tagName2, tagName3, tagName4, tagName5 }) {
        return __awaiter(this, void 0, void 0, function* () {
            const articleUpdate = yield prisma_1.default.article.update({
                where: {
                    id: String(article_id),
                },
                data: {
                    title: title,
                    description: description,
                    banner: banner,
                    categoryName: categoryName,
                    tagName1: tagName1,
                    tagName2: tagName2,
                    tagName3: tagName3,
                    tagName4: tagName4,
                    tagName5: tagName5,
                }
            });
            return articleUpdate;
        });
    }
}
exports.UpdateArticleService = UpdateArticleService;