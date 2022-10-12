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
exports.ListPageTag2Controller = void 0;
const ListPageTag2Service_1 = require("../../services/tag2/ListPageTag2Service");
class ListPageTag2Controller {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listPageTag2Service = new ListPageTag2Service_1.ListPageTag2Service();
            const { pageTag2, limitTag2, name } = req.query;
            const tag2 = yield listPageTag2Service.execute(Number(pageTag2), Number(limitTag2), name);
            return res.json(tag2);
        });
    }
}
exports.ListPageTag2Controller = ListPageTag2Controller;
