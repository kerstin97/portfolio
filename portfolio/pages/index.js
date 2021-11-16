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
import Wave1 from '../components/svgs/wave1.js'
import Wave2 from '../components/svgs/wave2.js'
import Wave3 from '../components/svgs/wave3.js'
import Wave4 from '../components/svgs/wave4.js'

export default function Home() {
  const {colorMode, toggleColorMode} = useColorMode();
  const bgColor = useColorModeValue('gray.50','whiteAlpha.50');
  const isDark = colorMode === 'dark'
  return (
    <div className={styles.container} bg={bgColor}>
      <Head>
        <title>Kerstin Reichinger</title>
        <meta name="description" content="My portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <LeftSection toggleColorMode={toggleColorMode} isDark={isDark}/>
        <VStack 
          width={["100%","100%", "auto", "auto"]} 
          pr={["","", "150px", "150px"]} 
          pl={["","", "150px", "150px"]} 
          className={styles.content}
        >
          <Hello/>
          <Wave1 
            fill={isDark ? "#1A202C" : "#fff"} 
            background={isDark ? "linear-gradient(180deg, rgba(26,32,44,1) 0%, rgba(49,55,66,1) 49%, rgba(27,33,45,1) 100%)" : "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(233,102,110,0.3981967787114846) 49%, rgba(255,255,255,1)"}
          />
          <Projects/>
          <Wave2 
              fill={isDark ? "#1A202C" : "#fff"} 
              background={isDark ? "linear-gradient(180deg, rgba(26,32,44,1) 0%, rgba(49,55,66,1) 49%, rgba(27,33,45,1) 100%)" : "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(233,102,110,0.3981967787114846) 49%, rgba(255,255,255,1)"}
            />
          <Timeline/>
          <Wave3 
              fill={isDark ? "#1A202C" : "#fff"} 
              background={isDark ? "linear-gradient(180deg, rgba(26,32,44,1) 0%, rgba(49,55,66,1) 49%, rgba(27,33,45,1) 100%)" : "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(233,102,110,0.3981967787114846) 49%, rgba(255,255,255,1)"}
            />
          <AboutMe/>
          <Wave4 
              fill={isDark ? "#1A202C" : "#fff"} 
              background={isDark ? "linear-gradient(180deg, rgba(26,32,44,1) 0%, rgba(49,55,66,1) 49%, rgba(27,33,45,1) 100%)" : "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(233,102,110,0.3981967787114846) 49%, rgba(255,255,255,1)"}
            />
        </VStack>
        <Navigation isDark={isDark} toggleColorMode={toggleColorMode}/>
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
