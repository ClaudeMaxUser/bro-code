import { TokenTypes } from "../../../../../constants/broCodeSpec";
import UnsupportedTypeException from "../../../../../exceptions/unsupportedTypeException";
import BroCodeModule from "../../../../../module/broCodeModule";
import TokenExecutor from "../../../tokenExecutor";
import { ASTNode } from "../../../types/nodeTypes";

export default abstract class Literal {
  protected _tokenExecutor: TokenExecutor;

  constructor(tokenExecutor: TokenExecutor) {
    this._tokenExecutor = tokenExecutor;
  }

  abstract getLiteral(): ASTNode;

  static getLiteralImpl(tokenType?: string): Literal {
    switch (tokenType) {
      case TokenTypes.NUMBER_TYPE:
        return BroCodeModule.getNumericLiteral();

      case TokenTypes.BOOLEAN_TYPE:
        return BroCodeModule.getBooleanLiteral();

      case TokenTypes.STRING_TYPE:
        return BroCodeModule.getStringLiteral();

      case TokenTypes.NULL_LITERAL_TYPE:
        return BroCodeModule.getNullLiteral();

      default:
        throw new UnsupportedTypeException(
          `Token type not supproted for literal: ${tokenType}`
        );
    }
  }
}
