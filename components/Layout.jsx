import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";

export default function Layout({ children }) {
    return(
        <>
            <Head>
                <title>Triistam - Website</title>
            </Head>
            <div className="container mx-auto">
                <Navbar />
                    {children}
                <Footer />
            </div>
        </>
    )
}