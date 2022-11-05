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
exports.EmailExportNewslattersController = void 0;
const EmailExportNewslattersService_1 = require("../../services/sendEmails/EmailExportNewslattersService");
class EmailExportNewslattersController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listNewslatters = new EmailExportNewslattersService_1.EmailExportNewslattersService();
            const newslattersEmail = yield listNewslatters.execute();
            return res.json(newslattersEmail);
        });
    }
}
exports.EmailExportNewslattersController = EmailExportNewslattersController;
