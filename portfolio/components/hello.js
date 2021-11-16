import {  GridItem, Grid, Avatar, Heading, Text } from "@chakra-ui/react"

export default function Hello() {
    return (
        <section id="hello">
            <Grid
            templateRows="0f,1fr"
            templateColumns="repeat(5, 1fr)"
            gap={4}
            p={"50px"}
            >
                <GridItem rowSpan={1} colSpan={5}><Heading  size="3xl"  bgGradient="linear(to-l, yellow.400, orange.500, pink.400)" bgClip="text">Hi, I&#39;m Kerstin...</Heading></GridItem>
                <GridItem colSpan={1} ><Avatar boxSize="200px" name="Segun Adebayo" src="images/me.JPG" boxShadow="2px 4px 15px 0px #000000"/></GridItem>
                <GridItem colSpan={4} margin="auto"><Text fontSize="xl">...and I&#39;m a web developer based in Austria with a passion for learning new stuff 👩‍💻. I&#39;m currently studying Multimedia Technology at the University of Applied Sciences in Salzburg 	
&#127891;. Feel free to explore my page to learn more about me! 🧭 </Text></GridItem>
            </Grid>
        </section> 
    )
}