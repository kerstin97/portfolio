import { VStack,Text, Link, IconButton, Flex } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';


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
        paddingBottom: '5px',
        background: 'url("images/star.svg")',
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
            <VStack className="navigation" pos="fixed" top="0" display={['none','none','flex','flex']} justifyContent="center" flexDir="column" height="100%">
                <Link onClick={() => setSelected('#')}  fontSize="2xl" style={router.asPath ==="/#" || router.asPath ==="/" ? style : null}>Hello</Link>
                <div className="vl"></div>
                <Link onClick={() => setSelected('#projects')} fontSize="2xl" style={router.asPath ==="/#projects" ? style : null}>Projects</Link>
                <div className="vl"></div>
                <Link onClick={() => setSelected('#timeline')} fontSize="2xl" style={router.asPath ==="/#timeline" ? style : null}>Timeline</Link>
                <div className="vl"></div>
                <Link onClick={() => setSelected('#aboutme')} fontSize="2xl" style={router.asPath ==="/#aboutme" ? style : null}>About Me</Link>
                <div className="vl"></div>
                <Link onClick={() => setSelected('#hireme')} fontSize="2xl" style={router.asPath ==="/#hireme" ? style : null}>Hire Me</Link>
            </VStack>

            <Flex>
                <IconButton
                    aria-label="Open Menu"
                    size="lg"
                    mr={2}
                    icon={<HamburgerIcon />}
                    display={['flex','flex','none','none']}
                    position="fixed"
                    top="1rem"
                    right="1rem"
                    onClick={()=>changeDisplay('flex')}
                />
            </Flex>


            <Flex 
                w="100vw"
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
                        mt="1rem"
                        mr="2rem"
                        aria-label="Close Menu"
                        size="lg"
                        icon={
                            <CloseIcon/>
                        }
                        onClick={()=>changeDisplay('none')}

                    />
                </Flex>
                <Flex
                    flexDir="column"
                    align="center"
                >
                    <Link onClick={() => selectMobile('#')}  fontSize="2xl" borderTop="1px solid #fff" borderBottom="1px solid #fff" width="100%" textAlign="center" style={router.asPath ==="/#" || router.asPath ==="/" ? mobileActive : null}>Hello</Link>
                    <Link onClick={() => selectMobile('#projects')} fontSize="2xl" borderBottom="1px solid #fff" textAlign="center" width="100%"  style={router.asPath ==="/#projects" ? mobileActive : null}>Projects</Link>
                    <Link onClick={() => selectMobile('#timeline')} fontSize="2xl" borderBottom="1px solid #fff" textAlign="center" width="100%" style={router.asPath ==="/#timeline" ? mobileActive : null}>Timeline</Link>
                    <Link onClick={() => selectMobile('#aboutme')} fontSize="2xl" borderBottom="1px solid #fff" textAlign="center" width="100%" style={router.asPath ==="/#aboutme" ? mobileActive : null}>About Me</Link>
                    <Link onClick={() => selectMobile('#hireme')} fontSize="2xl" borderBottom="1px solid #fff" textAlign="center" width="100%" style={router.asPath ==="/#hireme" ? mobileActive : null}>Hire Me</Link>
                </Flex>

            </Flex>
        </>

    )
}