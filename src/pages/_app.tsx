import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Playfair_Display, Lora } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '700', '900'] });
const lora = Lora({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div style={{ fontFamily: lora.style.fontFamily }}>
      <Head>
        <link rel="icon" href="/BalasreeTanjorePaintingAcademyLogo.png" type="image/png" />
        <link rel="shortcut icon" href="/BalasreeTanjorePaintingAcademyLogo.png" type="image/png" />
      </Head>
      <Header />
      <main className="min-h-screen">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
