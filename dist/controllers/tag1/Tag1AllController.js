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
exports.Tag1AllController = void 0;
const Tag1AllService_1 = require("../../services/tag1/Tag1AllService");
class Tag1AllController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const tag1_id = req.query.tag1_id;
            const listAllTag1 = new Tag1AllService_1.Tag1AllService();
            const tag1 = yield listAllTag1.execute({
                tag1_id
            });
            return res.json(tag1);
        });
    }
}
exports.Tag1AllController = Tag1AllController;
