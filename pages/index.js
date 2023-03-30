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
        <p className="description">hi</p>
      </main>

      <Footer />
    </div>
  )
}
