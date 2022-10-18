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
exports.CreateTag5Service = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class CreateTag5Service {
    execute({ tagName5, name }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (tagName5 === '') {
                throw new Error('tagName5 invalid');
            }
            const tag5 = yield prisma_1.default.tag5.create({
                data: {
                    tagName5: tagName5,
                    name: name
                },
                select: {
                    id: true,
                    tagName5: true
                }
            });
            return tag5;
        });
    }
}
exports.CreateTag5Service = CreateTag5Service;
