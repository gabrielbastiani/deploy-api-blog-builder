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
exports.ListPageNewslatterController = void 0;
const ListPageNewslatterService_1 = require("../../services/newslatter/ListPageNewslatterService");
class ListPageNewslatterController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listPageNewslatterService = new ListPageNewslatterService_1.ListPageNewslatterService();
            const { pageNews, limitNews } = req.query;
            const data = listPageNewslatterService.execute();
            const newslatter = yield listPageNewslatterService.execute(Number(pageNews), Number(limitNews));
            return res.json(newslatter);
        });
    }
}
exports.ListPageNewslatterController = ListPageNewslatterController;
