import { TokenTypes } from "../../../constants/bhaiLangSpec";
import BroLangModule from "../../../module/broLangModule";
import { Token } from "../../tokenizer/types";
import TokenExecutor from "../tokenExecutor";
import { ASTNode } from "../types/nodeTypes";


export default abstract class Statement {
  protected _tokenExecutor: TokenExecutor;

  constructor(tokenExecutor: TokenExecutor) {
    this._tokenExecutor = tokenExecutor;
  }

  abstract getStatement(): ASTNode;

  static getStatementImpl(lookahead: Token): Statement {
    switch (lookahead.type) {
      case TokenTypes.PRINT_TYPE:
        return BroLangModule.getPrintStatement();

      case TokenTypes.SEMI_COLON_TYPE:
        return BroLangModule.getEmptyStatement();

      case TokenTypes.OPEN_CURLY_BRACE_TYPE:
        return BroLangModule.getBlockStatement();

      case TokenTypes.VAR_DECL_TYPE:
        return BroLangModule.getVariableStatement();

      case TokenTypes.IF_TYPE:
        return BroLangModule.getIfStatement();

      case TokenTypes.WHILE_TYPE:
        return BroLangModule.getWhileStatement();

      case TokenTypes.BREAK_TYPE:
        return BroLangModule.getBreakStatement();
      
      case TokenTypes.CONTINUE_TYPE:
        return BroLangModule.getContinueStatement();

      default:
        return BroLangModule.getExpressionStatement();
    }
  }
}
