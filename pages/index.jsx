import Image from "next/image";
import Avatar from "@/public/ava.jpg";
import Head from "next/head";

export default function () {
  return (
    <>
    <Head>
      <title>Triistam - Website</title>
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
