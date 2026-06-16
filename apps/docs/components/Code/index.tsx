import React, { useState } from "react";

import interpreter from "bro-code-interpreter";

import { sendEvents } from "../../helpers";

import CodeEditor from "./CodeEditor";
import Terminal from "./Terminal";


const initialCode = `
hi bro
 say bro "Hello World";
 
  bro this is a = 3;
  bro this is b = 0;

  while bro (b < 5) {
    say bro b;

    if bro (b == a) {
      say bro "b is equal to a";
    } else if bro (b == 0) {
      say bro "b is equal to zero";
    }

    b += 1;
  }

bye bro
`;

const playgroundTemplates = [
  {
    label: "FizzBuzz-ish",
    code: `hi bro
  bro this is n = 1;
  while bro (n <= 15) {
    if bro (n % 15 == 0) {
      say bro "fizzbuzz";
    } else if bro (n % 3 == 0) {
      say bro "fizz";
    } else if bro (n % 5 == 0) {
      say bro "buzz";
    } else bro {
      say bro n;
    }
    n += 1;
  }
bye bro
`,
  },
  {
    label: "Condition Flow",
    code: `hi bro
  bro this is score = 82;
  if bro (score >= 90) {
    say bro "grade A";
  } else if bro (score >= 75) {
    say bro "grade B";
  } else bro {
    say bro "grade C";
  }
bye bro
`,
  },
  {
    label: "Loop + Continue",
    code: `hi bro
  bro this is a = 0;
  while bro (a < 8) {
    a += 1;
    if bro (a == 4) {
      next bro;
    }
    say bro a;
  }
bye bro
`,
  },
];

const Code = (props: Props) => {
  const {} = props;
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState<{ value: string; isError: boolean }[]>(
    []
  );
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  const handleChange = (newCode: string) => {
    setCode(newCode);
  };

  const executeCode = () => {
    let orignalConsoleLog = console.log;
    const outputList = [];
    let isExecusionSuccess = true;
    console.log = function (...args) {
      outputList.push({ value: args.join("\n"), isError: false });
    };

    try {
      interpreter.interpret(code);
    } catch (e) {
      if (e instanceof Error) {
        isExecusionSuccess = false;
        outputList.push({ value: e.message, isError: true });
      } else {
        console.error(e);
      }
    }

    sendEvents("CodeExecuted", {success: isExecusionSuccess});

    setIsSuccess(isExecusionSuccess);
    setOutput(outputList);
    console.log = orignalConsoleLog;
  };

  const clearCode = () => {
    sendEvents("CodeCleared");
    setCode("");
    setIsSuccess(null);
    setOutput([]);
  };

  const loadTemplate = (template: string) => {
    setCode(template);
    setIsSuccess(null);
    setOutput([]);
  };

  return (
    <section id="playground" className="mx-4 sm:mx-10 lg:mx-14 mt-4 sm:mt-8">
      <div className="playground-shell">
        <div className="sm:flex justify-between items-start sm:items-center gap-4 mb-6">
          <div>
            <h2 className="section-title">Playground</h2>
            <p className="section-subtitle mt-2">
              Run Bro-code snippets instantly and inspect output in the embedded terminal.
            </p>
          </div>
          <div className="flex gap-2 flex-wrap">
            {playgroundTemplates.map((template) => (
              <button
                key={template.label}
                onClick={() => loadTemplate(template.code)}
                className="playground-chip"
              >
                {template.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 justify-end mb-4">
          <button
            disabled={!code}
            onClick={executeCode}
            className="playground-action-primary disabled:opacity-40"
          >
            Run
          </button>

          <button
            onClick={clearCode}
            className="playground-action-secondary"
          >
            Clear
          </button>
        </div>

        <CodeEditor handleChange={handleChange} code={code} />
        <Terminal output={output} isSuccess={isSuccess} />
      </div>
    </section>
  );
};
type Props = {};
export default React.memo(Code);
