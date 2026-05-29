export const TokenTypes = {
  NULL_TYPE: null,

  PROGRAM_START_TYPE: "hi bro",

  PROGRAM_END_TYPE: "bye bro",

  PRINT_TYPE: "say bro",

  VAR_DECL_TYPE: "bro this is",

  IF_TYPE: "if bro",

  ELSE_TYPE: "else bro",

  ELSE_IF_TYPE: "else if bro",

  WHILE_TYPE: "while bro",

  BREAK_TYPE: "stop bro",

  CONTINUE_TYPE: "next bro",

  NULL_LITERAL_TYPE: "NOPE",

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
  { regex: /^\bhi bro\b/, tokenType: TokenTypes.PROGRAM_START_TYPE },
  { regex: /^\bbye bro\b/, tokenType: TokenTypes.PROGRAM_END_TYPE },
  { regex: /^\bsay bro\b/, tokenType: TokenTypes.PRINT_TYPE },
  { regex: /^\bbro this is\b/, tokenType: TokenTypes.VAR_DECL_TYPE },
  { regex: /^\bif bro\b/, tokenType: TokenTypes.IF_TYPE },
  { regex: /^\belse if bro\b/, tokenType: TokenTypes.ELSE_IF_TYPE },
  { regex: /^\belse bro\b/, tokenType: TokenTypes.ELSE_TYPE },
  { regex: /^\bnope\b/, tokenType: TokenTypes.NULL_LITERAL_TYPE },
  { regex: /^\bwhile bro\b/, tokenType: TokenTypes.WHILE_TYPE },
  { regex: /^\bstop bro\b/, tokenType: TokenTypes.BREAK_TYPE },
  { regex: /^\bnext bro\b/, tokenType: TokenTypes.CONTINUE_TYPE },

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
