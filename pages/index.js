import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>sproink</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="sproink" />
        <p className="description">socials:</p>
        <p classname="socials" href="reddit.com/user/TESVE791">reddit</p>
        <p classname="socials 2" href="github.com/sproinker">github</p>
      </main>
      
      </Footer>
    </div>
  )
}
