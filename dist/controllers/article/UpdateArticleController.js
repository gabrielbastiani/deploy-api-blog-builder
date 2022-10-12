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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateArticleController = void 0;
const UpdateArticleService_1 = require("../../services/article/UpdateArticleService");
class UpdateArticleController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const article_id = req.query.article_id;
            const { title, description, categoryName, tagName1, tagName2, tagName3, tagName4, tagName5 } = req.body;
            const updateArticleService = new UpdateArticleService_1.UpdateArticleService();
            if (!req.file) {
                throw new Error('error upload file');
            }
            else {
                const { originalname, filename: banner } = req.file;
                const article = yield updateArticleService.execute({
                    article_id,
                    title,
                    description,
                    banner,
                    categoryName,
                    tagName1,
                    tagName2,
                    tagName3,
                    tagName4,
                    tagName5,
                });
                return res.json(article);
            }
        });
    }
}
exports.UpdateArticleController = UpdateArticleController;
