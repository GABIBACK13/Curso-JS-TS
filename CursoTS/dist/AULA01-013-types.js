"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (txt, color, number, options) => {
    if (options === null || options === void 0 ? void 0 : options.replace) {
        txt.replace(options.replace.text, options.replace.replacement);
    }
    if (options === null || options === void 0 ? void 0 : options.log)
        console.log(`\n txt: ${txt} \n color: ${color} \n `);
    if (number)
        return number[0] + number[1];
    return (options === null || options === void 0 ? void 0 : options.forceSum) && !number ? txt.length + random(0, 10) : 0;
};
const random = (min, max) => {
    return Math.floor(Math.random() * max + min);
};
