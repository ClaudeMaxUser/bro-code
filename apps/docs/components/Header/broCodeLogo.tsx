export default function BroCodeLogo() {
  return (
    <svg
      className="h-min w-full"
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="824"
      height="196"
      viewBox="0 0 824 196"
      preserveAspectRatio="xMidYMid meet"
    >
      <style>{`
        .bro-main {
          font-family: 'SF Mono', 'Fira Code', 'Cascadia Code', 'Courier New', monospace;
          font-size: 108px;
          font-weight: 700;
        }
        .bro-sub {
          font-family: 'SF Mono', 'Fira Code', 'Cascadia Code', 'Courier New', monospace;
          font-size: 18px;
          font-weight: 400;
          letter-spacing: 4px;
        }
      `}</style>

      <text className="bro-main" x="60" y="140" fill="#1e293b">Bro</text>
      <text className="bro-main" x="285" y="140" fill="#2563eb">-</text>
      <text className="bro-main" x="325" y="140" fill="#3b82f6">Code</text>

      <line x1="60" y1="158" x2="764" y2="158" stroke="#3b82f6" strokeWidth="2.5" opacity="0.35" />

      <text className="bro-sub" x="62" y="184" fill="#64748b">typescript, but make it bro</text>
    </svg>
  );
}