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
exports.CreateArticleController = void 0;
const CreateArticleService_1 = require("../../services/article/CreateArticleService");
class CreateArticleController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, description, categoryName, name, tagName1, tagName2, tagName3, tagName4, tagName5 } = req.body;
            const createArticleService = new CreateArticleService_1.CreateArticleService();
            if (!req.file) {
                throw new Error("error upload file");
            }
            else {
                const { originalname, filename: banner } = req.file;
                const article = yield createArticleService.execute({
                    title,
                    description,
                    banner,
                    categoryName,
                    name,
                    tagName1,
                    tagName2,
                    tagName3,
                    tagName4,
                    tagName5
                });
                return res.json(article);
            }
        });
    }
}
exports.CreateArticleController = CreateArticleController;
