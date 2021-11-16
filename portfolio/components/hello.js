import {  GridItem, Flex, Avatar, Heading, Text } from "@chakra-ui/react"

export default function Hello() {
    return (
        <section id="hello">
            <Flex
                flexWrap="wrap"
                alignItems="center"
                textAlign={["center","center","start","start"]}
                pt={["50px","50px","20px","20px"]}
                pl={["20px","20px","50px","50px"]}
                pr={["20px","20px","50px","50px"]}
            >
                <Heading  
                    size="3xl" 
                    width="100%" 
                    mb="20px" 
                    bgGradient="linear(to-l, yellow.400, orange.500, pink.400)" 
                    bgClip="text"
                >
                    Hi, I&#39;m Kerstin...
                </Heading>

                <Avatar 
                    boxSize="200px" 
                    name="Segun Adebayo" 
                    src="images/me.JPG" 
                    boxShadow="2px 4px 15px 0px #000000" 
                    margin= {["auto",null,null,null]}
                />

                <Text 
                    flexGrow={[null,null,"5","5"]} 
                    flexBasis={[null,null,"5","5"]} 
                    ml={[null,null,"20px","20px"]}  
                    mt={["20px","20px","0","0"]} 
                    fontSize="xl"
                >
                    ...and I&#39;m a web developer based in Austria with a passion for learning new stuff 👩‍💻. I&#39;m currently studying Multimedia Technology at the University of Applied Sciences in Salzburg 	
                    &#127891;. Feel free to explore my page to learn more about me! 🧭 
                </Text>
            </Flex>
        </section> 
    )
}