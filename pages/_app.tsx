import "../styles/globals.css";
import Navbar from "../components/Navbar";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
