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
exports.ListTag1Controller = void 0;
const ListTag1Service_1 = require("../../services/tag1/ListTag1Service");
class ListTag1Controller {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listTag1Service = new ListTag1Service_1.ListTag1Service();
            const tag1 = yield listTag1Service.execute();
            return res.json(tag1);
        });
    }
}
exports.ListTag1Controller = ListTag1Controller;
