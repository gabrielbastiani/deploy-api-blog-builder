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
exports.DatePublishedArticleController = void 0;
const DatePublishedArticleService_1 = require("../../services/article/DatePublishedArticleService");
class DatePublishedArticleController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const article_id = req.query.article_id;
            const { publishDate } = req.body;
            const alldatepublished = new DatePublishedArticleService_1.DatePublishedArticleService();
            const articles = yield alldatepublished.execute({
                article_id,
                publishDate,
            });
            return res.json(articles);
        });
    }
}
exports.DatePublishedArticleController = DatePublishedArticleController;
