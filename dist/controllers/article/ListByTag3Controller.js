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
exports.ListByTag3Controller = void 0;
const ListByTag3Service_1 = require("../../services/article/ListByTag3Service");
class ListByTag3Controller {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listByTag3Service = new ListByTag3Service_1.ListByTag3Service();
            const { page, limit, tagName3 } = req.query;
            const articles = yield listByTag3Service.execute(Number(page), Number(limit), tagName3);
            return res.json(articles);
        });
    }
}
exports.ListByTag3Controller = ListByTag3Controller;
