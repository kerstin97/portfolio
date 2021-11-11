import {Center, HStack, VStack, Link, Image,Heading } from '@chakra-ui/react';

export default function HireMe() {
  return (
      <section id="hireme">
        <VStack>
            <Heading bgGradient="linear(to-l, yellow.400, orange.500, pink.400)" bgClip="text" size="2xl">Wanna go on a hike with me?</Heading>
        <Center p={8}>
        <HStack spacing={4} align={'center'} maxW={'md'} w={'full'}>
            <Link href={"https://www.instagram.com/kersoleynsta/"} isExternal><Image src="images/instagram.svg" height="30px" alt="instagram"/></Link>
            <Link href={"https://www.facebook.com/kelly.rich.12"} isExternal><Image src="images/facebook.svg" height="30px" alt="facebook"/></Link>
            <Link href={"https://www.linkedin.com/in/kerstin-reichinger-b04130203/"} isExternal><Image src="images/linkedin.svg" height="30px" alt="linkedin"/></Link>
        </HStack>
        </Center>
        </VStack>
    </section>
  );
}