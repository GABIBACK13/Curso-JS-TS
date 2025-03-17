export default (
  txt: string,
  color: "red" | "green" | "blue",
  char: Alpha,
  number?: [number, number],
  options?: {
    log?: boolean;
    forceSum?: boolean;
    replace?: {
      text: string;
      replacement: string;
    };
  },
): number => {
  let newTxt: string  | undefined;
  if (options?.replace) {
    console.log(Alpha[char]);
    newTxt = txt.replace(options.replace.text, options.replace.replacement);
  }
  if (options?.log) console.log(`\n txt: ${txt} \n color: ${color} \n `);
  if (options?.log && newTxt) console.log(`\n newTxt: ${newTxt} \n `);

  if (number) return number[0] + number[1];
  return options?.forceSum && !number ? txt.length + random(0, 10) : 0;
};

const random = (min: number, max: number): number => {
  return Math.floor(Math.random() * max + min);
};

enum Alpha {
  "a" = 1,
  "b" = 2,
  "c" = 3,
  "d" = 4,
}
