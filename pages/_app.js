import "../styles/globals.css";
import ResponsiveAppBar from "../components/ResponsiveAppBar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ResponsiveAppBar />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
