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
exports.ExportNewslatterService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const excel4node_1 = __importDefault(require("excel4node"));
const wb = new excel4node_1.default.Workbook();
const ws = wb.addWorksheet('lista-de-emails');
class ExportNewslatterService {
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            const findAll = yield prisma_1.default.newslatter.findMany({
                select: {
                    nameEmail: true,
                    emailName: true,
                },
                orderBy: {
                    created_at: 'desc'
                }
            });
            const headingColumnNames = [
                "Nome",
                "Email",
            ];
            let headingColumnIndex = 1; //diz que começará na primeira linha
            headingColumnNames.forEach(heading => {
                // cria uma célula do tipo string para cada título
                ws.cell(1, headingColumnIndex++).string(heading);
            });
            let rowIndex = 2; //começa na linha 2
            findAll.forEach(record => {
                let columnIndex = 1; //diz para começar na primeira coluna
                //transforma cada objeto em um array onde cada posição contém as chaves do objeto (name, email)
                Object.keys(record).forEach(columnName => {
                    //cria uma coluna do tipo string para cada item
                    ws.cell(rowIndex, columnIndex++)
                        .string(record[columnName]);
                });
                rowIndex++; //incrementa o contador para ir para a próxima linha
            });
            return wb.write('ListaDeEmails.xlsx');
        });
    }
}
exports.ExportNewslatterService = ExportNewslatterService;
