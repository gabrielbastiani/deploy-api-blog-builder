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
exports.AdminListPageTag2Controller = void 0;
const AdminListPageTag2Service_1 = require("../../services/tag2/AdminListPageTag2Service");
class AdminListPageTag2Controller {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const adminlistPageTag2Service = new AdminListPageTag2Service_1.AdminListPageTag2Service();
            const { pageTag2Admin, limitTag2Admin } = req.query;
            const tag2Admin = yield adminlistPageTag2Service.execute(Number(pageTag2Admin), Number(limitTag2Admin));
            return res.json(tag2Admin);
        });
    }
}
exports.AdminListPageTag2Controller = AdminListPageTag2Controller;
