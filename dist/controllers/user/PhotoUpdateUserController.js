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
exports.PhotoUpdateUserController = void 0;
const PhotoUserUpdateService_1 = require("../../services/user/PhotoUserUpdateService");
class PhotoUpdateUserController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { user_id } = req.body;
            const updateUserService = new PhotoUserUpdateService_1.PhotoUserUpdateService();
            if (!req.file) {
                throw new Error('error upload file');
            }
            else {
                const { originalname, filename: photo } = req.file;
                const userUpdated = yield updateUserService.execute({
                    user_id,
                    photo
                });
                return res.json(userUpdated);
            }
        });
    }
}
exports.PhotoUpdateUserController = PhotoUpdateUserController;
