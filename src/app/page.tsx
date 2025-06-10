// pages/index.tsx

import Head from 'next/head'
import FormModal from './components/FromModal'

export default function Home() {
  return (
    <>
      <Head>
        <title className='bg-white'>Formulário</title>
      </Head>
      <main className="h-screen w-screen bg-gray-100">
        <FormModal />
      </main>
    </>
  )
}
