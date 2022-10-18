"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateToString = void 0;
const dateToString = (date, withTime = false) => {
    const time = date;
    if (withTime) {
        return time.substring(0, 19);
    }
    return time.substring(0, 10);
};
exports.dateToString = dateToString;
