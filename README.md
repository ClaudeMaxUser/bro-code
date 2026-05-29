<h1 align="center">Bro Lang</h1>

<p align="center">
  <b>Bro lang is a toy programming language written in Typescript.</b>
</p>
<br>

<h2 align="center">Installation</h2>

```
npm i -g bhailang
```

<h2 align="center">Usage</h2>

<h4 align="left">Create a new file (<code>test.bro</code>)</h4>


<h4 align="left">Edit the file with a text editor.
You can also try out your code on <a href="https://bhailang.js.org/#playground">Bro Lang PlayGround</a></h4>

```
hi bro
  say bro "Hello bro";
bye bro

```

<h4 align="left">Run</h4>

```
bhailang test.bro
```

<h4 align="left">Output</h4>

```
Hello bro
```

<h2 align="center">Documentation</h2>

<h3 align="center">General</h3>
<p align="center"><code>hi bro</code> is the entrypoint for the program and all programs must end with <code>bye bro</code>. Anything outside of it will be ignored.</p>

```

This will be ignored

hi bro
// Write code here
bye bro

This too
```

<h3 align="center">Variables</h3>
<p align="center">Variables can be declared using <code>bro this is</code>.</p>

```

hi bro
  bro this is a = 10;
  bro this is b = "two";
  bro this is c = 15;
  a = a + 1;
  b = 21;
  c *= 2;
bye bro
```

<h3 align="center">Types</h3>
<p align="center">Numbers and strings are like other languages. Null values can be denoted using <code>nope</code>. <code>yep</code> and <code>nah</code> are the boolean values.</p>

```

hi bro
  bro this is a = 10;
  bro this is b = 10 + (15*20);
  bro this is c = "two";
  bro this is d = 'ok';
  bro this is e = nope;
  bro this is f = yep;
  bro this is g = nah;
bye bro
```

<h3 align="center">Built-ins</h3>
<p align="center">Use <code>say bro</code> to print anything to console.</p>

```

hi bro
  say bro "Hello World";
  bro this is a = 10;
  {
    bro this is b = 20;
    say bro a + b;
  }
  say bro 5, 'ok', nope , yep , nah;
bye bro
```

<h3 align="center">Conditionals</h3>
<p align="center">Bro lang supports if-else-if ladder construct , <code>if bro</code> block will execute if condition is <code>yep</code>, otherwise one of the subsequently added <code>else if bro</code> blocks will execute if their respective condition is <code>yep</code>, and the <code>else bro</code> block will eventually execute if all of the above conditions are <code>nah</code>.</p>

```

hi bro
  bro this is a = 10;
  if bro (a < 20) {
    say bro "a is less than 20";
  } else if bro ( a < 25 ) {
    say bro "a is less than 25";
  } else bro {
    say bro "a is greater than or equal to 25";
  }
bye bro
```

<h3 align="center">Loops</h3>
<p align="center">Statements inside <code>while bro</code> blocks are executed as long as a specified condition evaluates to <code>yep</code>. If the condition becomes <code>nah</code>, statements within the loop stop executing and control passes to the statement following the loop. Use <code>stop bro</code> to break the loop and <code>next bro</code> to continue within loop.</p>


```

hi bro
  bro this is a = 0;
  while bro (a < 10) {
   a += 1;
   if bro (a == 5) {
    say bro "inside loop: ", a;
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








