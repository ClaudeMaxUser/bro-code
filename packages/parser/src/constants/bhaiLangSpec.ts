export const TokenTypes = {
  NULL_TYPE: null,

  HI_BHAI_TYPE: "hi bro",

  BYE_BHAI_TYPE: "bye bro",

  BOL_BHAI_TYPE: "say bro",

  BHAI_YE_HAI_TYPE: "bro this is",

  AGAR_BHAI: "if bro",

  WARNA_BHAI: "else bro",

  NAHI_TO_BHAI: "else if bro",

  JAB_TAK_BHAI: "while bro",

  BAS_KAR_BHAI: "stop bro",

  AGLA_DEKH_BHAI: "next bro",

  NALLA_TYPE: "NOPE",

  SEMI_COLON_TYPE: ";",

  OPEN_CURLY_BRACE_TYPE: "{",

  CLOSED_CURLY_BRACE_TYPE: "}",

  OPEN_PARENTHESIS_TYPE: "(",

  CLOSED_PARENTHESIS_TYPE: ")",

  COMMA_TYPE: ",",

  NUMBER_TYPE: "NUMBER",

  IDENTIFIER_TYPE: "IDENTIFIER",

  SIMPLE_ASSIGN_TYPE: "SIMPLE_ASSIGN",

  COMPLEX_ASSIGN_TYPE: "COMPLEX_ASSIGN",

  ADDITIVE_OPERATOR_TYPE: "ADDITIVE_OPERATOR",

  MULTIPLICATIVE_OPERATOR_TYPE: "MULTIPLICATIVE_OPERATOR",

  RELATIONAL_OPERATOR: "RELATIONAL_OPERATOR",

  EQUALITY_OPERATOR: "EQUALITY_OPERATOR",

  STRING_TYPE: "STRING",

  BOOLEAN_TYPE: "BOOLEAN",

  LOGICAL_AND: "LOGICAL_AND",

  LOGICAL_OR: "LOGICAL_OR"
};

export const SPEC = [
  // Whitespcaes
  { regex: /^\s+/, tokenType: TokenTypes.NULL_TYPE },

  // singke line Comments
  { regex: /^\/\/.*/, tokenType: TokenTypes.NULL_TYPE },

  // multi line comments
  { regex: /^\/\*[\s\S]*?\*\//, tokenType: TokenTypes.NULL_TYPE },

  // Symbols, delimiters
  { regex: /^;/, tokenType: TokenTypes.SEMI_COLON_TYPE },
  { regex: /^\{/, tokenType: TokenTypes.OPEN_CURLY_BRACE_TYPE },
  { regex: /^\}/, tokenType: TokenTypes.CLOSED_CURLY_BRACE_TYPE },
  { regex: /^\(/, tokenType: TokenTypes.OPEN_PARENTHESIS_TYPE },
  { regex: /^\)/, tokenType: TokenTypes.CLOSED_PARENTHESIS_TYPE },
  { regex: /^,/, tokenType: TokenTypes.COMMA_TYPE },

  //Keywords
  { regex: /^\bhi bro\b/, tokenType: TokenTypes.HI_BHAI_TYPE },
  { regex: /^\bbye bro\b/, tokenType: TokenTypes.BYE_BHAI_TYPE },
  { regex: /^\bsay bro\b/, tokenType: TokenTypes.BOL_BHAI_TYPE },
  { regex: /^\bbro this is\b/, tokenType: TokenTypes.BHAI_YE_HAI_TYPE },
  { regex: /^\bif bro\b/, tokenType: TokenTypes.AGAR_BHAI },
  { regex: /^\belse if bro\b/, tokenType: TokenTypes.NAHI_TO_BHAI },
  { regex: /^\belse bro\b/, tokenType: TokenTypes.WARNA_BHAI },
  { regex: /^\bnope\b/, tokenType: TokenTypes.NALLA_TYPE },
  { regex: /^\bwhile bro\b/, tokenType: TokenTypes.JAB_TAK_BHAI },
  { regex: /^\bstop bro\b/, tokenType: TokenTypes.BAS_KAR_BHAI },
  { regex: /^\bnext bro\b/, tokenType: TokenTypes.AGLA_DEKH_BHAI },

  // Number
  { regex: /^[+-]?([\d]*[.])?[\d]+/, tokenType: TokenTypes.NUMBER_TYPE },

  // Boolean
  { regex: /^\byep\b/, tokenType: TokenTypes.BOOLEAN_TYPE },
  { regex: /^\bnah\b/, tokenType: TokenTypes.BOOLEAN_TYPE },

  // Identifier
  { regex: /^\w+/, tokenType: TokenTypes.IDENTIFIER_TYPE },

  // Equality operator: ==, !=
  {regex: /^[=!]=/, tokenType: TokenTypes.EQUALITY_OPERATOR},

  // Assignment operators: =, *=, /=, +=, -=
  { regex: /^=/, tokenType: TokenTypes.SIMPLE_ASSIGN_TYPE },
  { regex: /^[\*\%\/\+\-]=/, tokenType: TokenTypes.COMPLEX_ASSIGN_TYPE },

  // operator
  { regex: /^[+\-]/, tokenType: TokenTypes.ADDITIVE_OPERATOR_TYPE },
  { regex: /^[*\/\%]/, tokenType: TokenTypes.MULTIPLICATIVE_OPERATOR_TYPE },
  {regex: /^[><]=?/, tokenType: TokenTypes.RELATIONAL_OPERATOR},

  // logical operators: &&, ||
  {regex: /^&&/, tokenType: TokenTypes.LOGICAL_AND},
  {regex: /^\|\|/, tokenType: TokenTypes.LOGICAL_OR},

  // String
  { regex: /^"[^"]*"/, tokenType: TokenTypes.STRING_TYPE },
  { regex: /^'[^']*'/, tokenType: TokenTypes.STRING_TYPE },
];

export type Spec = typeof SPEC;
