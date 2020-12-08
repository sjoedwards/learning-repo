import '../styles/globals.scss';
import Head from 'next/head';
import { Header } from '../components/molecules';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Frontend Showcase</title>
      </Head>
      <div className="u-margin-large">
        <Header />
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
