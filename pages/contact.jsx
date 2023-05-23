import Head from "next/head";
import GitHub from "@/public/icons/github.svg";
import Image from "next/image";

export default function () {
  return (
    <>
      <Head>
        <title>Contact with Triistam</title>
      </Head>
      <h1 className="text-3xl text-center">Contact</h1>
      <div className="contact container mx-auto flex justify-center text-center">
        <div className="socials">
          <a href="https://github.com/triistam">
            <p className="social">GitHub</p>
          </a>
          <a href="https://steamcommunity.com/profiles/76561199507208225">
            <p className="social">Steam</p>
          </a>
          <a href="https://discord.com/users/988837667523403816">
            <p className="social">Discord</p>
          </a>
          <a href="https://triistam.telegram.me">
            <p className="social">Telegram</p>
          </a>
        </div>
      </div>
    </>
  );
}
