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
exports.Tag3AllController = void 0;
const Tag3AllService_1 = require("../../services/tag3/Tag3AllService");
class Tag3AllController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const tag3_id = req.query.tag3_id;
            const listAllTag3 = new Tag3AllService_1.Tag3AllService();
            const tag3 = yield listAllTag3.execute({
                tag3_id
            });
            return res.json(tag3);
        });
    }
}
exports.Tag3AllController = Tag3AllController;
