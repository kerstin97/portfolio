import React from "react";
import { useColorMode, useColorModeValue, VStack, Box } from "@chakra-ui/react";
import { ColorModeScript } from "@chakra-ui/react";
import Head from "next/head";
import "@fontsource/ibm-plex-sans";
import styles from "../styles/Home.module.css";
import Wave1 from "../components/svgs/wave1.js";
import Wave2 from "../components/svgs/wave2.js";
import Wave3 from "../components/svgs/wave3.js";
import Wave4 from "../components/svgs/wave4.js";
import Projects from "../components/projects";
import Hello from "../components/hello";
import Timeline from "../components/timeline";
import Navigation from "../components/navigation";
import AboutMe from "../components/aboutme";
import LeftSection from "../components/leftSection";
import Skills from "../components/skills";
import HireMe from "../components/hireme";
import theme from "../theme";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.50");
  const isDark = colorMode === "dark";

  return (
    <Box className={styles.container} bg={bgColor}>
      <Head>
        <title>Kerstin Reichinger</title>
        <meta
          name="description"
          content="I am Kerstin, a web developer based in Austria with a passion for
          learning new stuff"
        />
        <meta
          property="og:description"
          content="I am Kerstin, a web developer based in Austria with a passion for
          learning new stuff"
        />
        <meta property="og:url" content="https://www.kerstin.dev" />
        <meta property="og:title" content="Kerstin Reichinger - Portfolio" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#232934"></meta>
      </Head>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <main className={styles.main}>
        <LeftSection toggleColorMode={toggleColorMode} isDark={isDark} />
        <VStack
          width={["100%", "100%", "auto", "auto"]}
          className={styles.content}
        >
          <Hello />
          <Wave1
            fill={isDark ? "#232934" : "#F7FAFC"}
            background={
              isDark
                ? "linear-gradient(180deg, rgba(35,41,52,1) 0%, rgba(60,71,71,1) 49%, rgba(35,41,52,1) 100%)"
                : "linear-gradient(180deg, rgba(247,250,252,1) 0%, rgba(233,102,110,0.3981967787114846) 49%, rgba(247,250,252,1) 100%)"
            }
          />
          <Projects />
          <Wave2
            fill={isDark ? "#232934" : "#F7FAFC"}
            background={
              isDark
                ? "linear-gradient(180deg, rgba(35,41,52,1) 0%, rgba(60,71,71,1) 49%, rgba(35,41,52,1) 100%)"
                : "linear-gradient(180deg, rgba(247,250,252,1) 0%, rgba(233,102,110,0.3981967787114846) 49%, rgba(247,250,252,1) 100%)"
            }
          />
          <Timeline />
          <Wave3
            fill={isDark ? "#232934" : "#F7FAFC"}
            background={
              isDark
                ? "linear-gradient(180deg, rgba(35,41,52,1) 0%, rgba(60,71,71,1) 49%, rgba(35,41,52,1) 100%)"
                : "linear-gradient(180deg, rgba(247,250,252,1) 0%, rgba(233,102,110,0.3981967787114846) 49%, rgba(247,250,252,1) 100%)"
            }
          />
          <Skills />
          <Wave4
            fill={isDark ? "#232934" : "#F7FAFC"}
            background={
              isDark
                ? "linear-gradient(180deg, rgba(35,41,52,1) 0%, rgba(60,71,71,1) 49%, rgba(35,41,52,1) 100%)"
                : "linear-gradient(180deg, rgba(247,250,252,1) 0%, rgba(233,102,110,0.3981967787114846) 49%, rgba(247,250,252,1) 100%)"
            }
          />
          <AboutMe />
          <Wave1
            fill={isDark ? "#232934" : "#F7FAFC"}
            background={
              isDark
                ? "linear-gradient(180deg, rgba(35,41,52,1) 0%, rgba(60,71,71,1) 49%, rgba(35,41,52,1) 100%)"
                : "linear-gradient(180deg, rgba(247,250,252,1) 0%, rgba(233,102,110,0.3981967787114846) 49%, rgba(247,250,252,1) 100%)"
            }
          />
          <HireMe />
          <Wave2
            fill={isDark ? "#232934" : "#F7FAFC"}
            background={
              isDark
                ? "linear-gradient(180deg, rgba(35,41,52,1) 0%, rgba(60,71,71,1) 49%, rgba(35,41,52,1) 100%)"
                : "linear-gradient(180deg, rgba(247,250,252,1) 0%, rgba(233,102,110,0.3981967787114846) 49%, rgba(247,250,252,1) 100%)"
            }
          />
        </VStack>
        <Navigation isDark={isDark} toggleColorMode={toggleColorMode} />
      </main>

      <footer className={styles.footer}>
        <p className={styles.copyright}>&copy; 2021 Kerstin Reichinger</p>
        <a
          className={styles.link}
          href="https://icons8.com/icon/38561/postgresql"
        >
          PostgreSQL icon by Icons8
        </a>
        <a
          className={styles.link}
          href="https://icons8.com/icon/55251/c-sharp-logo"
        >
          C Sharp Logo icon by Icons8
        </a>
        <a
          className={styles.link}
          href="https://icons8.com/icon/ZoxjA0jZDdFZ/kotlin"
        >
          Kotlin icon by Icons8
        </a>
        <a
          className={styles.link}
          href="https://icons8.com/icon/UFXRpPFebwa2/mysql-logo"
        >
          MySQL Logo icon by Icons8
        </a>
        <a
          className={styles.link}
          href="https://icons8.com/icon/NfbyHexzVEDk/react"
        >
          React icon by Icons8
        </a>
        <a
          className={styles.link}
          href="https://icons8.com/icon/22189/ruby-programming-language"
        >
          Ruby Programming Language icon by Icons8
        </a>
        <a
          className={styles.link}
          href="https://icons8.com/icon/121463/php-logo"
        >
          PHP Logo icon by Icons8
        </a>
        <a className={styles.link} href="https://icons8.com/icon/107497/css3">
          CSS3 icon by Icons8
        </a>
        <a className={styles.link} href="https://icons8.com/icon/20909/html-5">
          Html 5 icon by Icons8
        </a>
        <a
          className={styles.link}
          href="https://icons8.com/icon/gYCTehfTlYk5/javascript-logo"
        >
          JavaScript Logo icon by Icons8
        </a>
      </footer>
    </Box>
  );
}
