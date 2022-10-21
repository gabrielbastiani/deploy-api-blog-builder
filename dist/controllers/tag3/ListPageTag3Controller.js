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
exports.ListPageTag3Controller = void 0;
const ListPageTag3Service_1 = require("../../services/tag3/ListPageTag3Service");
class ListPageTag3Controller {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listPageTag3Service = new ListPageTag3Service_1.ListPageTag3Service();
            const { pageTag3, limitTag3, name } = req.query;
            const tag3 = yield listPageTag3Service.execute(Number(pageTag3), Number(limitTag3), name);
            return res.json(tag3);
        });
    }
}
exports.ListPageTag3Controller = ListPageTag3Controller;
