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
exports.UpdateArticleTagsController = void 0;
const UpdateArticleTagsService_1 = require("../../services/article/UpdateArticleTagsService");
class UpdateArticleTagsController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const article_id = req.query.article_id;
            const { tagName1, tagName2, tagName3, tagName4, tagName5 } = req.body;
            const updateArticleTagsService = new UpdateArticleTagsService_1.UpdateArticleTagsService();
            const article = yield updateArticleTagsService.execute({
                article_id,
                tagName1,
                tagName2,
                tagName3,
                tagName4,
                tagName5,
            });
            return res.json(article);
        });
    }
}
exports.UpdateArticleTagsController = UpdateArticleTagsController;
