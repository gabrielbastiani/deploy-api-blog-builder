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
exports.CreateTag5Controller = void 0;
const CreateTag5Service_1 = require("../../services/tag5/CreateTag5Service");
class CreateTag5Controller {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { tagName5, name } = req.body;
            const createTag5Service = new CreateTag5Service_1.CreateTag5Service();
            const tag5 = yield createTag5Service.execute({
                tagName5,
                name
            });
            return res.json(tag5);
        });
    }
}
exports.CreateTag5Controller = CreateTag5Controller;
