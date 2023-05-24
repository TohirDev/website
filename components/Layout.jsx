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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Nextra" />
        <meta property="og:description" content="The next site builder" />
        <link
          rel="icon"
          type="image/x-icon"
          href="https://go.dev/blog/go-brand/Go-Logo/SVG/Go-Logo_Aqua.svg"
        />
        <meta
          name="og:description"
          content="O'zbek dasturchilari tomonidan qo'llab quvvatlanadigan Golang hamjamiyati."
        />
        <meta
          name="description"
          content="O'zbek dasturchilari tomonidan qo'llab quvvatlanadigan Golang hamjamiyati."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Aqua.png"
        />
        <meta name="twitter:site:domain" content="docs-golanguz.vercel.app" />
        <meta name="twitter:url" content="https://docs-golanguz.vercel.app/" />
        <meta
          name="og:title"
          content={title ? title + " – Golang" : "Golang"}
        />
        <meta
          name="og:image"
          content="https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Aqua.png"
        />
        <meta name="apple-mobile-web-app-title" content="Golang Uzbekistan" />
      </Head>
      <div className="container mx-auto" id="app">
        <Navbar />
        <div className="main mx-16">{children}</div>
        <Footer />
      </div>
    </>
  );
}
