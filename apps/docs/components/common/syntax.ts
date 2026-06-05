import Prism, { languages } from "prismjs";


export const broCodeSyntax = languages.extend("clike", {
  comment: [
    {
      pattern: /(^|[^\\:])\/\/.*/,
      lookbehind: true,
      greedy: true,
    },
    {
      pattern: /\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/,
      lookbehind: true,
      greedy: true,
    },
  ],
  string: {
    pattern: /(["'])((?:\\\1|(?:(?!\1)).)*)(\1)/,
    greedy: true,
  },
  keyword: /\b(?:hi bro|bye bro|say bro|bro this is|nope|if bro|else if bro|else bro|while bro|stop bro|next bro)\b/,
  boolean: /\b(?:yep|nah)\b/,
  number: /(?:(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[-+]?\d+)?)i?/i,
  operator:
    /[*/%^!=]=?|~|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
});

Prism.languages.bhaiLang = broCodeSyntax;
