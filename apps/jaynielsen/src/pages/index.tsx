import * as React from "react";
import Head from "next/head";
import { Box, Center, Stack } from "@gaze/react";
import { Header } from "../components/header";
import { AboutMe } from "../components/about-me/about-me";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jay Nielsen - Software Engineer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack space="var(--size-space-100)">
        <Header />
        <AboutMe />
      </Stack>
    </>
  );
}
