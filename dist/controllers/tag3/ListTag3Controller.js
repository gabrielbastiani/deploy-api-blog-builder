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
exports.ListTag3Controller = void 0;
const ListTag3Service_1 = require("../../services/tag3/ListTag3Service");
class ListTag3Controller {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listTag3Service = new ListTag3Service_1.ListTag3Service();
            const tag3 = yield listTag3Service.execute();
            return res.json(tag3);
        });
    }
}
exports.ListTag3Controller = ListTag3Controller;
