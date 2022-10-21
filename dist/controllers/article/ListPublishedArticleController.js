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
exports.ListPublishedArticleController = void 0;
const ListPublishedArticlesService_1 = require("../../services/article/ListPublishedArticlesService");
class ListPublishedArticleController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listPublishedArticlesService = new ListPublishedArticlesService_1.ListPublishedArticlesService();
            const { page, limit } = req.query;
            const data = listPublishedArticlesService.execute();
            const articles = yield listPublishedArticlesService.execute(Number(page), Number(limit));
            return res.json(articles);
        });
    }
}
exports.ListPublishedArticleController = ListPublishedArticleController;
