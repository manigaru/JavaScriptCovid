import Head from 'next/head';
import {Navbar, Nav, NavDropdown, Button} from 'react-bootstrap';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h2>Hello World!!</h2>
      </main>
    </div>
  )
}
