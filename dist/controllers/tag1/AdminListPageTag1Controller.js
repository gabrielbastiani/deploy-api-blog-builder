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
exports.AdminListPageTag1Controller = void 0;
const AdminListPageTag1Service_1 = require("../../services/tag1/AdminListPageTag1Service");
class AdminListPageTag1Controller {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const adminlistPageTag1Service = new AdminListPageTag1Service_1.AdminListPageTag1Service();
            const { pageTag1Admin, limitTag1Admin } = req.query;
            const tag1Admin = yield adminlistPageTag1Service.execute(Number(pageTag1Admin), Number(limitTag1Admin));
            return res.json(tag1Admin);
        });
    }
}
exports.AdminListPageTag1Controller = AdminListPageTag1Controller;
