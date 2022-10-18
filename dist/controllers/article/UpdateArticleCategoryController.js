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
exports.UpdateArticleCategoryController = void 0;
const UpdateArticleCategoryService_1 = require("../../services/article/UpdateArticleCategoryService");
class UpdateArticleCategoryController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const article_id = req.query.article_id;
            const { categoryName } = req.body;
            const updateArticleCategoryService = new UpdateArticleCategoryService_1.UpdateArticleCategoryService();
            const article = yield updateArticleCategoryService.execute({
                article_id,
                categoryName
            });
            return res.json(article);
        });
    }
}
exports.UpdateArticleCategoryController = UpdateArticleCategoryController;
