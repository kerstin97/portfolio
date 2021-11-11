import { VStack,Text, Link } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';


export default function Navigation() {
    const router = useRouter()

    function setSelected(path) {
        router.push(path);
        console.log(router.asPath)
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
        webkitAnimation: 'move 15s linear infinite',
        animationPlayState: 'paused',
        textDecoration: 'none',
        backgroundColor: 'transparent',
        webkitTextDecorationSkip: 'objects',

    }


     useEffect(() => {

         if(typeof window === 'object'){
        
             const hello = document.getElementById("hello");
             const projects = document.getElementById("projects");
             const timeline = document.getElementById("timeline");

            
            window.addEventListener('scroll', function (e) {
                if(window.scrollY < hello.offsetTop) {
                    setSelected('#hello');
                }
                else if (window.scrollY < projects.offsetTop)
                {
                    setSelected('#projects');
                }
                else if (window.scrollY < timeline.offsetTop)
                {
                    setSelected('#timeline');
                }
                else {
                    setSelected('#timeline');
                }
            });
        }
     })

    return (

        <VStack className="navigation" pos="fixed" top="0" right="50px" display="flex" justifyContent="space-evenly" flexDir="column" height="100%">
            <Link onClick={() => setSelected('#hello')}  fontSize="2xl" style={router.asPath ==="/#hello" ? style : null}>Hello</Link>
            <Link onClick={() => setSelected('#projects')} fontSize="2xl" style={router.asPath ==="/#projects" ? style : null}>Projects</Link>
            <Link onClick={() => setSelected('#timeline')} fontSize="2xl" style={router.asPath ==="/#timeline" ? style : null}>Timeline</Link>
            <Link onClick={() => setSelected('#hello')} fontSize="2xl" style={router.asPath ==="/#hello" ? style : null}>About Me</Link>
            <Link onClick={() => setSelected('#')} fontSize="2xl" style={router.asPath ==="/#" ? style : null}>Hire Me</Link>
        </VStack>

    )
}