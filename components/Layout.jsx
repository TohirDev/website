import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Eater&display=swap"
          rel="stylesheet"
        />
        {/* <meta name="description" content="Weakling preparing to explode with his unexpected moves. Full of sorrows" />
      <meta name="author" content="Triistam" />
      <meta name="keywords" content="Triistam akumaru user6879" />
      <meta name="og:image" content="https://i.imgur.com/nDxSgWi.png"/>
      <meta name="og:title" content="Triistam"/>
      <meta name="og:type" content="profile"/>
      <meta name="og:url" content="https://triistam.vercel.app/"/> */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Triistam' Website" />
        <meta
          property="og:description"
          content="Weakling preparing to explode with his unexpected moves."
        />
        <meta property="og:url" content="https://triistam.vercel.app" />
        <meta
          property="og:image"
          content="https://camo.githubusercontent.com/75a19770e9bf3991cf8c08c09758aa1fa4a3b4161f0c014d51e639d2fc28fc70/68747470733a2f2f692e696d6775722e636f6d2f6e4478536757692e706e67"
        />
        <meta property="og:site_name" content="Triistam's Website " />
      </Head>
      <div className="container mx-auto" id="app">
        <Navbar />
        <div className="main mx-16">{children}</div>
        <Footer />
      </div>
    </>
  );
}
