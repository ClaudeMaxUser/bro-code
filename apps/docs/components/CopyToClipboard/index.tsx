import { useEffect, useRef, useState } from "react";
import CopyIcon from "./CopyIcon";
import TickIcon from "./TickIcon";

interface Props {
  text: string;
  className?: string;
}

export default function CopyToClipboard(props: Props) {
  const { text, className } = props;
  const [copySuccess, setCopySuccess] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (copySuccess) {
      setTimeout(() => {
        setCopySuccess(false);
      }, 3000);
    }
  }, [copySuccess]);

  function copyToClipboard(e: React.MouseEvent) {
    e.stopPropagation();
    if (text) {
      navigator.clipboard?.writeText(text).then(() => {
        setCopySuccess(true);
      }).catch(error => {
        console.log(error);
      });
    }
  }

  return (
    <>
      <button
        ref={buttonRef}
        className={"copy-button absolute top-2 right-2 sm:top-3 sm:right-3 flex items-center justify-center p-1.5 sm:p-2 border text-base font-medium rounded-md cursor-pointer transition-all duration-150 " + (className ? `${className} ` : "") + (copySuccess ? 'copy-button-success' : '')}
        onClick={copyToClipboard}
      >
        {copySuccess ?
          <>
            <TickIcon />
            <span className="copied-text copied-text-bubble absolute top-1/2 -translate-y-1/2 right-[calc(100%+8px)] p-1 rounded-md text-xs font-normal text-bro-300 border border-transparent">
              Copied!
            </span>
          </>
          : <CopyIcon />}
      </button>
    </>
  );
}