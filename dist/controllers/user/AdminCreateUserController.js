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
exports.AdminCreateUserController = void 0;
const AdminCreateUserService_1 = require("../../services/user/AdminCreateUserService");
class AdminCreateUserController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, password } = req.body;
            const adminCreateUserService = new AdminCreateUserService_1.AdminCreateUserService();
            const { originalname, filename: photo } = req.file;
            const user = yield adminCreateUserService.execute({
                photo,
                name,
                email,
                password,
            });
            return res.json(user);
        });
    }
}
exports.AdminCreateUserController = AdminCreateUserController;
