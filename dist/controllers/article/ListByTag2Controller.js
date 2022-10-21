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
exports.ListByTag2Controller = void 0;
const ListByTag2Service_1 = require("../../services/article/ListByTag2Service");
class ListByTag2Controller {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listByTag2Service = new ListByTag2Service_1.ListByTag2Service();
            const { page, limit, tagName2 } = req.query;
            const articles = yield listByTag2Service.execute(Number(page), Number(limit), tagName2);
            return res.json(articles);
        });
    }
}
exports.ListByTag2Controller = ListByTag2Controller;
