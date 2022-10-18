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
exports.CreateTag3Service = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class CreateTag3Service {
    execute({ tagName3, name }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (tagName3 === '') {
                throw new Error('tagName3 invalid');
            }
            const tag3 = yield prisma_1.default.tag3.create({
                data: {
                    tagName3: tagName3,
                    name: name
                },
                select: {
                    id: true,
                    tagName3: true
                }
            });
            return tag3;
        });
    }
}
exports.CreateTag3Service = CreateTag3Service;
