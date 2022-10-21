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
exports.CreateTag4Controller = void 0;
const CreateTag4Service_1 = require("../../services/tag4/CreateTag4Service");
class CreateTag4Controller {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { tagName4, name } = req.body;
            const createTag4Service = new CreateTag4Service_1.CreateTag4Service();
            const tag4 = yield createTag4Service.execute({
                tagName4,
                name
            });
            return res.json(tag4);
        });
    }
}
exports.CreateTag4Controller = CreateTag4Controller;
