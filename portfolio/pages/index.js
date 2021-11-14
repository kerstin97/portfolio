import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Projects from '../components/projects'
import Hello from '../components/hello'
import Timeline from '../components/timeline'
import "@fontsource/ibm-plex-sans"
import { Grid, GridItem, useColorMode, useColorModeValue, Button, Container, VStack } from "@chakra-ui/react"
import React from 'react'
import Navigation from '../components/navigation'
import AboutMe from '../components/aboutme'
import LeftSection from '../components/leftSection'

export default function Home() {
  const {toggleColorMode} = useColorMode();
  const bgColor = useColorModeValue('gray.50','whiteAlpha.50');
  return (
    <div className={styles.container} bg={bgColor}>
      <Head>
        <title>Kerstin Reichinger</title>
        <meta name="description" content="My portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <LeftSection toggleColorMode={toggleColorMode} bgColor={bgColor}/>
        <VStack className={styles.content}>
          <Hello/>
            <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="#1A202C" d="M0,256L30,229.3C60,203,120,149,180,149.3C240,149,300,203,360,224C420,245,480,235,540,208C600,181,660,139,720,144C780,149,840,203,900,186.7C960,171,1020,85,1080,85.3C1140,85,1200,171,1260,218.7C1320,267,1380,277,1410,282.7L1440,288L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
            </svg>
          
          <Projects/>
          <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#1A202C"  d="M0,160L48,176C96,192,192,224,288,229.3C384,235,480,213,576,197.3C672,181,768,171,864,176C960,181,1056,203,1152,224C1248,245,1344,267,1392,277.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
          <Timeline/>
          <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#1A202C" d="M0,96L30,133.3C60,171,120,245,180,261.3C240,277,300,235,360,186.7C420,139,480,85,540,101.3C600,117,660,203,720,234.7C780,267,840,245,900,224C960,203,1020,181,1080,160C1140,139,1200,117,1260,106.7C1320,96,1380,96,1410,96L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
          </svg>
          <AboutMe/>
          <svg  className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="#1A202C" d="M0,256L30,229.3C60,203,120,149,180,149.3C240,149,300,203,360,224C420,245,480,235,540,208C600,181,660,139,720,144C780,149,840,203,900,186.7C960,171,1020,85,1080,85.3C1140,85,1200,171,1260,218.7C1320,267,1380,277,1410,282.7L1440,288L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
          </svg>
        </VStack>
        <Navigation/>
          {/*<Grid
            h="200px"
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(5, 1fr)"
            gap={4}
          >
            <GridItem rowSpan={2} colSpan={1} bg="tomato" />
            <Me/>  
          </Grid>
           <Grid>
            <Projects/>
            <Button onClick={toggleColorMode}>klick</Button>
          </Grid> */}

      
      

      </main>

      {/* <footer className={styles.footer}>
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
      </footer> */}
    </div>
  )
}
