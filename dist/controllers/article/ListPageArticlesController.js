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
exports.ListPageArticlesController = void 0;
const ListPageArticlesService_1 = require("../../services/article/ListPageArticlesService");
class ListPageArticlesController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listPageArticlesService = new ListPageArticlesService_1.ListPageArticlesService();
            const { page, limit, name } = req.query;
            const articles = yield listPageArticlesService.execute(Number(page), Number(limit), name);
            return res.json(articles);
        });
    }
}
exports.ListPageArticlesController = ListPageArticlesController;
