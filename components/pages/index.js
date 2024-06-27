import Head from 'next/head';
import QRCodeGenerator from '../components/QRCodeGenerator';

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <Head>
        <title>QR Code Generator</title>
        <meta name="description" content="Generate your QR codes easily" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>QR Code Generator</h1>
      <QRCodeGenerator />
    </div>
  );
}
