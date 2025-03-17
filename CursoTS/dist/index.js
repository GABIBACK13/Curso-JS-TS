"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const helloFunc_1 = __importDefault(require("./helloFunc"));
const AULA01_013_types_1 = __importDefault(require("./AULA01-013-types"));
(0, helloFunc_1.default)("Hello World");
(0, AULA01_013_types_1.default)("Javascript is a bad language and Typescript fix the problems", "red", [10, 5], {
    log: true,
    forceSum: false,
    replace: { text: "fix", replacement: "try to fix" },
});
