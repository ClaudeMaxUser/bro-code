import Head from "next/head";

import Code from "../components/Code";
import Documentation from "../components/Documentation";
import Footer from "../components/Footer";
import Header from "../components/Header";


export default function Docs() {
  return (
    <div className="docs-page bg-background text-white">
      <div className="docs-grid" />
      <div className="docs-gradient" />
      <Head>
        <title>Bro-code</title>
        <meta property="og:title" content="Bro-code - A toy programming language" key="title" />
        <meta property="og:type" content="website" key="type" />
        <meta property="og:description" content="Bro-code is a dynamically typed toy programming language, written in Typescript. Created by Arijit Biswas." key="description" />
        <meta name="description" content="Bro-code is a dynamically typed toy programming language, written in Typescript. Created by Arijit Biswas." />
        <meta property="og:site_name" content="Bro-code Documentation" key="siteName" />
      </Head>
      <Header />
      <Code />
      <Documentation />
      <Footer />
    </div>
  );
}

