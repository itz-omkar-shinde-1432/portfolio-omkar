import '../styles/globals.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
