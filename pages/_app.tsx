import "../styles/globals.scss";
import { NextComponentType } from "next";
import { AppContext, AppInitialProps, AppProps } from "next/app";

const MyApp: NextComponentType<AppContext, AppInitialProps, AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
