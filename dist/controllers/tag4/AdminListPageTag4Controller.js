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
exports.AdminListPageTag4Controller = void 0;
const AdminListPageTag4Service_1 = require("../../services/tag4/AdminListPageTag4Service");
class AdminListPageTag4Controller {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const adminlistPageTag4Service = new AdminListPageTag4Service_1.AdminListPageTag4Service();
            const { pageTag4Admin, limitTag4Admin } = req.query;
            const tag4Admin = yield adminlistPageTag4Service.execute(Number(pageTag4Admin), Number(limitTag4Admin));
            return res.json(tag4Admin);
        });
    }
}
exports.AdminListPageTag4Controller = AdminListPageTag4Controller;
