import Head from 'next/head'

export async function getServerSideProps() {
  return {
    redirect: {
      destination: 'https://www.romancatholichs.com',
      permanent: false,
    },
  }
}

export default function Home() {
  return (
    <>
      <Head>
        <title>rchs.co</title>
        <meta name="description" content="Link shortener for the Roman Catholic High School of Philadelphia" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
      </div>
    </>
  )
}
