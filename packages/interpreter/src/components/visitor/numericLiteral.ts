import Visitor from ".";
import { ASTNode } from "bro-code-parser";

export default class NumericLiteral implements Visitor {
  visitNode(node: ASTNode) {
    return node.value;
  }
}
