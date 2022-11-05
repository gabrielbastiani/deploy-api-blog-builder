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
exports.ListByTag5Controller = void 0;
const ListByTag5Service_1 = require("../../services/article/ListByTag5Service");
class ListByTag5Controller {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listByTag5Service = new ListByTag5Service_1.ListByTag5Service();
            const { page, limit, tagName5 } = req.query;
            const articles = yield listByTag5Service.execute(Number(page), Number(limit), tagName5);
            return res.json(articles);
        });
    }
}
exports.ListByTag5Controller = ListByTag5Controller;
