import Head from 'next/head'
import Layout from '../components/Layout';
import Recipe from '../components/Recipe';
import Livestream from '../components/Livestream';

export default function Index() {
  return (
    <div>
      <Head>
        <title>Spectral Nectar</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <body>
        <Layout>
          {"Welcome to Adrienne and David's Birthday Party Web Page!"}
          <br/>
          <br/>
          <Livestream />
          <Recipe />
        </Layout>
      </body>
    </div>
  );
}

