export const NoOutputPositiveTests = [
  // init statement tests
  {
    name: "interpreter empty init statement test, should success",
    input: `
      hi bro
      bye bro
    `,
  },
  {
    name: "interpreter empty init statement test with random charaters initially, should success",
    input: `
      some random characters
      random random random
      hi bro
      bye bro
    `,
  },
  // empty statement tests
  {
    name: "interpreter empty statement test, should success",
    input: `
      hi bro
      ;
      bye bro
    `,
  },
  {
    name: "interpreter multiple empty statements test, should success",
    input: `
      hi bro
      ;
      ;
      ;;
      bye bro
    `,
  },
  // block statement tests
  {
    name: "interpreter block statement test with empty block, should success",
    input: `
      hi bro
      {};
      bye bro
    `,
  },
  {
    name: "interpreter block statement test with variable statement inside, should success",
    input: `
      hi bro
      {
        bro this is a = 4;
      }
      bye bro
    `,
  },
  // variable statement test
  {
    name: "interpreter variable statement test with basic variable declaration, should success",
    input: `
      hi bro
      bro this is a, b, c;
      bye bro
    `,
  },
  {
    name: "interpreter variable statement test with basic variable declaration and initialisation, should success",
    input: `
      hi bro
      bro this is a = 10, b = "crap";
      bye bro
    `,
  },
  {
    name: "interpreter variable statement test with multiple variable initialisation, should success",
    input: `
      hi bro
      bro this is a = 10, b = 5;
      bye bro
    `,
  },
  {
    name: "interpreter variable statement test with variable initialisation with some expression, should success",
    input: `
      hi bro
      bro this is a = 7 + 90;
      bye bro
    `,
  },
  // assignment expression tests
  {
    name: "simple assignment expression test with only one identifer, should success",
    input: `
      hi bro
      bro this is a = yep;
      a = 4;
      bye bro
    `,
  },
  {
    name: "complex assignment expression test with only one identifer, should success",
    input: `
      hi bro
      bro this is a = 2;
      a *= 4;
      bye bro
    `,
  },
  // paranthesized expression tests
  {
    name: "paranthesized expression test with one parenthesis and simple expression, should success",
    input: `
      hi bro
      bro this is a = 2;
      (a + 4);
      bye bro
    `,
  },
  {
    name: "paranthesized expression test with one parenthesis and complex expression, should success",
    input: `
      hi bro
      bro this is a = 2;
      (a + 4) * 10 + (5 - 4);
      bye bro
    `,
  },
  {
    name: "paranthesized expression test with multiple parenthesis, should success",
    input: `
      hi bro
      bro this is a = 2;
      (a * (4 + 8) + 10);
      bye bro
    `,
  },
  // if statement test
  {
    name: "paranthesized expression test with multiple parenthesis, should success",
    input: `
    hi bro
    bro this is x = 9;
    if bro (x != 9) {
      x = 5;
      say bro x;
    } else bro (x >= 9);
    bye bro;
    `,
  },
];

