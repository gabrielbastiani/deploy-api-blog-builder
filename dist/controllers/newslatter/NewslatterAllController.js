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
exports.NewslatterAllController = void 0;
const NewslatterAllService_1 = require("../../services/newslatter/NewslatterAllService");
class NewslatterAllController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const newslatter_id = req.query.newslatter_id;
            const listNewslatters = new NewslatterAllService_1.NewslatterAllService();
            const contactForm = yield listNewslatters.execute({
                newslatter_id
            });
            return res.json(contactForm);
        });
    }
}
exports.NewslatterAllController = NewslatterAllController;
