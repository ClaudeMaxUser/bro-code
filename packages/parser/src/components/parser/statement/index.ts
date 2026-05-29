import { TokenTypes } from "../../../constants/broCodeSpec";
import BroCodeModule from "../../../module/broCodeModule";
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
        return BroCodeModule.getPrintStatement();

      case TokenTypes.SEMI_COLON_TYPE:
        return BroCodeModule.getEmptyStatement();

      case TokenTypes.OPEN_CURLY_BRACE_TYPE:
        return BroCodeModule.getBlockStatement();

      case TokenTypes.VAR_DECL_TYPE:
        return BroCodeModule.getVariableStatement();

      case TokenTypes.IF_TYPE:
        return BroCodeModule.getIfStatement();

      case TokenTypes.WHILE_TYPE:
        return BroCodeModule.getWhileStatement();

      case TokenTypes.BREAK_TYPE:
        return BroCodeModule.getBreakStatement();
      
      case TokenTypes.CONTINUE_TYPE:
        return BroCodeModule.getContinueStatement();

      default:
        return BroCodeModule.getExpressionStatement();
    }
  }
}
