import Visitor from ".";
import { ASTNode } from "bro-code-parser";

export default class EmptyStatement implements Visitor {
  visitNode(_: ASTNode) {
    return;
  }
}
