import Head from "next/head";

export default function () {
  return (
    <>
      <Head>
        <title>Triistam's Setup!</title>
      </Head>
      <h1 className="text-3xl text-center">Poor Setup</h1>
      <div className="setup">
        <div className="flex">
          <div className="up">
            <p className="element">Laptop: SAMSUNG ELECTRONICS</p>
            <p className="element">CPU: Intel i7-3630QM (8) @ 3.400GHz</p>
          </div>
          <div className="bottom">
            <p className="element">
              GPU: NVIDIA GeForce GT 620M/630M/635M/640M LE
            </p>
            <p className="element">RAM: 6GB(2+4) GB DDR3</p>
          </div>
        </div>
      </div>
      <h1 className="element system text-center">OS: EndeavourOS</h1>
      
    </>
  );
}
