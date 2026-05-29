import { RuntimeException } from "../../src";
import Interpreter from "../../src/components/interpreter";
import InterpreterModule from "../../src/module/interpreterModule";

import { NegativeTestCases } from "./negativeTestsProvider";
import {
  NoOutputPositiveTests,
  WithOutputPositiveTests
} from "./positiveTestsProvider";


let interpreter: Interpreter = InterpreterModule.getInterpreter();

console.log = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
});

NoOutputPositiveTests.forEach((testCase) => {
  test(testCase.name, () => {
    expect(() => interpreter.interpret(testCase.input)).not.toThrowError();
  });
});

WithOutputPositiveTests.forEach((testCase) => {
  test(testCase.name, () => {
    expect(() => interpreter.interpret(testCase.input)).not.toThrowError();

    expect(console.log).toHaveBeenCalledWith(testCase.output);
  });
});

NegativeTestCases.forEach((testCase) => {
  test(testCase.name, () => {
    expect(() => interpreter.interpret(testCase.input)).toThrowError(
      testCase.exception
    );
  });
});

test("test redeclaring & printing variables in different scopes", () => {
  expect(() =>
    interpreter.interpret(`hi bro;
    bro this is a = 4;
    {
      bro this is a = 90;
      say bro a;
    }
    say bro a;
    bye bro;`)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("90");
  expect(console.log).toHaveBeenCalledWith("4");
});

test("test assigning variable in parent scope", () => {
  expect(() =>
    interpreter.interpret(`hi bro;
    bro this is a = 4;
    {
      a = 90;
      say bro a;
    }
    say bro a;
    bye bro;`)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("90");
  expect(console.log).toHaveBeenCalledWith("90");
});

test("test accessing variable in parent scope", () => {
  expect(() =>
    interpreter.interpret(`hi bro;
    bro this is a = 4;
    {
      say bro a;
    }
    say bro a;
    bye bro;`)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("4");
  expect(console.log).toHaveBeenCalledWith("4");
});

test("whileStatement test with 2 times loop, should success", () => {
  expect(() =>
    interpreter.interpret(`
    hi bro;
    bro this is a = 0;
    while bro (a < 2) {
      say bro "bro";
      a += 1;
    }
    bye bro;`)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("bro");
  expect(console.log).toHaveBeenCalledWith("bro");
});

test("whileStatement test with nested loops - 2, should success", () => {
  expect(() =>
    interpreter.interpret(`
    hi bro;
    bro this is a = 0, b = 0;
    while bro (a < 2) {
      while bro (b < 1) {
        say bro "bro";
        b += 1;
      }
      a += 1;
    }
    bye bro;
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("bro");
});

test("whileStatement test with nested loops - 3, should success", () => {
  expect(() =>
    interpreter.interpret(`
    hi bro;
    bro this is a = 0;
    while bro (a < 2) {
      bro this is b = 0;
      while bro (b < 2) {
        say bro "bro";
        b += 1;
        if bro (b == 1)
          stop bro;
      }
      a += 1;
    }
    bye bro;
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("bro");
  expect(console.log).toHaveBeenCalledWith("bro");
});


test("whileStatement test with nested loops - 4, should success", () => {
  expect(() =>
    interpreter.interpret(`
    hi bro
    bro this is a = 0;
    while bro (a < 10) {
      say bro a;
      a += 1;
      if bro (a == 6) {
        stop bro;
      }
    }
    say bro "done";
    bye bro
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("0");
  expect(console.log).toHaveBeenCalledWith("1");
  expect(console.log).toHaveBeenCalledWith("2");
  expect(console.log).toHaveBeenCalledWith("3");
  expect(console.log).toHaveBeenCalledWith("4");
  expect(console.log).toHaveBeenCalledWith("5");
});

test("whileStatement test with nested loops - 5, should success", () => {
  expect(() =>
    interpreter.interpret(`
    hi bro
    bro this is a = 0;
    while bro (a < 10) {
      say bro a;
      a += 1;
      if bro (a == 6)
        stop bro;
    }
    say bro "done";
    bye bro
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("0");
  expect(console.log).toHaveBeenCalledWith("1");
  expect(console.log).toHaveBeenCalledWith("2");
  expect(console.log).toHaveBeenCalledWith("3");
  expect(console.log).toHaveBeenCalledWith("4");
  expect(console.log).toHaveBeenCalledWith("5");
});

test("whileStatement test with nested loops - 6, should success", () => {
  expect(() =>
    interpreter.interpret(`
    hi bro
    bro this is a = 0;
    while bro (a < 10) {
      say bro a;
      a += 1;
      if bro (a == 3) {
        stop bro;
      }
      say bro "only prints twice";
    }
    say bro "done";
    bye bro
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("0");
  expect(console.log).toHaveBeenCalledWith("1");
  expect(console.log).toHaveBeenCalledWith("2");
  expect(console.log).toHaveBeenCalledWith("only prints twice");
  expect(console.log).toHaveBeenCalledWith("only prints twice");
});

test("whileStatement test with infinite loop, should throw runtime exception after 5000 executions", () => {
  expect(() =>
    interpreter.interpret(`
    hi bro
    
    while bro (yep) {
      say bro "bro";
    }
    bye bro;
    
    `)
  ).toThrowError(RuntimeException);

  expect(console.log).toHaveBeenCalledTimes(5001);
  expect(console.log).toHaveBeenCalledWith("bro");
});

test("if-else ladders one after the other, should be evaluated separately", () => {
  expect(() =>
    interpreter.interpret(`
    hi bro
    bro this is x = 6;
    if bro (x < 5) {
      say bro "x < 5";
    } else if bro (x < 8) {
      say bro "x < 8";
    } if bro (x < 4) {
      say bro "x < 4";
    } else bro {
      say bro "x > 4";
    }
    bye bro;
    
    `)
  ).not.toThrowError();

  expect(console.log).toHaveBeenCalledWith("x < 8");
  expect(console.log).toHaveBeenCalledWith("x > 4");
});

// test("jest", () => {
//     interpreter.interpret(`
//     hi bro
//     bro this is a = 0;
//     while bro (a < 10) {
//       say bro a;
//       a += 1;
//       if bro (a == 3) {
//         stop bro;
//       }
//       say bro "only prints twice";
//     }
//     say bro "done";
//     bye bro
//     `);
// });
