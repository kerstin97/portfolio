import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Projects from '../components/projects'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kerstin Reichinger</title>
        <meta name="description" content="My portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
       <Image src="/images/me.JPG" alt="Myself" width={200} height={300}/>
       <p>Hello, I am Kerstin!</p>
       <Projects></Projects>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
