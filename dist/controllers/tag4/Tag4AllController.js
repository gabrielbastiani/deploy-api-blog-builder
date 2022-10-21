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
exports.Tag4AllController = void 0;
const Tag4AllService_1 = require("../../services/tag4/Tag4AllService");
class Tag4AllController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const tag4_id = req.query.tag4_id;
            const listAllTag4 = new Tag4AllService_1.Tag4AllService();
            const tag4 = yield listAllTag4.execute({
                tag4_id
            });
            return res.json(tag4);
        });
    }
}
exports.Tag4AllController = Tag4AllController;
