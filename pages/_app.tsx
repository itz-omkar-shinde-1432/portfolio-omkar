import '../styles/globals.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Head>
        <title>Omkar Portfolio</title>
        {/* Load reCAPTCHA script globally */}
        <script src="https://www.google.com/recaptcha/api.js" async defer></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
