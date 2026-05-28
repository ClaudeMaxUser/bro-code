import { RuntimeException } from "../../src";
import NallaPointerException from "../../src/exceptions/nallaPointerException";


export const NegativeTestCases = [
  {
    name: "interpreter assigning variable before declaration test, should throw an exception",
    input: `
          hi bro;
          a = 4;
          bye bro;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test with addition, should throw an exception",
    input: `
          hi bro;
          a += 4;
          bye bro;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test with subtraction, should throw an exception",
    input: `
          hi bro;
          a -= 4;
          bye bro;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test with multiplication, should throw an exception",
    input: `
          hi bro;
          a -= 4;
          bye bro;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test with division, should throw an exception",
    input: `
          hi bro;
          a /= 4;
          bye bro;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test - 2, should throw an exception",
    input: `
          hi bro;
          a;
          bye bro;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter adding two variables before declaration test, should throw an exception",
    input: `
          hi bro;
          a + b;
          bye bro;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter adding variable with constant before declaration test, should throw an exception",
    input: `
          hi bro;
          a + 4;
          bye bro;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter subtracting variable with constant before declaration test, should throw an exception",
    input: `
          hi bro;
          a - 4;
          bye bro;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter subtracting two variables before declaration test, should throw an exception",
    input: `
          hi bro;
          a - b;
          bye bro;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter multiplying variable with constant before declaration test, should throw an exception",
    input: `
          hi bro;
          a * 4;
          bye bro;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter multiplying two variables before declaration test, should throw an exception",
    input: `
          hi bro;
          a * b;
          bye bro;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter dividing variable with constant before declaration test, should throw an exception",
    input: `
          hi bro;
          a / 4;
          bye bro;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter dividing two variables before declaration test, should throw an exception",
    input: `
          hi bro;
          a / b;
          bye bro;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter printing variable before declaration test, should throw an exception",
    input: `
          hi bro;
          say bro a;
          bye bro;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter printing multiple variables before declaration test, should throw an exception",
    input: `
          hi bro;
          say bro a, b;
          bye bro;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter printing multiple variables with only one of them declared, should throw an exception",
    input: `
          hi bro;
          bro this is a = 8;
          say bro a, b;
          bye bro;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter declaring multiple variables with chain assignment, should throw an exception",
    input: `
          hi bro;
          bro this is a = b = 8;
          bye bro;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter re declare already declared variable, should throw an exception",
    input: `
        hi bro;
        bro this is a;
        a = 9;
        bro this is a = 0;
        bye bro;
      `,
    exception: RuntimeException,
  },
  // cases with nope
  {
    name: "interpreter use nope variable in expression, should throw an exception",
    input: `
      hi bro;
      bro this is a;
      say bro a + 9;
      bye bro;
    `,
    exception: NallaPointerException,
  },
  {
    name: "interpreter use nope variable in expression - 2, should throw an exception",
    input: `
      hi bro;
      bro this is a = nope;
      say bro a + 9;
      bye bro;
    `,
    exception: NallaPointerException,
  },
  {
    name: "interpreter use nope in variable initialisation expression, should throw an exception",
    input: `
      hi bro;
      bro this is a = nope + 80;
      bye bro;
    `,
    exception: NallaPointerException,
  },
  {
    name: "interpreter use nope in variable initialisation expression - 2, should throw an exception",
    input: `
      hi bro;
      bro this is a = nope + "jam";
      bye bro;
    `,
    exception: NallaPointerException,
  },
  {
    name: "interpreter use nope variable in another variable initialisation expression, should throw an exception",
    input: `
      hi bro;
      bro this is a;
      bro this is b = a + "hello";
      bye bro;
    `,
    exception: NallaPointerException,
  },
  {
    name: "interpreter use nope variable in complex expression, should throw an exception",
    input: `
      hi bro;
      bro this is a;
      bro this is b = ((a*9) * a + "hello");
      bye bro;
    `,
    exception: NallaPointerException,
  },
  // yep - nah case
  {
    name: "interpreter use yep variable in expression, should throw an exception",
    input: `
      hi bro;
      bro this is a = yep;
      say bro a + 9;
      bye bro;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use nah variable in expression, should throw an exception",
    input: `
      hi bro;
      bro this is a = nah;
      say bro a + 9;
      bye bro;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use yep in variable initialisation expression, should throw an exception",
    input: `
      hi bro;
      bro this is a = yep + 80;
      bye bro;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use nah in variable initialisation expression, should throw an exception",
    input: `
      hi bro;
      bro this is a = nah + 80;
      bye bro;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use yep variable in another variable initialisation expression, should throw an exception",
    input: `
      hi bro;
      bro this is a = yep;
      bro this is b = a + "hello";
      bye bro;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use nah variable in complex expression, should throw an exception",
    input: `
      hi bro;
      bro this is a = nah;
      bro this is b = ((a*9) * a + "hello");
      bye bro;
    `,
    exception: RuntimeException,
  },
  // ##########

  {
    name: "complex expression test with one null operand, should throw an exception",
    input: `
        hi bro
        (nope * (4 + 8 + 10));
        bye bro
      `,
    output: NallaPointerException,
  },
  {
    name: "complex expression test with one null operand and one boolean operand, should throw an exception",
    input: `
        hi bro
        (nope * (yep + 8 + 10));
        bye bro
      `,
    output: RuntimeException,
  },
  {
    name: "complex expression test with one null operand and one boolean operand - 2, should throw nope pointer exception",
    input: `
        hi bro
        (yep * (nope + 8 + 10));
        bye bro
      `,
    output: NallaPointerException,
  },
  {
    name: "complex expression test with one null operand and one boolean operand - 3, should throw nope pointer exception",
    input: `
        hi bro
        (nope + yep);
        bye bro
      `,
    output: NallaPointerException,
  },
  {
    name: "complex expression test with one boolean operand, should throw an exception",
    input: `
        hi bro
        (yep * (4 + 8 + 10));
        bye bro
      `,
    output: RuntimeException,
  },
  {
    name: "additive expression test with only boolean operand, should throw an exception",
    input: `
        hi bro
        yep + nah;
        bye bro
      `,
    output: RuntimeException,
  },
  {
    name: "additive expression test with only variable boolean operand, should throw an exception",
    input: `
        hi bro
        bro this is a = yep, b = nah;
        a + b;
        bye bro
      `,
    output: RuntimeException,
  },
  {
    name: "multiplicative expression test with only boolean operand, should throw an exception",
    input: `
        hi bro
        yep * nah;
        bye bro
      `,
    output: RuntimeException,
  },
  {
    name: "multiplicative expression test with only variable boolean operand, should throw an exception",
    input: `
        hi bro
        bro this is a = yep, b = nah;
        a * b;
        bye bro
      `,
    output: RuntimeException,
  },
  {
    name: "division expression test with only boolean operand, should throw an exception",
    input: `
        hi bro
        yep / nah;
        bye bro
      `,
    output: RuntimeException,
  },
  {
    name: "division expression test with only variable boolean operand, should throw an exception",
    input: `
        hi bro
        bro this is a = yep, b = nah;
        a / b;
        bye bro
      `,
    output: RuntimeException,
  },
  {
    name: "print statement test with expression containing nope, should throw an exception",
    input: `
        hi bro
        say bro nope + 5;
        bye bro;
      `,
    output: NallaPointerException,
  },
  {
    name: "complex assign test with expression containing nope, should throw an exception",
    input: `
        hi bro
        bro this is a;
        a *= 5;
        bye bro;
      `,
    output: NallaPointerException,
  },
  {
    name: "complex assign test with expression containing yep, should throw an exception",
    input: `
        hi bro
        bro this is a = yep;
        a *= 5;
        bye bro;
      `,
    output: NallaPointerException,
  },
  {
    name: "complex assign test with expression containing nope - 2, should throw an exception",
    input: `
        hi bro
        bro this is a = nope;
        a /= 5;
        bye bro;
      `,
    output: NallaPointerException,
  },
  // while loop negative tests
  {
    name: "infinite while loop, should throw an exception",
    input: `
        hi bro
        while bro (yep) {

        }
        bye bro;
      `,
    output: RuntimeException,
  },
  {
    name: "infinite condition while loop, should throw an exception",
    input: `
        hi bro
        bro this is a = 0;
        while bro (a < 2) {
          say bro "bro";
        }
        bye bro;
      `,
    output: RuntimeException,
  },
  {
    name: "invalid use of break, should throw an exception",
    input: `
        hi bro
        bro this is a = 0;
        if bro (yep)
          stop bro;
        bye bro;
      `,
    output: RuntimeException,
  },
  // logical expression negative tests
  {
    name: "use of nope with &&, should throw an exception",
    input: `
        hi bro
        say bro nope && 90;
        bye bro;
      `,
    output: NallaPointerException,
  },
  {
    name: "use of nope variable with &&, should throw an exception",
    input: `
        hi bro
        bro this is a;
        say bro a && 90;
        bye bro;
      `,
    output: NallaPointerException,
  },
  // modulus operator test
  {
    name: `modulus operator test with invalid operand, should throw an exception`,
    input: `
      hi bro;
      say bro "yep" % 9;
      bye bro;
    `,
    output: RuntimeException,
  },
  // continue in loop test
  {
    name: "infinite condition while loop with continue, should throw an exception",
    input: `
        hi bro
        bro this is a = 0;
        while bro (a < 2) {
          next bro;
          a = 5;
        }
        bye bro;
      `,
    output: RuntimeException,
  },
  {
    name: "invalid use of continue, should throw an exception",
    input: `
        hi bro
        bro this is a = 0;
        if bro (yep)
          next bro
        bye bro;
      `,
    output: RuntimeException,
  },
];
