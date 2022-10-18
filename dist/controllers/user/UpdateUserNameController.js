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
exports.UpdateUserNameController = void 0;
const UserUpdateNameService_1 = require("../../services/user/UserUpdateNameService");
class UpdateUserNameController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user_id = req.query.user_id;
            const { name } = req.body;
            const updateUserService = new UserUpdateNameService_1.UserUpdateNameService();
            const userUpdated = yield updateUserService.execute({
                user_id,
                name,
            });
            return res.json(userUpdated);
        });
    }
}
exports.UpdateUserNameController = UpdateUserNameController;
