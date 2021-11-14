import {VStack, Link, Image} from '@chakra-ui/react';

export default function Social() {
  return (
        <VStack spacing={4} align={'center'} maxW={'md'} w={'full'}>
            <Link href={"https://www.instagram.com/kersoleynsta/"} isExternal><Image src="images/instagram.svg" height="30px" alt="instagram"/></Link>
            <Link href={"https://www.facebook.com/kelly.rich.12"} isExternal><Image src="images/facebook.svg" height="30px" alt="facebook"/></Link>
            <Link href={"https://www.linkedin.com/in/kerstin-reichinger-b04130203/"} isExternal><Image src="images/linkedin.svg" height="30px" alt="linkedin"/></Link>
        </VStack>
  );
}