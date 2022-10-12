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
exports.UserUpdateService = void 0;
const client_1 = require("@prisma/client");
const prisma_1 = __importDefault(require("../../prisma"));
class UserUpdateService {
    execute({ user_id, name, email, photo }) {
        return __awaiter(this, void 0, void 0, function* () {
            const userUpdated = yield prisma_1.default.user.update({
                where: {
                    id: String(user_id),
                },
                data: {
                    name: name,
                    email: email,
                    photo: photo,
                    role: client_1.Role.USER
                },
                select: {
                    id: true,
                    photo: true,
                    name: true,
                    email: true,
                    role: true
                }
            });
            return userUpdated;
        });
    }
}
exports.UserUpdateService = UserUpdateService;
