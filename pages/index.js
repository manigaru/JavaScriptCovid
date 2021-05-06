import Head from 'next/head';
import NavBar from '../components/NavBar';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Covid19 Vaccine Notifier</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavBar/>
      </main>
    </div>
  )
}
