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
exports.UpdateTag3Controller = void 0;
const UpdateTag3Service_1 = require("../../services/tag3/UpdateTag3Service");
class UpdateTag3Controller {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const tag3_id = req.query.tag3_id;
            const { tagName3 } = req.body;
            const updateTag3Service = new UpdateTag3Service_1.UpdateTag3Service();
            const tagUpdate3 = yield updateTag3Service.execute({
                tag3_id,
                tagName3,
            });
            return res.json(tagUpdate3);
        });
    }
}
exports.UpdateTag3Controller = UpdateTag3Controller;
