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
exports.ListTag4Controller = void 0;
const ListTag4Service_1 = require("../../services/tag4/ListTag4Service");
class ListTag4Controller {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listTag4Service = new ListTag4Service_1.ListTag4Service();
            const tag4 = yield listTag4Service.execute();
            return res.json(tag4);
        });
    }
}
exports.ListTag4Controller = ListTag4Controller;
