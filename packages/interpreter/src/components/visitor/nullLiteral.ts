import Visitor from ".";
import { ASTNode } from "bro-code-parser";

export default class NullLiteral implements Visitor {
  visitNode(node: ASTNode) {
    return node.value;
  }
}
