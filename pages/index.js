import Head from "next/head";

import FormCompo from "../components/FormCompo";
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>CAPS Form Project</title>
      </Head>
      <Navbar />
      <FormCompo />
    </div>
  );
}
