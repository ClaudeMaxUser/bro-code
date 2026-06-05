import { ASTNode } from "bro-code-parser";

export default interface Visitor {
  visitNode(node: ASTNode): unknown;
}
