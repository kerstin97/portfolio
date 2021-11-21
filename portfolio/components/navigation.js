import { VStack, Link, IconButton, Flex, Image, Center, Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import Social from './social';
import Logo from './svgs/logo';


export default function Navigation(props) {
    const router = useRouter()
    const [display, changeDisplay] = useState('none')

    function setSelected(path) {
        router.push(path);
    }

    function selectMobile(path) {
        changeDisplay('none');
        setSelected(path);
    }

    const style = {
        color: '#E96685',
        paddingBottom: '7px',
        background: 'url("assets/star.svg")',
        backgroundRepeat: 'repeat',
        backgroundPositionX: '0%',
        backgroundPositionY: '0%',
        backgroundSize: 'auto auto',
        backgroundRepeat: 'repeat-x',
        backgroundSize: '15px 10px',
        backgroundPosition: '2px 29px',
        animation: 'move 15s linear infinite',
        WebkitAnimation: 'move 15s linear infinite',
        animationPlayState: 'paused',
        textDecoration: 'none',
        backgroundColor: 'transparent',
        WebkitTextDecorationSkip: 'objects',
    }

    const mobileActive = {
        color: '#E96685',
    }

      //useEffect(() => {
    //      if(typeof window === 'object'){
        
    //          const hello = document.getElementById("hello");
    //          const projects = document.getElementById("projects");
    //          const timeline = document.getElementById("timeline");
    
    //         window.addEventListener('scroll', function (e) {
    //             if(window.scrollY < hello.offsetTop) {
    //                 setSelected('#hello');
    //             }
    //             else if (window.scrollY < projects.offsetTop)
    //             {
    //                 setSelected('#projects');
    //             }
    //             else if (window.scrollY < timeline.offsetTop)
    //             {
    //                 setSelected('#timeline');
    //             }
    //             else {
    //                 setSelected('#timeline');
    //             }
    //         });
    //     }
    //  })

    return (
        <>
            <VStack 
                className="navigation" 
                pos="fixed" 
                top="0" 
                display={['none','none','flex','flex']} 
                justifyContent="center" 
                flexDir="column" 
                height="100%"
            >
                <Link
                  _hover={style} 
                onClick={() => setSelected('#')}  fontSize={[null,"xl","xl","2xl"]} style={router.asPath ==="/#" || router.asPath ==="/" ? style : null}>Hello</Link>
                <div className="vl"></div>
                <Link _hover={style}  onClick={() => setSelected('#projects')} fontSize={[null,"xl","xl","2xl"]} style={router.asPath ==="/#projects" ? style : null }>Projects</Link>
                <div className="vl"></div>
                <Link _hover={style}  onClick={() => setSelected('#timeline')} fontSize={[null,"xl","xl","2xl"]} style={router.asPath ==="/#timeline" ? style : null}>Timeline</Link>
                <div className="vl"></div>
                <Link _hover={style}  onClick={() => setSelected('#aboutme')} fontSize={[null,"xl","xl","2xl"]} style={router.asPath ==="/#aboutme" ? style : null}>About Me</Link>
                <div className="vl"></div>
                <Link _hover={style} onClick={() => setSelected('#skills')} fontSize={[null,"xl","xl","2xl"]} style={router.asPath ==="/#skills" ? style : null}>Skills</Link>
                <div className="vl"></div>
                <Link _hover={style} onClick={() => setSelected('#hireme')} fontSize={[null,"xl","xl","2xl"]} style={router.asPath ==="/#hireme" ? style : null}>Hire Me</Link>
            </VStack>

            <Flex 
                display={['flex','flex','none','none']} 
                position="fixed" 
                top="0" 
                justifyContent="space-between" 
                alignItems="center" 
                width="100%"
                bgColor={props.isDark ? "#1A202C" : "#eabebe"}
            >
                <Box paddingTop="15">
                    <Logo fill={props.isDark ? "#fff" : "#303641"} alt="Logo"/>
                </Box>

                <Center>
                    <Social direction="row"/>
                </Center>

                <Flex>
                    <Image src={"assets/theme.svg"} width="30px" alt="mode" onClick={props.toggleColorMode}/>
                    <IconButton
                        aria-label="Open Menu"
                        size="lg"
                        variant="outline"
                        mr={2}
                        ml={2}
                        icon={<HamburgerIcon />}
                        background="none"
                        colorScheme="brand"
                        onClick={()=>changeDisplay('flex')}
                    />
                </Flex>
            </Flex>

            <Flex 
                w="100%"
                h="100vh"
                bgColor={props.isDark ? "#1A202C" : "#eabebe"}
                zIndex={30}
                pos="fixed"
                top="0"
                left="0"
                overflowY="auto"
                flexDir="column"
                display={display}
            >
                <Flex justify="flex-end">
                    <IconButton
                        mt="20px"
                        mr={2}
                        aria-label="Close Menu"
                        size="lg"
                        variant="outline"
                        background="none"
                        colorScheme="brand"
                        icon={
                            <CloseIcon/>
                        }
                        onClick={()=>changeDisplay('none')}
                    />
                </Flex>
                <Flex
                    flexDir="column"
                    align="center"
                    pt="10px"
                >
                    <Link onClick={() => selectMobile('#')}  fontSize="2xl" borderTop="1px solid #fff" borderBottom="1px solid #fff" width="100%" textAlign="center" style={router.asPath ==="/#" || router.asPath ==="/" ? mobileActive : null}>Hello</Link>
                    <Link onClick={() => selectMobile('#projects')} fontSize="2xl" borderBottom="1px solid #fff" textAlign="center" width="100%"  style={router.asPath ==="/#projects" ? mobileActive : null}>Projects</Link>
                    <Link onClick={() => selectMobile('#timeline')} fontSize="2xl" borderBottom="1px solid #fff" textAlign="center" width="100%" style={router.asPath ==="/#timeline" ? mobileActive : null}>Timeline</Link>
                    <Link onClick={() => selectMobile('#aboutme')} fontSize="2xl" borderBottom="1px solid #fff" textAlign="center" width="100%" style={router.asPath ==="/#aboutme" ? mobileActive : null}>About Me</Link>
                    <Link onClick={() => selectMobile('#skills')} fontSize="2xl" borderBottom="1px solid #fff" textAlign="center" width="100%" style={router.asPath ==="/#skills" ? mobileActive : null}>Skills</Link>
                    <Link onClick={() => selectMobile('#hireme')} fontSize="2xl" borderBottom="1px solid #fff" textAlign="center" width="100%" style={router.asPath ==="/#hireme" ? mobileActive : null}>Hire Me</Link>
                </Flex>
            </Flex>
        </>
    )
}