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
exports.ListPageCategoryController = void 0;
const ListPageCategoryService_1 = require("../../services/category/ListPageCategoryService");
class ListPageCategoryController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listPageCategoryService = new ListPageCategoryService_1.ListPageCategoryService();
            const { page, limit, name } = req.query;
            const categorys = yield listPageCategoryService.execute(Number(page), Number(limit), name);
            return res.json(categorys);
        });
    }
}
exports.ListPageCategoryController = ListPageCategoryController;
