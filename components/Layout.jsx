import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Eater&display=swap" rel="stylesheet" /> 
    </Head>
      <div className="container mx-auto" id="app">
        <Navbar />
        <div className="main mx-16">{children}</div>
        <Footer />
      </div>
    </>
  );
}
