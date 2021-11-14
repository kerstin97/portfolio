
import { Heading, Text, Link, VStack } from '@chakra-ui/react';

export default function Project(props) {
    return (
        <VStack flexBasis="45%" p="20px" m="20px" borderRadius="70px" boxShadow="inset 0 0 1em #e9666e">
            <Heading fontSize="xl" bgGradient="linear(to-l, yellow.400, orange.500, pink.400)" bgClip="text">{props.title}</Heading>
            <Text>{props.description}</Text>
            <Link href={props.link} isExternal>
                More Details
            </Link>
        </VStack>
    )
}