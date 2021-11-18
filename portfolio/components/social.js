import {Stack, Link, Image} from '@chakra-ui/react';

export default function Social(props) {
  return (
        <Stack direction={props.direction} spacing={4} align={'center'} maxW={'md'} w={'full'}>
            <Link href={"https://www.instagram.com/kersoleynsta/"} isExternal><Image src="assets/instagram.svg" height="30px" alt="instagram"/></Link>
            <Link href={"https://www.facebook.com/kelly.rich.12"} isExternal><Image src="assets/facebook.svg" height="30px" alt="facebook"/></Link>
            <Link href={"https://www.linkedin.com/in/kerstin-reichinger-b04130203/"} isExternal><Image src="assets/linkedin.svg" height="30px" alt="linkedin"/></Link>
        </Stack>
  );
}