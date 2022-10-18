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
exports.ListTag5Controller = void 0;
const ListTag5Service_1 = require("../../services/tag5/ListTag5Service");
class ListTag5Controller {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listTag5Service = new ListTag5Service_1.ListTag5Service();
            const tag5 = yield listTag5Service.execute();
            return res.json(tag5);
        });
    }
}
exports.ListTag5Controller = ListTag5Controller;
