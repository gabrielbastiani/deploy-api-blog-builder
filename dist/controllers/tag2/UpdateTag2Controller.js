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
exports.UpdateTag2Controller = void 0;
const UpdateTag2Service_1 = require("../../services/tag2/UpdateTag2Service");
class UpdateTag2Controller {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const tag2_id = req.query.tag2_id;
            const { tagName2 } = req.body;
            const updateTag2Service = new UpdateTag2Service_1.UpdateTag2Service();
            const tagUpdate2 = yield updateTag2Service.execute({
                tag2_id,
                tagName2,
            });
            return res.json(tagUpdate2);
        });
    }
}
exports.UpdateTag2Controller = UpdateTag2Controller;
