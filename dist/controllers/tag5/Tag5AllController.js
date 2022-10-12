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
exports.Tag5AllController = void 0;
const Tag5AllService_1 = require("../../services/tag5/Tag5AllService");
class Tag5AllController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const tag5_id = req.query.tag5_id;
            const listAllTag5 = new Tag5AllService_1.Tag5AllService();
            const tag5 = yield listAllTag5.execute({
                tag5_id
            });
            return res.json(tag5);
        });
    }
}
exports.Tag5AllController = Tag5AllController;
