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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTag2Service = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class UpdateTag2Service {
    execute({ tag2_id, tagName2 }) {
        return __awaiter(this, void 0, void 0, function* () {
            const updateTag2 = yield prisma_1.default.tag2.update({
                where: {
                    id: String(tag2_id)
                },
                data: {
                    tagName2: tagName2,
                },
                select: {
                    id: true,
                    tagName2: true,
                }
            });
            return updateTag2;
        });
    }
}
exports.UpdateTag2Service = UpdateTag2Service;
