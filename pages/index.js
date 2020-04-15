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
          <br />
          <br />
          {'If you made it here, that means YOU are invited to our '}
          <b>
            <a href='https://www.facebook.com/events/809405006214044/'>
              Virtual Birthday Party
            </a>
          </b>

          <br />
          <br />
          <Livestream />
          <Recipe />
        </Layout>
      </body>
    </div>
  );
}
