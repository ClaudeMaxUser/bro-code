import Head from "next/head";

import Code from "../components/Code";
import Documentation from "../components/Documentation";
import Footer from "../components/Footer";
import Header from "../components/Header";


export default function Docs() {
  return (
    <div className="bg-background">
      <Head>
        <title>Bro-lang - A toy programming language</title>
        <meta property="og:title" content="Bro-lang - A toy programming language" key="title" />
        <meta property="og:type" content="website" key="type" />
        <meta property="og:url" content="https://bhailang.js.org" key="url" />
        <meta property="og:description" content="Bro-lang is a dynamically typed toy programming language, written in Typescript. Created by Arijit Biswas." key="description" />
        <meta name="description" content="Bro-lang is a dynamically typed toy programming language, written in Typescript. Created by Arijit Biswas." />
        <meta property="og:site_name" content="Bro-lang Documentation" key="siteName" />
      </Head>
      <Header />
      <Code />
      <Documentation />
      <Footer />
    </div>
  );
}

