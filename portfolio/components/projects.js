import { Flex } from '@chakra-ui/react';
import Project from './project';
import SectionHeading from './SectionHeading';

export default function Projects() {
    return (
        <section id="projects">
            <SectionHeading title="Projects" />   

             <Flex  
                flexWrap="wrap" 
                justifyContent="center" 
                flexDir="row" 
                spacing="20px"
            >
                <Project 
                    title="DogDate" 
                    description="DogDate is my first multimedia project at university. It's a platform where dog owners can search for dogfriends (social media for dogs). Once the profile has been created, you can search for dog friends on the map. Either you contact the dog owner directly via the message function or you look at the profile." 
                    link="https://portfolio.fh-salzburg.ac.at/projects/2021-dog-date"
                />
                <Project 
                    title="BeeSave" 
                    description="BeeSave was my diploma thesis at the technical college. It is a semiautomatic device for beekeepers to reduce the varroa mite inventory in the beehive. It initiates an automatic evaporation process of formic acid in the beehive. The beekeeper can adjust settings with the control panel, like temperature or aerator settings. Beside laboratoric experiments we developed the control panel with an Arduino microcontroller and produced the mechanical divices on our own." 
                    link="https://kurier.at/leben/kiku/ax-award-jugendliche-erfinden-schlaue-technik/196.339.653"
                />
                <Project 
                    title="In progress ..." 
                    description="Don't miss new stuff, I'm currently doing some other cool projects." 
                    link="/"
                />
            </Flex>
        </section>
    )
}