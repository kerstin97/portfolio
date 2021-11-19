
import { Heading, Center } from '@chakra-ui/react';

export default function SectionHeading(props) {
    return (
        <Center>
            <Heading 
                lineHeight={1.5}  
                bgGradient="linear(to-l, yellow.400, orange.500, pink.400)" 
                bgClip="text" 
                size="2xl"
            >
                {props.title}
            </Heading>
        </Center>

    )
}