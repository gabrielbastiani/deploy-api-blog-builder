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
exports.UpdateUserController = void 0;
const UserUpdateService_1 = require("../../services/user/UserUpdateService");
class UpdateUserController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, user_id, role } = req.body;
            const updateUserService = new UserUpdateService_1.UserUpdateService();
            if (!req.file) {
                throw new Error('error upload file');
            }
            else {
                const { originalname, filename: photo } = req.file;
                const userUpdated = yield updateUserService.execute({
                    user_id,
                    name,
                    email,
                    photo,
                    role
                });
                return res.json(userUpdated);
            }
        });
    }
}
exports.UpdateUserController = UpdateUserController;