export const WithOutputPositiveTests = [
  {
    name: "variable assignment test with multiple variables, should success",
    input: `
      hi bro;
      bro this is a , b;
      a = b = 60;
      say bro a, b;
      bye bro
    `,
    output: "60 60",
  },
  {
    name: `binaryExpression print test with nope and "==", should success`,
    input: `
      hi bro;
      bro this is a;
      if bro (a == nope) {
        say bro a;
      }
      bye bro
    `,
    output: "nope",
  },
  {
    name: `binaryExpression print test with nope without any operator, should success`,
    input: `
      hi bro;
      bro this is a;
      if bro (a) {
        say bro a;
      } else bro {
        say bro "not nope";
      }
      bye bro
    `,
    output: "not nope",
  },
  {
    name: `binaryExpression print test - comparing nope with nope "==", should success`,
    input: `
      hi bro;
      if bro (nope == nope) {
        say bro "is nope";
      }
      bye bro
    `,
    output: "is nope",
  },
  {
    name: `binaryExpression print test with comparing nope with var "a", should success`,
    input: `
      hi bro;
      bro this is a;
      if bro (nope == a) {
        say bro "is nope";
      }
      bye bro
    `,
    output: "is nope",
  },
  {
    name: `binaryExpression print test with comparing nope with var "a" explicit initialization, should success`,
    input: `
      hi bro;
      bro this is a = nope;
      if bro (nope == a) {
        say bro "is nope";
      }
      bye bro
    `,
    output: "is nope",
  },
  {
    name: `binaryExpression print test with comparing nope with string nope, should success`,
    input: `
      hi bro;
      bro this is a = nope;
      if bro ("nope" == a) {
        say bro "is nope";
      } else bro {
        say bro "not nope";
      }
      bye bro
    `,
    output: "not nope",
  },
  {
    name: `binaryExpression print test with comparing nope with string nope, should success`,
    input: `
      hi bro;
      bro this is a = "nope";
      if bro (nope == a) {
        say bro "is nope";
      } else bro {
        say bro "not nope";
      }
      bye bro
    `,
    output: "not nope",
  },
  {
    name: `binaryExpression print test with comparing nope with string null, should success`,
    input: `
      hi bro;
      bro this is a = "null";
      if bro (nope == a) {
        say bro "is nope";
      } else bro {
        say bro "not nope";
      }
      bye bro
    `,
    output: "not nope",
  },
  {
    name: `binaryExpression print test with nope var "a" & "b" - 0, should success`,
    input: `
      hi bro;
      bro this is a;
      bro this is b;
      if bro (a == b) {
        say bro "is nope";
      } else bro {
        say bro "not nope";
      }
      bye bro
    `,
    output: "is nope",
  },
  {
    name: `binaryExpression print test with nope var "a" & "b" - 1, should success`,
    input: `
      hi bro;
      bro this is a;
      bro this is b = nope;
      if bro (a == b) {
        say bro "is nope";
      } else bro {
        say bro "not nope";
      }
      bye bro
    `,
    output: "is nope",
  },
  {
    name: `binaryExpression print test with nope var "a" & "b" -2, should success`,
    input: `
      hi bro;
      bro this is a;
      bro this is b = "nope";
      if bro (a == b) {
        say bro "is nope";
      } else bro {
        say bro "not nope";
      }
      bye bro
    `,
    output: "not nope",
  },
  // Boolean test
  {
    name: `binaryExpression print test with boolean expression - yep, should success`,
    input: `
      hi bro;
      bro this is a = yep;
      if bro (yep == a) {
        say bro "is yep";
      } else bro {
        say bro "not yep";
      }
      bye bro
    `,
    output: "is yep",
  },
  {
    name: `binaryExpression print test with boolean expression - nah, should success`,
    input: `
      hi bro;
      bro this is a = nah;
      if bro (nah == a) {
        say bro "is nah";
      } else bro {
        say bro "not nah";
      }
      bye bro
    `,
    output: "is nah",
  },
  {
    name: `binaryExpression print test with boolean expression - yep with string yep, should success`,
    input: `
      hi bro;
      bro this is a = "yep";
      if bro (yep == a) {
        say bro "is yep";
      } else bro {
        say bro "not yep";
      }
      bye bro
    `,
    output: "not yep",
  },
  {
    name: `binaryExpression print test with boolean expression - yep expression, should success`,
    input: `
      hi bro;
      bro this is a = 7;
      if bro (yep == (a > 5)) {
        say bro "is yep";
      } else bro {
        say bro "not yep";
      }
      bye bro
    `,
    output: "is yep",
  },
  {
    name: `binaryExpression print test with boolean expression - yep expression & string "yep", should success`,
    input: `
      hi bro;
      bro this is a = 7;
      if bro ("yep" == (a > 5)) {
        say bro "is yep";
      } else bro {
        say bro "not yep";
      }
      bye bro
    `,
    output: "not yep",
  },
  {
    name: `binaryExpression print test with boolean expression - yep expression & two expressions, should success`,
    input: `
      hi bro;
      bro this is a = yep;
      if bro ("yep" == (a == yep)) {
        say bro "is yep";
      } else bro {
        say bro "not yep";
      }
      bye bro
    `,
    output: "not yep",
  },
  {
    name: `binaryExpression print test with boolean expression - yep expression -3, should success`,
    input: `
      hi bro;
      bro this is a = yep;
      if bro ((a == yep) == (a == yep)) {
        say bro "is yep";
      } else bro {
        say bro "not yep";
      }
      bye bro
    `,
    output: "is yep",
  },
  {
    name: `binaryExpression print test with boolean expression - yep expression - 4, should success`,
    input: `
      hi bro;
      bro this is a;
      if bro ((a == nope) == (a == yep)) {
        say bro "is yep";
      } else bro {
        say bro "not yep";
      }
      bye bro
    `,
    output: "not yep",
  },
  {
    name: `binaryExpression print test with boolean expression - yep expression - 5, should success`,
    input: `
      hi bro;
      bro this is a;
      if bro ((a == nope) == (a == yep)) {
        say bro "is yep";
      } else bro {
        say bro "not yep";
      }
      bye bro
    `,
    output: "not yep",
  },
  {
    name: `binaryExpression print test with boolean expression - yep expression - 5, should success`,
    input: `
      hi bro;
      bro this is a;
      bro this is b = nah;
      if bro (a == b) {
        say bro "is yep";
      } else bro {
        say bro "not yep";
      }
      bye bro
    `,
    output: "not yep",
  },
  {
    name: `binaryExpression print test with boolean expression - nah variables comparison, should success`,
    input: `
      hi bro;
      bro this is a = nah;
      bro this is b = nah;
      if bro (a == b) {
        say bro "is nah";
      } else bro {
        say bro "not nah";
      }
      bye bro
    `,
    output: "is nah",
  },
  {
    name: `binaryExpression print test with boolean expression - nah variables comparison with string nah, should success`,
    input: `
      hi bro;
      bro this is a = "nah";
      bro this is b = nah;
      if bro (a == b) {
        say bro "is nah";
      } else bro {
        say bro "not nah";
      }
      bye bro
    `,
    output: "not nah",
  },
  {
    name: "float value addition with integer value test, should success",
    input: `
      hi bro
      bro this is a = 1.2, b = 2;
      say bro a + b;
      bye bro
    `,
    output: "3.2"
  },
  {
    name: "float value addition with float value value test, should success",
    input: `
      hi bro
      bro this is a = 1.2, b = 2.3;
      say bro a + b;
      bye bro
    `,
    output: "3.5"
  },
  {
    name: "printStatement test with multiple expressions, should success",
    input: `
      hi bro;
      bro this is a = 2, b = 60;
      say bro (a * (4 + 8) + 10), b;
      bye bro
    `,
    output: "34 60",
  },
  {
    name: "printStatement test with multiple expressions and re assigning value of one variable, should success",
    input: `
      hi bro;
      bro this is a = 2, b = 60;

      a = b + 3;
      say bro a, b;
      bye bro
    `,
    output: "63 60",
  },
  {
    name: "printStatement test with multiple expressions & without any variables, should success",
    input: `
      hi bro;
      say bro "hello", yep, nah;
      bye bro
    `,
    output: "hello yep nah",
  },
  {
    name: "printStatement test with nope, should success",
    input: `
      hi bro;
      say bro nope;
      bye bro;
    `,
    output: "nope",
  },
  {
    name: "printStatement test with nope as second parameter, should success",
    input: `
      hi bro;
      say bro 10, nope;
      bye bro;
    `,
    output: "10 nope",
  },
  {
    name: "printStatement test with string concatenation, should success",
    input: `
      hi bro;
      say bro "hello" + "crap";
      bye bro;
    `,
    output: "hellocrap",
  },
  {
    name: "printStatement test with multiple expresions including nope, should success",
    input: `
      hi bro;
      bro this is a = 70;
      say bro 6*5, nope, "jamtara", a;
      bye bro;
    `,
    output: "30 nope jamtara 70",
  },
  {
    name: "printStatement test with nope variable, should success",
    input: `
      hi bro;
      bro this is a;
      say bro a;
      bye bro;
    `,
    output: "nope",
  },
  {
    name: `printStatement test with string "undefined", should success`,
    input: `
      hi bro;
      say bro "undefined";
      bye bro;
    `,
    output: "undefined",
  },
  {
    name: `printStatement test with nope variable, should success`,
    input: `
      hi bro;
      bro this is a;
      say bro a;
      bye bro;
    `,
    output: "nope",
  },
  {
    name: `printStatement test with yep variable, should success`,
    input: `
      hi bro;
      bro this is a = yep;
      say bro a;
      bye bro;
    `,
    output: "yep",
  },
  {
    name: `printStatement test with nah variable, should success`,
    input: `
      hi bro;
      bro this is a = nah;
      say bro a;
      bye bro;
    `,
    output: "nah",
  },
  {
    name: `printStatement test with assignment expression, should success`,
    input: `
      hi bro;
      bro this is a;
      say bro a = 90;
      bye bro;
    `,
    output: "90",
  },
  {
    name: `printStatement test with logical AND, should success`,
    input: `
      hi bro;
      say bro 9 && 10;
      bye bro;
    `,
    output: "10",
  },
  {
    name: `printStatement test with logical OR, should success`,
    input: `
      hi bro;
      say bro 9 || 10;
      bye bro;
    `,
    output: "9",
  },
  {
    name: `printStatement test with logical - 1, should success`,
    input: `
      hi bro;
      say bro nah && yep;
      bye bro;
    `,
    output: "nah",
  },
  {
    name: `printStatement test with logical - 2, should success`,
    input: `
    hi bro;
    bro this is a = yep;
    say bro a && nah;
    bye bro;
    `,
    output: "nah",
  },
  {
    name: `printStatement test with logical - 3, should success`,
    input: `
    hi bro;
    bro this is a = yep;
    say bro a && yep;
    bye bro;
    `,
    output: "yep",
  },
  {
    name: `printStatement test with equality, should success`,
    input: `
      hi bro;
      say bro 9 == 10;
      bye bro;
    `,
    output: "nah",
  },
  {
    name: `printStatement test with inequality, should success`,
    input: `
      hi bro;
      say bro 9 != 10;
      bye bro;
    `,
    output: "yep",
  },
  {
    name: `printStatement test with logical OR, should success`,
    input: `
      hi bro;
      say bro 9 || 10;
      bye bro;
    `,
    output: "9",
  },
  {
    name: `printStatement test with logical OR - 2, should success`,
    input: `
      hi bro;
      say bro nah || yep;
      bye bro;
    `,
    output: "yep",
  },
  {
    name: `printStatement test with boolean yep nah and logical, should success`,
    input: `
      hi bro;
      say bro yep != 10;
      bye bro;
    `,
    output: "yep",
  },
  {
    name: `printStatement test with boolean yep and string "yep", should success`,
    input: `
      hi bro;
      say bro "yep" == yep;
      bye bro;
    `,
    output: "nah",
  },
  // while statement / loop tests
  {
    name: `whileStatement test with 1 time loop, should success`,
    input: `
      hi bro;
      bro this is a = 0;
      while bro (a < 1) {
        say bro "bro";
        a += 1;
      }
      bye bro;
    `,
    output: "bro",
  },
  {
    name: `whileStatement test with single break statement, should success`,
    input: `
      hi bro;
      while bro (yep) 
        stop bro;
      say bro "end";
      bye bro;
    `,
    output: "end",
  },
  {
    name: `whileStatement test with nested loops, should success`,
    input: `
      hi bro;
      bro this is a = 0;
      while bro (a < 2) {
        while bro (yep)
          stop bro;
        say bro "hello";
        if bro (yep)
          stop bro;
      }
      bye bro;
    `,
    output: "hello",
  },
  {
    name: `whileStatement with multiple breaks, should success`,
    input: `
      hi bro;
      bro this is a = 0;
      while bro (a < 2) {
        say bro "hello";
        if bro (yep)
          stop bro;
        stop bro;
        stop bro;
      }
      bye bro;
    `,
    output: "hello",
  },
  // if statement tests
  {
    name: `if statement success test - 1: only if, should success`,
    input: `
    hi bro
    if bro (yep) {
      say bro "bro";
    }
    bye bro;
    `,
    output: "bro",
  },
  {
    name: `if statement success test - 2: if else both, should success`,
    input: `
    hi bro
    if bro (yep) {
      say bro "yep";
    } else bro {
      say bro "nah";
    }
    bye bro;
    `,
    output: "yep",
  },
  {
    name: `if statement success test - 3: if only with comarison condn, should success`,
    input: `
    hi bro
    bro this is x = 9;
    if bro (x >= 9) {
      x = 5;
      say bro x;
    } 
    bye bro;
    `,
    output: "5",
  },
  // else-if statement tests
  {
    name: `else-if statement success test - 1: if with one else-if, should success`,
    input: `
    hi bro
    if bro (nah) {
      say bro "nah";
    } else if bro (yep) {
      say bro "yep";
    }
    bye bro;
    `,
    output: "yep",
  },
  {
    name: `else-if statement success test - 2: if with multiple else-ifs, should success`,
    input: `
    hi bro
    bro this is x = 10;
    if bro (x < 5) {
      say bro "x < 5";
    } else if bro (x < 8) {
      say bro "x < 8";
    } else if bro (x < 12) {
      say bro "x < 12";
    } else if bro (x < 15) {
      say bro "x < 15";
    }
    bye bro;
    `,
    output: "x < 12",
  },
  {
    name: `else-if statement success test - 3: nested if-else-if ladder, should success`,
    input: `
    hi bro
    bro this is a = 15;
    if bro (a < 0) {
      say bro "a < 0";
    } else if bro (a > 0) {
      if bro (a < 10) {
        say bro "a < 10";
      } else if bro (a < 20) {
        say bro "a < 20";
      }
    }
    bye bro
    `,
    output: "a < 20",
  },
  {
    name: `else-if statement success test - 4: if-else-if ladder evaluating to else, should success`,
    input: `
    hi bro
    bro this is x = 15;
    if bro (x < 5) {
      say bro "x < 5";
    } else if bro (x < 8) {
      say bro "x < 8";
    } else if bro (x < 12) {
      say bro "x < 12";
    } else bro {
      say bro "x > 12";
    }
    bye bro;
    `,
    output: "x > 12",
  },
  // logical expression test
  {
    name: `logical "&&" test with yep nah, should success`,
    input: `
        hi bro
        if bro (yep && nah) {
          say bro "yep";
        } else bro {
          say bro "nah";
        }
        bye bro;
      `,
    output: `nah`,
  },
  // modulus operator test
  {
    name: `modulus operator "%" test, should success`,
    input: `
        hi bro
        say bro 90 % 9;
        bye bro;
      `,
    output: `0`,
  },
  {
    name: `modulus operator "%" test - 2, should success`,
    input: `
        hi bro
        say bro 27 % 5;
        bye bro;
      `,
    output: `2`,
  },
  {
    name: `modulus operator "%" test - 2, should success`,
    input: `
        hi bro
        say bro 5 % 20;
        bye bro;
      `,
    output: `5`,
  },
  {
    name: `whileStatement test with single continue statement, should success`,
    input: `
      hi bro;
      bro this is a = 5;
      bro this is step = 0;
      while bro (a > 0) {
        step += 1;
        if bro (a % 2 != 0){
          a -= 2;
          next bro;
        }
        a -= 1;
      }
      say bro step;
      bye bro;
    `,
    output: "3",
  },
  {
    name: `whileStatement test with multiple continue statement, should success`,
    input: `
      hi bro;
      bro this is a = 5;
      bro this is step = 0;
      while bro (a > 0) {
        step += 1;
        if bro (a % 2 == 0){
          a -= 2;
          next bro;
        }
        a -= 1;
        next bro;
        say bro "whoa whoa.. should not have reached here bro";
      }
      say bro step;
      bye bro;
    `,
    output: "3",
  },
  {
    // step:  1 => 2
    // a: 10 => 7 => 6 => 3 => 2 => -1
    name: `whileStatement test with single continue statement without block, should success`,
    input: `
      hi bro;
      bro this is a = 10;
      bro this is step = 0;
      while bro (a > 0) {
        if bro (a % 2 == 0){
          a -= 3;
          next bro;
        }
        a -= 1;
        if bro (step == 1) next bro
        step += 1;
      }
      say bro step;
      bye bro;
    `,
    output: "1",
  },
];