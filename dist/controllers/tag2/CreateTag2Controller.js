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
exports.CreateTag2Controller = void 0;
const CreateTag2Service_1 = require("../../services/tag2/CreateTag2Service");
class CreateTag2Controller {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { tagName2, name } = req.body;
            const createTag2Service = new CreateTag2Service_1.CreateTag2Service();
            const tag2 = yield createTag2Service.execute({
                tagName2,
                name
            });
            return res.json(tag2);
        });
    }
}
exports.CreateTag2Controller = CreateTag2Controller;
