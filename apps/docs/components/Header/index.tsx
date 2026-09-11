import BroCodeLogo from "./broLangLogo";


export default function Header() {
  return (
    <header className="relative overflow-hidden header flex justify-center items-center">
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="hero-shell">
          <main className="mx-auto">
            <div className="text-center">
              <h1 className="hidden">BroCode</h1>
              <div className="hero-badge inline-flex items-center rounded-full px-4 py-1 text-xs uppercase">
                Toy language, real parser
              </div>
              <div className="p-4 sm:p-6">
                <BroCodeLogo />
              </div>
              <p className="hero-subtitle text-base sm:text-lg md:text-xl mx-auto">
                A playful programming language written in Typescript with its own parser, interpreter, and CLI.
              </p>
              {/* <div className="install-command mt-6 mx-auto">
                <span className="install-command-prefix">Install</span>
                <code className="language-js">npm i -g brocode</code>
              </div> */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <div className="rounded-xl shadow-lg shadow-black/30">
                  <a
                    href="#playground"
                    className="hero-cta-primary"
                  >
                    Open Playground
                  </a>
                </div>
                <div className="rounded-xl shadow-lg shadow-black/20">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/ClaudeMaxUser/broo-code"
                    className="hero-cta-secondary"
                  >
                    View Source
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </header>
  );
}
