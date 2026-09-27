import Visitor from ".";
import { ASTNode, NodeType } from "bro-code-parser";

import InvalidStateException from "../../exceptions/invalidStateException";
import NullPointerException from "../../exceptions/nullPointerException";
import RuntimeException from "../../exceptions/runtimeException";
import { getOperationValue } from "../../helpers";
import InterpreterModule from "../../module/interpreterModule";


export default class BinaryExpression implements Visitor {
  visitNode(node: ASTNode) {
    if (!node.left || !node.right || !node.operator) {
      throw new InvalidStateException(
        `Left , right or operator not found for: ${node.type}`
      );
    }

    let left, right;

    // handling logical & binary both at the same place as both operate on two operands
    if (node.type == NodeType.BinaryExpression) {
      if (node.operator !== "==" && node.operator !== "!=") {
        this._checkNull(node);
        this._checkBoolean(node);
      } 
      left = this._getNodeValue(node.left);
      right = this._getNodeValue(node.right);
    } else if (node.type == NodeType.LogicalExpression) {
      this._checkNull(node);

      left = node.left.type == NodeType.BooleanLiteral ? (node.left.value == "yep" ? true : false) : InterpreterModule.getVisitor(node.left.type).visitNode(
        node.left
      );

      right = node.right.type == NodeType.BooleanLiteral ? (node.right.value == "yep" ? true : false) : InterpreterModule.getVisitor(node.right.type).visitNode(
        node.right
      );

    }
    return getOperationValue({ left, right }, node.operator);
  }

  private _checkNull(node: ASTNode) {
    if (!node.left || !node.right || !node.operator) {
      throw new InvalidStateException(
        `Left , right or operator not found for: ${node.type}`
      );
    }

    const nullException = new NullPointerException(
      `Null operand doesn't work with "${node.operator}"`
    );

    if (
      node.left.type === NodeType.NullLiteral ||
      node.right.type === NodeType.NullLiteral
    )
      throw nullException;

    if (node.left.type === NodeType.IdentifierExpression && node.left.name) {
      const value = InterpreterModule.getCurrentScope().get(node.left.name);
      if (value === null) throw nullException;
    }

    if (node.right.type === NodeType.IdentifierExpression && node.right.name) {
      const value = InterpreterModule.getCurrentScope().get(node.right.name);
      if (value === null) throw nullException;
    }
  }

  private _checkBoolean(node: ASTNode) {

    if (!node.left || !node.right || !node.operator) {
      throw new InvalidStateException(
        `Left , right or operator not found for: ${node.type}`
      );
    }

    const runtimeException = new RuntimeException(
      `What are you doing bro??..Boolean operand doesn't work with "${node.operator}"`
    );

    if (
      node.left.type === NodeType.BooleanLiteral ||
      node.right.type === NodeType.BooleanLiteral
    )
      throw runtimeException;

    if (node.left.type === NodeType.IdentifierExpression && node.left.name) {
      const value = InterpreterModule.getCurrentScope().get(node.left.name);
      if (value === true || value === false) throw runtimeException;
    }

    if (node.right.type === NodeType.IdentifierExpression && node.right.name) {
      const value = InterpreterModule.getCurrentScope().get(node.right.name);
      if (value === true || value === false) throw runtimeException;
    }
  }

  private _getNodeValue(node: ASTNode) {

    if (node.type === NodeType.NullLiteral)
      return null;

    if (node.type === NodeType.BooleanLiteral) {
      return node.value === "yep" ? true : false;
    }

    if (node.type === NodeType.IdentifierExpression && node.name)
      return InterpreterModule.getCurrentScope().get(node.name);

    return InterpreterModule.getVisitor(node.type).visitNode(
      node
    );
  }

}
