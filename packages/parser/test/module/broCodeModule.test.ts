import { Parser } from "../../src/components/parser";
import Program from "../../src/components/parser/program";
import TokenExecutor from "../../src/components/parser/tokenExecutor";
import Tokenizer from "../../src/components/tokenizer";
import BroCodeModule from "../../src/module/broCodeModule";

test("test broCodeModule should success", () => {
  expect(BroCodeModule.getTokenizer()).toBeInstanceOf(Tokenizer);
  expect(BroCodeModule.getTokenExecutor()).toBeInstanceOf(TokenExecutor);
  expect(BroCodeModule.getProgram()).toBeInstanceOf(Program);
  expect(BroCodeModule.getParser()).toBeInstanceOf(Parser);
});
