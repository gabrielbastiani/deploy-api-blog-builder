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
exports.RemoveContactFormController = void 0;
const RemoveContactFormService_1 = require("../../services/contactform/RemoveContactFormService");
class RemoveContactFormController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const contactform_id = req.query.contactform_id;
            const removeContactFormService = new RemoveContactFormService_1.RemoveContactFormService();
            const contactform = yield removeContactFormService.execute({
                contactform_id,
            });
            return res.json(contactform);
        });
    }
}
exports.RemoveContactFormController = RemoveContactFormController;
