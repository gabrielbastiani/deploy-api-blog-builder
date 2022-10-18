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
exports.ListPageContactFormController = void 0;
const ListPageContactFormService_1 = require("../../services/contactform/ListPageContactFormService");
class ListPageContactFormController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listPageContactFormService = new ListPageContactFormService_1.ListPageContactFormService();
            const { pageContact, limitContact } = req.query;
            const data = listPageContactFormService.execute();
            const contactform = yield listPageContactFormService.execute(Number(pageContact), Number(limitContact));
            return res.json(contactform);
        });
    }
}
exports.ListPageContactFormController = ListPageContactFormController;
