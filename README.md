# Bro code

Bro code is a toy programming language written in TypeScript.

## Project status

- This repository is private.
- The project is not distributed through npm.
- The public way to use Bro code is the playground.

## Playground

- Website: https://brocode.js.org
- Direct playground section: https://brocode.js.org/#playground

You can write and run Bro code snippets directly in the browser.

## Language quick start

Minimal program:

```bro
hi bro
  say bro "Hello bro";
bye bro
```

Expected output:

```text
Hello bro
```

## Language reference

### 1. Program boundaries

Every executable program starts with `hi bro` and ends with `bye bro`.
Anything outside those boundaries is ignored.

```bro
This will be ignored

hi bro
  // code here
bye bro

This too
```

### 2. Comments

- Single-line comments: `// ...`
- Multi-line comments: `/* ... */`

```bro
hi bro
  // single line comment
  /*
    multi line comment
  */
  say bro "comments work";
bye bro
```

### 3. Variables

Declare variables with `bro this is`.

```bro
hi bro
  bro this is a = 10;
  bro this is b = "two";
  bro this is c = 15;

  a = a + 1;
  b = 21;
  c *= 2;
bye bro
```

### 4. Types and literals

- Number: `10`, `20.5`
- String: `"hello"`, `'hello'`
- Null: `nope`
- Boolean true: `yep`
- Boolean false: `nah`

```bro
hi bro
  bro this is a = 10;
  bro this is b = 10 + (15 * 20);
  bro this is c = "two";
  bro this is d = 'ok';
  bro this is e = nope;
  bro this is f = yep;
  bro this is g = nah;
bye bro
```

### 5. Output

Use `say bro` to print values.

```bro
hi bro
  say bro "Hello World";
  bro this is a = 10;
  {
    bro this is b = 20;
    say bro a + b;
  }
  say bro 5, 'ok', nope, yep, nah;
bye bro
```

### 6. Operators

Supported operators include:

- Arithmetic: `+`, `-`, `*`, `/`, `%`
- Assignment: `=`, `+=`, `-=`, `*=`, `/=`, `%=`
- Equality: `==`, `!=`
- Relational: `>`, `<`, `>=`, `<=`
- Logical: `&&`, `||`

Notes:

- String concatenation is supported with `+`.
- Arithmetic with `nope` or boolean values can throw runtime errors.
- Division by zero throws a runtime error.

### 7. Conditionals

Use `if bro`, `else if bro`, and `else bro`.

```bro
hi bro
  bro this is a = 10;

  if bro (a < 20) {
    say bro "a is less than 20";
  } else if bro (a < 25) {
    say bro "a is less than 25";
  } else bro {
    say bro "a is greater than or equal to 25";
  }
bye bro
```

### 8. Loops

Use `while bro` for loops.

- `stop bro` breaks the loop.
- `next bro` continues to next iteration.

```bro
hi bro
  bro this is a = 0;

  while bro (a < 10) {
    a += 1;

    if bro (a == 5) {
      say bro "inside loop:", a;
      next bro;
    }

    if bro (a == 6) {
      stop bro;
    }

    say bro a;
  }

  say bro "done";
bye bro
```

### 9. Scope

Blocks create scope with `{ ... }`.

```bro
hi bro
  bro this is a = 10;
  {
    bro this is b = 20;
    say bro a + b;
  }
bye bro
```

## Public links

- Playground and docs: https://brocode.js.org
- Playground section: https://brocode.js.org/#playground

## License

MIT
