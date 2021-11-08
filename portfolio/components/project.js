
import { Heading, Text, Link, VStack } from '@chakra-ui/react';

export default function Project(props) {
    return (
        <VStack>
            <Heading bgClip="text" bgGradient="linear(to-l, yellow.400, orange.500, pink.400)">{props.title}</Heading>
            <Text>{props.description}</Text>
            <Link href={props.link} isExternal>
                More Details
            </Link>
        </VStack>
    )
}