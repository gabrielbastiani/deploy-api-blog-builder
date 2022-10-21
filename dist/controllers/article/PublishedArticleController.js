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
exports.PublishedArticleController = void 0;
const PublishedArticleSevice_1 = require("../../services/article/PublishedArticleSevice");
class PublishedArticleController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const article_id = req.query.article_id;
            const publishedArticle = new PublishedArticleSevice_1.PublishedArticleSevice();
            const article = yield publishedArticle.execute({
                article_id
            });
            return res.json(article);
        });
    }
}
exports.PublishedArticleController = PublishedArticleController;
