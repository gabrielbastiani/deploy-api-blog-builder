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
exports.CreateContactFormController = void 0;
const CreateContactFormService_1 = require("../../services/contactform/CreateContactFormService");
class CreateContactFormController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nameContact, emailContact, textContact } = req.body;
            const createContactFormService = new CreateContactFormService_1.CreateContactFormService();
            const contactform = yield createContactFormService.execute({
                nameContact,
                emailContact,
                textContact
            });
            return res.json(contactform);
        });
    }
}
exports.CreateContactFormController = CreateContactFormController;
