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
exports.AdminListPageCategoryController = void 0;
const AdminListPageCategoryService_1 = require("../../services/category/AdminListPageCategoryService");
class AdminListPageCategoryController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const adminListPageCategoryService = new AdminListPageCategoryService_1.AdminListPageCategoryService();
            const { pageAdmin, limitAdmin } = req.query;
            const categorys = yield adminListPageCategoryService.execute(Number(pageAdmin), Number(limitAdmin));
            return res.json(categorys);
        });
    }
}
exports.AdminListPageCategoryController = AdminListPageCategoryController;
