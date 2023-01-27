import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "../utils/api";
import HEJ from "../components/Home/home";
import TEST from "../components/Sidebar/sidebar";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>RasmusMagic</title>
        <meta name="description" content="Portfolio by Rasmus" />
        <link rel="icon" href="/bamse.ico" />
        <meta name="author" content="Rasmus Israelsson"></meta>
      </Head>

      <HEJ />

      <TEST />
    </>
  );
};

export default Home;
