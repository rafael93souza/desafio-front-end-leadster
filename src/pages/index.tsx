import Head from 'next/head'
import { Plus_Jakarta_Sans, } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const plusJakartaSans = Plus_Jakarta_Sans({ 
    weight: ['300','400','600','700'],
    subsets: ['latin'] 
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Leadster: Menos conversinha, Mais Conversão</title>
        <meta name="description" content="Leadster Mais Conversão" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${plusJakartaSans.className}`}>
            <h1>Hello World</h1>
      </main>
    </>
  )
}
