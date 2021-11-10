import { Stack, Center, Heading, Text, Link, VStack } from '@chakra-ui/react';
import Project from './project';

export default function Projects() {
    return (
        <section id="projects">
            <Heading bgGradient="linear(to-l, yellow.400, orange.500, pink.400)" bgClip="text" size="2xl">Projects</Heading>
             <Stack direction="column" spacing="24px">
                 <Project 
                    title="DogDate" 
                    description="DogDate is a platform where dog owners can search for dogfriends (social media for dogs). Once the profile has been created, you can search for dog friends on the map. Either you contact the dog owner directly via the message function or you look at the profile." 
                    link="https://portfolio.fh-salzburg.ac.at/projects/2021-dog-date"
                />
                <Project 
                    title="BeeSave" 
                    description="DogDate is a platform where dog owners can search for dogfriends (social media for dogs). Once the profile has been created, you can search for dog friends on the map. Either you contact the dog owner directly via the message function or you look at the profile." 
                    link="https://portfolio.fh-salzburg.ac.at/projects/2021-dog-date"
                />
                <Project 
                    title="Portfolio with Next.js" 
                    description="DogDate is a platform where dog owners can search for dogfriends (social media for dogs). Once the profile has been created, you can search for dog friends on the map. Either you contact the dog owner directly via the message function or you look at the profile." 
                    link="https://portfolio.fh-salzburg.ac.at/projects/2021-dog-date"
                />
            </Stack>
        </section>
    )
}