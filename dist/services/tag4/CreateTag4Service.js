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
exports.CreateTag4Service = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class CreateTag4Service {
    execute({ tagName4, name }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (tagName4 === '') {
                throw new Error('tagName4 invalid');
            }
            const tag4 = yield prisma_1.default.tag4.create({
                data: {
                    tagName4: tagName4,
                    name: name
                },
                select: {
                    id: true,
                    tagName4: true
                }
            });
            return tag4;
        });
    }
}
exports.CreateTag4Service = CreateTag4Service;
