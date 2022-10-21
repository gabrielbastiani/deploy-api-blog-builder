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
exports.ListExactArticleController = void 0;
const ListExactArticleService_1 = require("../../services/article/ListExactArticleService");
class ListExactArticleController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { article_id } = req.query;
            const listExactArticleService = new ListExactArticleService_1.ListExactArticleService();
            const article = yield listExactArticleService.execute({ article_id });
            return res.json(article);
        });
    }
}
exports.ListExactArticleController = ListExactArticleController;
