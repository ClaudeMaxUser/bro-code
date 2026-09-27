import Snippet from "./Snippet";

/* This example requires Tailwind CSS v2.0+ */
const features = [
  {
    name: "General",
    description: (
      <>
        <code className="language-cpp">hi bro</code> is the entrypoint for the
        program and all programs must end with{" "}
        <code className="language-cpp">bye bro</code>. Anything outside of these
        boundaries will be ignored.
      </>
    ),
    code: `This will be ignored

hi bro
  // Write code here
  say bro "Hello from Bro-code!";
bye bro

This will be ignored too
    `,
  },
  {
    name: "Variables",
    description: (
      <>
        Variables can be declared using{" "}
        <code className="language-cpp">bro this is</code>. Re-assignments and
        compound assignments are fully supported.
      </>
    ),
    code: `hi bro
  bro this is a = 10;
  bro this is b = "two";
  bro this is c = 15;
  a = a + 1;
  b = 21;
  c *= 2;
bye bro
    `,
  },
  {
    name: "Types & Literals",
    description: (
      <>
        Supported primitive types include Numbers (integers & floats), Strings,
        Null (<code className="language-cpp">nope</code>), and Booleans (
        <code className="language-cpp">yep</code> for true,{" "}
        <code className="language-cpp">nah</code> for false).
      </>
    ),
    code: `hi bro
  bro this is a = 10;
  bro this is b = 10 + (15 * 20);
  bro this is c = "two";
  bro this is d = 'ok';
  bro this is e = nope;
  bro this is f = yep;
  bro this is g = nah;
bye bro
    `,
  },
  {
    name: "Operators",
    description: (
      <>
        Supports arithmetic (<code className="language-cpp">+ - * / %</code>),
        equality (<code className="language-cpp">== !=</code>), relational (
        <code className="language-cpp">&gt; &lt; &gt;= &lt;=</code>), logical (
        <code className="language-cpp">&amp;&amp; ||</code>), and compound
        assignments (<code className="language-cpp">+= -= *= /= %=</code>).
      </>
    ),
    code: `hi bro
  bro this is x = 10;
  bro this is y = 3;

  say bro "Sum:", x + y;
  say bro "Modulo:", x % y;
  say bro "Check:", x > y && y != 0;

  x += 5;
  say bro "Updated x:", x;
bye bro
    `,
  },
  {
    name: "Built-in I/O",
    description: (
      <>
        Use <code className="language-cpp">say bro</code> to print expressions
        and comma-separated values to the console.
      </>
    ),
    code: `hi bro
  say bro "Hello World";
  bro this is a = 10;
  {
    bro this is b = 20;
    say bro "a + b =", a + b;
  }
  say bro 5, 'ok', nope, yep, nah;
bye bro
    `,
  },
  {
    name: "Conditionals",
    description: (
      <>
        Bro-code supports <code className="language-cpp">if bro</code>,{" "}
        <code className="language-cpp">else if bro</code>, and{" "}
        <code className="language-cpp">else bro</code> branches evaluating
        boolean conditions.
      </>
    ),
    code: `hi bro
  bro this is a = 10;
  if bro (a < 20) {
    say bro "a is less than 20";
  } else if bro (a < 25) {
    say bro "a is less than 25";
  } else bro {
    say bro "a is greater than or equal to 25";
  }
bye bro
    `,
  },
  {
    name: "Loops",
    description: (
      <>
        Use <code className="language-cpp">while bro</code> to loop while a
        condition is <code className="language-cpp">yep</code>. Use{" "}
        <code className="language-cpp">stop bro</code> to break out or{" "}
        <code className="language-cpp">next bro</code> to jump to the next
        iteration.
      </>
    ),
    code: `hi bro
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
    `,
  },
  {
    name: "Blocks & Scope",
    description: (
      <>
        Blocks created with <code className="language-cpp">&#123; &#125;</code>{" "}
        establish local lexical scopes. Variables declared within inner blocks
        shadow outer variables.
      </>
    ),
    code: `hi bro
  bro this is msg = "outer";
  {
    bro this is msg = "inner";
    say bro "Inside block:", msg;
  }
  say bro "Outside block:", msg;
bye bro
    `,
  },
];

export default function Documentation() {
  return (
    <section className="max-w-6xl mx-auto py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="documentation-shell">
        <div>
          <h2 className="section-title">Examples & Docs</h2>
          <p className="section-subtitle mt-3 max-w-2xl">
            Bro-code is a dynamically typed toy language powered by a parser and
            interpreter written in Typescript. Use these examples as a quick map
            of the language.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {features.map((feature) => (
              <article key={feature.name} className="documentation-card">
                <div className="documentation-card-title">{feature.name}</div>
                <div className="mt-2 text-sm documentation-card-description leading-6">
                  {feature.description}
                </div>
                <Snippet code={feature.code} />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
