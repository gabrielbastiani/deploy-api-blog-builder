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
exports.CreateTag1Controller = void 0;
const CreateTag1Service_1 = require("../../services/tag1/CreateTag1Service");
class CreateTag1Controller {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { tagName1, name } = req.body;
            const createTag1Service = new CreateTag1Service_1.CreateTag1Service();
            const tag1 = yield createTag1Service.execute({
                tagName1,
                name
            });
            return res.json(tag1);
        });
    }
}
exports.CreateTag1Controller = CreateTag1Controller;
