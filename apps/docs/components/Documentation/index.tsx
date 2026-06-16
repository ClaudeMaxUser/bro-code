import Snippet from "./Snippet";


/* This example requires Tailwind CSS v2.0+ */
const features = [
  {
    name: "General",
    description: (
      <>
        <code className="language-cpp">hi bro</code> is the entrypoint for the
        program and all program must end with{" "}
        <code className="language-cpp">bye bro</code>. Anything outside of it
        will be ignored.
      </>
    ),
    code: `This will be ignored

hi bro
  // Write code here
bye bro

This too
    `,
  },
  {
    name: "Variables",
    description: (
      <>
        Variables can be declared using{" "}
        <code className="language-cpp">bro this is</code>.
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
    name: "Types",
    description: (
      <>
        Numbers and strings are like other languages. Null values can be denoted
        using <code className="language-cpp">nope</code>.{" "}
        <code className="language-cpp">yep</code> and{" "}
        <code className="language-cpp">nah</code> are the boolean values.
      </>
    ),
    code: `hi bro
    bro this is a = 10;
    bro this is b = 10 + (15*20);
    bro this is c = "two";
    bro this is d = 'ok';
    bro this is e = nope;
    bro this is f = yep;
    bro this is g = nah;
bye bro
    `,
  },
  {
    name: "Built-ins",
    description: (
      <>
        Use <code className="language-cpp">say bro</code> to print anything to
        console.
      </>
    ),
    code: `hi bro
    say bro "Hello World";
    bro this is a = 10;
    {
       bro this is b = 20;
       say bro a + b;
    }
    say bro 5, 'ok', nope , yep , nah;
bye bro
    `,
  },
  {
    name: "Conditionals",
    description: (
      <>
        Bro-code supports if-else-if ladder construct , <code className="language-cpp">if bro</code> block will execute if condition is <code className="language-cpp">yep</code>, otherwise one of the subsequently added <code className="language-cpp">else if bro</code> blocks will execute if their respective condition is <code className="language-cpp">yep</code>, and the <code className="language-cpp">else bro</code> block will eventually execute if all of the above conditions are <code className="language-cpp">nah</code>.
      </>
    ),
    code: `hi bro
    bro this is a = 10;
    if bro (a < 20) {
      say bro "a is less than 20";
    } else if bro ( a < 25 ) {
      say bro "a is less than 25";
    } else bro {
      say bro "a is greater than or equal to 25";
    }
bye bro
    `
  },
  {
    name: "Loops",
    description: (
      <>
        Statements inside <code className="language-cpp">while bro</code> blocks are executed as long as a specified condition evaluates to <code className="language-cpp">yep</code>. If the condition becomes <code className="language-cpp">nah</code>, statement within the loop stops executing and control passes to the statement following the loop. 
        Use <code className="language-cpp">stop bro</code> to break the loop and <code className="language-cpp">next bro</code> to continue within loop.
      </>
    ),
    code: `hi bro
    bro this is a = 0;
    while bro (a < 10) {
      a += 1;
      if bro (a == 5) {
        say bro "inside say bro ", a;
        next bro;
      }
      if bro (a == 6) {
        stop bro;
      }
      say bro a;
    }
    say bro "done";
bye bro
    `
  }

];

export default function Documentation() {
  return (
    <section className="max-w-6xl mx-auto py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="documentation-shell">
        <div>
          <h2 className="section-title">Examples & Docs</h2>
          <p className="section-subtitle mt-3 max-w-2xl">
            Bro-code is a dynamically typed toy language powered by a parser and interpreter written in Typescript. Use these examples as a quick map of the language.
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
