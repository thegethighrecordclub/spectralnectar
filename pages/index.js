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
          <br />
          <br />
          {'Wowowoowow what a great time! David and I had such a fun time streaming our birthday party. We might just have to stream again... so stay tuned for that.' }
          <br />
          <br />
          <Livestream />
          <Recipe />
        </Layout>
      </body>
    </div>
  );
}
