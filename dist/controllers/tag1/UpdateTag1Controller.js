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
exports.UpdateTag1Controller = void 0;
const UpdateTag1Service_1 = require("../../services/tag1/UpdateTag1Service");
class UpdateTag1Controller {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const tag1_id = req.query.tag1_id;
            const { tagName1 } = req.body;
            const updateTag1Service = new UpdateTag1Service_1.UpdateTag1Service();
            const tagUpdate1 = yield updateTag1Service.execute({
                tag1_id,
                tagName1,
            });
            return res.json(tagUpdate1);
        });
    }
}
exports.UpdateTag1Controller = UpdateTag1Controller;
