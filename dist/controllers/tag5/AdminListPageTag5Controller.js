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
exports.AdminListPageTag5Controller = void 0;
const AdminListPageTag5Service_1 = require("../../services/tag5/AdminListPageTag5Service");
class AdminListPageTag5Controller {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const adminlistPageTag5Service = new AdminListPageTag5Service_1.AdminListPageTag5Service();
            const { pageTag5Admin, limitTag5Admin } = req.query;
            const tag5Admin = yield adminlistPageTag5Service.execute(Number(pageTag5Admin), Number(limitTag5Admin));
            return res.json(tag5Admin);
        });
    }
}
exports.AdminListPageTag5Controller = AdminListPageTag5Controller;
