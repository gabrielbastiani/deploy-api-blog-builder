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
exports.Tag2AllController = void 0;
const Tag2AllService_1 = require("../../services/tag2/Tag2AllService");
class Tag2AllController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const tag2_id = req.query.tag2_id;
            const listAllTag2 = new Tag2AllService_1.Tag2AllService();
            const tag2 = yield listAllTag2.execute({
                tag2_id
            });
            return res.json(tag2);
        });
    }
}
exports.Tag2AllController = Tag2AllController;
