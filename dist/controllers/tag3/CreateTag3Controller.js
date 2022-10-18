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
exports.CreateTag3Controller = void 0;
const CreateTag3Service_1 = require("../../services/tag3/CreateTag3Service");
class CreateTag3Controller {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { tagName3, name } = req.body;
            const createTag3Service = new CreateTag3Service_1.CreateTag3Service();
            const tag3 = yield createTag3Service.execute({
                tagName3,
                name
            });
            return res.json(tag3);
        });
    }
}
exports.CreateTag3Controller = CreateTag3Controller;
