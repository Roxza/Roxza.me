import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import NextNProgress from "nextjs-progressbar";
import Layout from "../components/Layout";
import "../public/assets/css/globals.css";

function RoxzaMe({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const router = useRouter();
  const path = router.asPath;

  return (
    <>
      <Head>
        <title>{`Roxza.Me - ${path}`}</title>
      </Head>
      <NextNProgress height={3} color="#a855f7" />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default RoxzaMe;
