import {  GridItem, Grid, Avatar, Heading, Text } from "@chakra-ui/react"

export default function Hello() {
    return (
        <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
        >
            <GridItem rowSpan={1} colSpan={5}><Heading  size="3xl" pb="20px" bgGradient="linear(to-l, yellow.400, orange.500, pink.400)" bgClip="text">Hi, I am Kerstin...</Heading></GridItem>
            <GridItem colSpan={1} ><Avatar boxSize="200px" name="Segun Adebayo" src="images/me.JPG" /></GridItem>
            <GridItem colSpan={4} margin="auto"><Text>...and I am a developer. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</Text></GridItem>
        </Grid>
    )
}