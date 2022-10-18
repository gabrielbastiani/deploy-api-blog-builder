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
exports.UpdateTag5Controller = void 0;
const UpdateTag5Service_1 = require("../../services/tag5/UpdateTag5Service");
class UpdateTag5Controller {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const tag5_id = req.query.tag5_id;
            const { tagName5 } = req.body;
            const updateTag5Service = new UpdateTag5Service_1.UpdateTag5Service();
            const tagUpdate5 = yield updateTag5Service.execute({
                tag5_id,
                tagName5,
            });
            return res.json(tagUpdate5);
        });
    }
}
exports.UpdateTag5Controller = UpdateTag5Controller;
