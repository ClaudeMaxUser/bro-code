import Statement from ".";

import { TokenTypes } from "../../../constants/broCodeSpec";
import { NodeType } from "../../../constants/constants";
import { ASTNode } from "../types/nodeTypes";


export default class BreakStatement extends Statement {
    getStatement(): ASTNode {
        this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.BREAK_TYPE);

        return {
            type: NodeType.BreakStatement
        }
    }
}