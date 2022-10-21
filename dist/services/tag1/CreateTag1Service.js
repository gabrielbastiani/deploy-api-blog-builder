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
exports.CreateTag1Service = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class CreateTag1Service {
    execute({ tagName1, name }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (tagName1 === '') {
                throw new Error('tagName1 invalid');
            }
            const tag1 = yield prisma_1.default.tag1.create({
                data: {
                    tagName1: tagName1,
                    name: name
                },
                select: {
                    id: true,
                    tagName1: true
                }
            });
            return tag1;
        });
    }
}
exports.CreateTag1Service = CreateTag1Service;
