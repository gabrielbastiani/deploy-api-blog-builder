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
exports.ListPageTag5Controller = void 0;
const ListPageTag5Service_1 = require("../../services/tag5/ListPageTag5Service");
class ListPageTag5Controller {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listPageTag5Service = new ListPageTag5Service_1.ListPageTag5Service();
            const { pageTag5, limitTag5, name } = req.query;
            const tag5 = yield listPageTag5Service.execute(Number(pageTag5), Number(limitTag5), name);
            return res.json(tag5);
        });
    }
}
exports.ListPageTag5Controller = ListPageTag5Controller;
