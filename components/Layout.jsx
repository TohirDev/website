import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Eater&display=swap" rel="stylesheet" /> 
      <meta name="description" content="Weakling preparing to explode with his unexpected moves. Full of sorrows" />
      <meta name="author" content="Triistam" />
      <meta name="keywords" content="Triistam akumaru user6879" />
      <meta name="og:image" content="https://i.imgur.com/nDxSgWi.png"/>
      <meta name="og:title" content="Triistam"/>
      <meta name="og:type" content="profile"/>
      <meta name="og:url" content="https://triistam.vercel.app/"/>
    </Head>
      <div className="container mx-auto" id="app">
        <Navbar />
        <div className="main mx-16">{children}</div>
        <Footer />
      </div>
    </>
  );
}
