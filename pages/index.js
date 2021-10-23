import Head from 'next/head'
import Nav from '../components/Nav'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-blue-100">
      <Head>
        <title>PicDaisy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
    </div>
  )
}
