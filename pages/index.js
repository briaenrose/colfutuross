import React from "react";
import Head from "next/head";
import Boatbackground from "../components/Boatbackground";

function IndexPage() {
  return (
    <div>
      <Head>
        <title>My page title</title>
        <meta property='og:title' content='My page title' key='title' />
      </Head>
      <Head>
        <meta property='og:title' content='My new title' key='title' />
      </Head>
      <Boatbackground />
    </div>
  );
}

export default IndexPage;
