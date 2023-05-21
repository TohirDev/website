import Image from "next/image";
import Avatar from "@/public/ava.jpg";
import Head from "next/head";

export default function () {
  return (
    <>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Eater&display=swap" rel="stylesheet" /> 
    </Head>
      <div>
        <div className="avatar mt-12">
        <Image src={Avatar} className="text-center w-72 rounded-full my-3" width={200}
        height={200}
        alt="Picture of the author" />
      </div>

        <h1 className="text-4xl text-center my-5 nick">TRIISTAM</h1>
        <p className="text-center text-2xl my-5 quote">Weakling preparing to explode with his unexpected moves.</p>
      </div>
    </>
  );
}
