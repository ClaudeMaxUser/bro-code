import React from "react";

import { highlight } from "prismjs";

import { broCodeSyntax } from "../common/syntax";
import CopyToClipboard from "../CopyToClipboard";

const Snippet = (props: Props) => {
  const { code } = props;

  return (
    <div className="relative snippet-container group">
      <div className="snippet-topbar">
        <span className="snippet-dot snippet-dot-red" />
        <span className="snippet-dot snippet-dot-yellow" />
        <span className="snippet-dot snippet-dot-green" />
        <span className="snippet-filename">example.bro</span>
      </div>
      <div
        className="snippet-content documentation-code"
        dangerouslySetInnerHTML={{
          __html: highlight(code, broCodeSyntax, "broCode").replace(
            new RegExp("\n", 'g'),
            "<br/>"
          ).replace(new RegExp('  ', 'g'), '&emsp;'),
        }}
      ></div>
      <CopyToClipboard text={code} className="snippet-copy-button" />
    </div>
  );
  
};
type Props = { code: string };
export default React.memo(Snippet);
