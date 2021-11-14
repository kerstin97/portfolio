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
                <GridItem colSpan={1} ><Avatar boxSize="200px" name="Segun Adebayo" src="images/me.JPG" /></GridItem>
                <GridItem colSpan={4} margin="auto"><Text fontSize="xl">...and I am a web developer based in Austria with a passion for learning new stuff, hiking in the beautiful mountains, listen to loud music and push me to my personal limits in the gym. Currently studying Multimedia Technology at the University of Applied Sciences in Salzburg. </Text></GridItem>
            </Grid>
        </section> 
    )
}