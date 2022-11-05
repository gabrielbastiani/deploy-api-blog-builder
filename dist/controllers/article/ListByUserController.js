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
exports.ListByUserController = void 0;
const ListByUserService_1 = require("../../services/article/ListByUserService");
class ListByUserController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listByUserService = new ListByUserService_1.ListByUserService();
            const { page, limit, name } = req.query;
            const articles = yield listByUserService.execute(Number(page), Number(limit), name);
            return res.json(articles);
        });
    }
}
exports.ListByUserController = ListByUserController;
