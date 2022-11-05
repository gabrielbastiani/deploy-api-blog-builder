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
exports.ListPageContactFormService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class ListPageContactFormService {
    execute(pageContact = 1, limitContact = 4) {
        return __awaiter(this, void 0, void 0, function* () {
            const skip = limitContact * (pageContact - 1);
            const allContactForm = yield prisma_1.default.contactform.findMany({
                orderBy: {
                    created_at: 'desc'
                }
            });
            const contact = yield prisma_1.default.contactform.findMany({
                skip,
                take: limitContact,
                orderBy: {
                    created_at: 'desc'
                }
            });
            // Retornamos um objeto onde tem a lista e tambem qual numero total de paginas tem com base no limite que recebeu
            const data = {
                contact,
                totalContact: allContactForm.length,
                total_pagesContact: Math.ceil(allContactForm.length / limitContact),
                current_page: pageContact,
            };
            return data;
        });
    }
}
exports.ListPageContactFormService = ListPageContactFormService;
