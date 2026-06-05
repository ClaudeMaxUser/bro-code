import Visitor from ".";
import { ASTNode } from "bro-code-parser";

export default class BooleanLiteral implements Visitor {
  visitNode(node: ASTNode) {
    return node.value;
  }
}
