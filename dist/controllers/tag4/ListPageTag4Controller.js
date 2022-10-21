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
exports.ListPageTag4Controller = void 0;
const ListPageTag4Service_1 = require("../../services/tag4/ListPageTag4Service");
class ListPageTag4Controller {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listPageTag4Service = new ListPageTag4Service_1.ListPageTag4Service();
            const { pageTag4, limitTag4, name } = req.query;
            const tag4 = yield listPageTag4Service.execute(Number(pageTag4), Number(limitTag4), name);
            return res.json(tag4);
        });
    }
}
exports.ListPageTag4Controller = ListPageTag4Controller;
