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
exports.ListPageTag1Controller = void 0;
const ListPageTag1Service_1 = require("../../services/tag1/ListPageTag1Service");
class ListPageTag1Controller {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listPageTag1Service = new ListPageTag1Service_1.ListPageTag1Service();
            const { pageTag1, limitTag1, name } = req.query;
            const tag1 = yield listPageTag1Service.execute(Number(pageTag1), Number(limitTag1), name);
            return res.json(tag1);
        });
    }
}
exports.ListPageTag1Controller = ListPageTag1Controller;
