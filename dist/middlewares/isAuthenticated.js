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
exports.isAuthenticated = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
function isAuthenticated(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        // Receber o token
        const authToken = req.headers.authorization;
        if (!authToken) {
            return res.status(401).end();
        }
        const [, token] = authToken.split(" ");
        try {
            //Validar esse token.
            const { sub } = (0, jsonwebtoken_1.verify)(token, process.env.JWT_SECRET);
            //Recuperar o id do token e colocar dentro de uma variavel user_id dentro do req.
            req.user_id = sub;
            return next();
        }
        catch (err) {
            return res.status(401).end();
        }
    });
}
exports.isAuthenticated = isAuthenticated;
