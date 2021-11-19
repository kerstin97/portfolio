import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Projects from '../components/projects'
import Hello from '../components/hello'
import Timeline from '../components/timeline'
import "@fontsource/ibm-plex-sans"
import { useColorMode, useColorModeValue, VStack } from "@chakra-ui/react"
import React from 'react'
import Navigation from '../components/navigation'
import AboutMe from '../components/aboutme'
import LeftSection from '../components/leftSection'
import Wave1 from '../components/svgs/wave1.js'
import Wave2 from '../components/svgs/wave2.js'
import Wave3 from '../components/svgs/wave3.js'
import Wave4 from '../components/svgs/wave4.js'
import { Button } from '@chakra-ui/react';

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
      </main>

       <footer className={styles.footer}>
       &copy; 2021 Kerstin Reichinger
      </footer>
    </div>
  )
}
