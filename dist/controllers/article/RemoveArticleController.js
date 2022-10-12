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
exports.RemoveArticleController = void 0;
const RemoveArticleService_1 = require("../../services/article/RemoveArticleService");
const RemoveBannerArticleService_1 = require("../../services/article/RemoveBannerArticleService");
const fs_1 = __importDefault(require("fs"));
class RemoveArticleController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const article_id = req.query.article_id;
            const removeBanner = new RemoveBannerArticleService_1.RemoveBannerArticleService();
            const removeArticleService = new RemoveArticleService_1.RemoveArticleService();
            const articleBanner = yield removeBanner.execute({
                article_id,
            });
            fs_1.default.unlinkSync(__dirname + '/' + '..' + '/' + '..' + '/' + '..' + '/' + 'imgblog' + '/' + articleBanner.banner);
            const article = yield removeArticleService.execute({
                article_id
            });
            return res.json([articleBanner, article]);
        });
    }
}
exports.RemoveArticleController = RemoveArticleController;
