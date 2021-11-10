import { VStack,Text, Link } from '@chakra-ui/react';

if(typeof window === 'object'){
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}



export default function Navigation() {
    
    return (
        <section>
        <VStack pos="fixed" top="0" right="0" width="50px">
            <Link href="#hello">Hello</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#timeline">Timeline</Link>
            <Link href="#about">About Me</Link>
            <Link href="#hireme">Hire Me</Link>
        </VStack>
        </section>
    )
}