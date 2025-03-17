import say from "./helloFunc";
import workWithTypes from "./AULA01-013-types";

say("Hello World");
console.log(
  workWithTypes(
    "Javascript is a bad language and Typescript fix the problems",
    "red",
    1,
    [10, -8],
    {
      log: true,
      forceSum: true,
      replace: { text: "fix", replacement: "try to fix" },
    },
  ),
);
