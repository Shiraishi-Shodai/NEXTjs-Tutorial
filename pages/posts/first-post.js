import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <>
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>

            <Script
                        src="https://connect.facebook.net/en_US/sdk.js"
                        strategy="lazyOnload" //外部スクリプトを読み込むタイミングを指定(ここではブラウザーの暇な時間にこの特定のスクリプトを遅延してロードするように指示)
                        onLoad={() =>
                        console.log(`script loaded correctly, window.FB has been populated`)
                        }
            />

            <h1>First Post</h1>
            <h2>
                <Link href='/'>Back to Home</Link>
            </h2>
        </Layout>
    </>
  )
}
