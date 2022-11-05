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
exports.UpdateTag4Controller = void 0;
const UpdateTag4Service_1 = require("../../services/tag4/UpdateTag4Service");
class UpdateTag4Controller {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const tag4_id = req.query.tag4_id;
            const { tagName4 } = req.body;
            const updateTag4Service = new UpdateTag4Service_1.UpdateTag4Service();
            const tagUpdate4 = yield updateTag4Service.execute({
                tag4_id,
                tagName4,
            });
            return res.json(tagUpdate4);
        });
    }
}
exports.UpdateTag4Controller = UpdateTag4Controller;
