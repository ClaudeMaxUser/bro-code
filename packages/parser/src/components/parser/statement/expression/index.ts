import { NodeType } from "../../../../constants/constants";
import BroCodeModule from "../../../../module/broCodeModule";
import TokenExecutor from "../../tokenExecutor";
import { ASTNode } from "../../types/nodeTypes";


export default abstract class Expression {
  protected _tokenExecutor: TokenExecutor;

  constructor(tokenExecutor: TokenExecutor) {
    this._tokenExecutor = tokenExecutor;
  }

  abstract getExpression(): ASTNode;

  static getExpressionImpl(expressionType: keyof typeof NodeType): Expression {
    switch (expressionType) {
      case NodeType.AdditiveExpression:
        return BroCodeModule.getAdditiveExpression();

      case NodeType.MultiplicativeExpression:
        return BroCodeModule.getMultiplicativeExpression();

      case NodeType.PrimaryExpression:
        return BroCodeModule.getPrimaryExpression();

      case NodeType.ParanthesizedExpression:
        return BroCodeModule.getParanthesizedExpression();

      case NodeType.AssignmentExpression:
        return BroCodeModule.getAssignmentExpression();

      case NodeType.EqualityExpression:
        return BroCodeModule.getEqualityExpression();

      case NodeType.LogicalANDExpression:
        return BroCodeModule.getLogicalANDExpression();

      case NodeType.LogicalORExpression:
        return BroCodeModule.getLogicalORExpression();

      case NodeType.RelationalExpression:
        return BroCodeModule.getRelationalExpression();

      default:
        return BroCodeModule.getIndentifierExpression();
    }
  }

  protected getBinaryExpression(
    downstreamExpressionType: keyof typeof NodeType,
    operatorToken: string
  ) {
    return this._getExpression(downstreamExpressionType, operatorToken, NodeType.BinaryExpression);
  }

  protected getLogicalExpression(
    downstreamExpressionType: keyof typeof NodeType,
    operatorToken: string
    ) {
    return this._getExpression(downstreamExpressionType, operatorToken, NodeType.LogicalExpression);
  }

  private _getExpression(
    downstreamExpressionType: keyof typeof NodeType,
    operatorToken: string,
    expressionType: keyof typeof NodeType
    ) {
    let left = Expression.getExpressionImpl(downstreamExpressionType).getExpression();

    while (this._tokenExecutor.getLookahead()?.type === operatorToken) {
      const operator =
        this._tokenExecutor.eatTokenAndForwardLookahead(operatorToken);
      const right =
        Expression.getExpressionImpl(downstreamExpressionType).getExpression();

      left = {
        type: expressionType,
        operator: operator.value,
        left,
        right,
      };
    }

    return left;
  }

}
