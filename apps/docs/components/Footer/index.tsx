import React from "react";


const Footer = (props: Props) => {
  const {} = props;
  return (
    <footer className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 pt-2">
      <div className="footer-inner text-sm text-center py-5">
        &copy; {new Date().getFullYear()}{" "}
        <a className="hover:text-bro-500 transition-colors" href="http://arijitbiswas.netlify.app/">
          Arijit Biswas
        </a>
      </div>
    </footer>
  );
};
type Props = {};
export default React.memo(Footer);
