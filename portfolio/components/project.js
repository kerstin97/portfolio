import { Heading, Text, Link, VStack } from '@chakra-ui/react';

export default function Project(props) {
    return (
        <VStack 
            flexBasis={["100%","100%","100%","45%"]} 
            p="20px" 
            m="20px" 
            borderRadius="70px" 
            boxShadow="inset 0 0 1em #e9666e"
        >
            <Heading 
                fontSize="2xl" 
                bgGradient="linear(to-l, yellow.400, orange.500, pink.400)" 
                bgClip="text"
            >
                {props.title}
            </Heading>

            <Text 
                fontSize="xl" 
                textAlign="center"
            >
                {props.description}
            </Text>

            <Link 
                href={props.link} 
                color= "brand.500"
                isExternal
            >
                <Text fontSize="xl">More Details</Text>
            </Link>
        </VStack>
    )
}