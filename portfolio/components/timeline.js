import {TimeIcon} from '@chakra-ui/icons';
import {Heading, Center, Text, Link} from '@chakra-ui/react';
import SectionHeading from './SectionHeading';

export default function Timeline() {    
    return (
        <section id="timeline">
            <SectionHeading title="Timeline" />   
            
            <div className="center-column">
                <div className="timeline-container">
                    <div className="timeline-body">
                        <div className="timeline-entry">
                            <Text className="timeline-entry-time" fontSize={["sm","lg","xl","xl"]}>2020 - now</Text>
                            <TimeIcon className="timeline-entry-icon" width="1.4em" height="1.4em" alt="timeline-clock-icon"></TimeIcon>
                            <div className="timeline-entry-content">
                                <div className="timeline-entry-title"><Heading fontSize={["sm","lg","xl","xl"]}>Salzburg University of Applied Sciences</Heading></div>
                                <div className="timeline-entry-discription"><i>
                                    <Text fontSize={["sm","lg","xl","xl"]}>This Study includes everything about Multimedia and web development and will finish bacholer as a full stack web dev</Text>
                                    <Link href="https://multimediatechnology.at" color="#E96685" target="_blank" rel="noopener noreferrer"><Text fontSize={["sm","lg","xl","xl"]}>https://multimediatechnology.at</Text></Link>
                                </i></div>
                            </div>
                        </div>
                        <div className="timeline-entry">
                            <Text className="timeline-entry-time" fontSize={["sm","lg","xl","xl"]}>2016-2020</Text>
                            <TimeIcon className="timeline-entry-icon" width="1.4em" height="1.4em" alt="timeline-clock-icon"></TimeIcon>
                            <div className="timeline-entry-content">
                                <div className="timeline-entry-title"><Heading fontSize={["sm","lg","xl","xl"]}>Software Developer and Project Manager @Porsche Informatik</Heading></div>
                                <div className="timeline-entry-discription"><i>
                                    <Text fontSize={["sm","lg","xl","xl"]}>I was part of the developer team for DasWeltauto. Languages: HTML5, CSS, Angular </Text>
                                    <Link href="https://www.dasweltauto.at/" color="#E96685" target="_blank" rel="noopener noreferrer"><Text fontSize={["sm","lg","xl","xl"]}>https://www.dasweltauto.at/</Text></Link>
                                    <Text fontSize={["sm","lg","xl","xl"]}>Later I lead the project Digitale Antragsstrecke/Porsche Bank Shop with some colleagues, which realizes the process of buying a car online. </Text>
                                    <Link href="https://www.porschebank.at/shop/fahrzeugsuche" color="#E96685" target="_blank" rel="noopener noreferrer"><Text fontSize={["sm","lg","xl","xl"]}>https://www.porschebank.at/shop/fahrzeugsuche</Text></Link>
                                </i></div>
                            </div>
                        </div>
                        <div className="timeline-entry">
                            <Text className="timeline-entry-time" fontSize={["sm","lg","xl","xl"]}>2011-2016</Text>
                            <TimeIcon className="timeline-entry-icon" width="1.4em" height="1.4em" alt="timeline-clock-icon"></TimeIcon>
                            <div className="timeline-entry-content">
                                <div className="timeline-entry-title"><Heading fontSize={["sm","lg","xl","xl"]}>Technical College Braunau</Heading></div>
                                <div className="timeline-entry-discription"><i>
                                    <Text fontSize={["sm","lg","xl","xl"]}>Electronics / Bionics </Text>
                                    <Text fontSize={["sm","lg","xl","xl"]}>Including Microcontroller Programming, Java, C++, Laboratory exercies...</Text>
                                    <Link href="https://www.htl-braunau.at/live" color="#E96685" target="_blank" rel="noopener noreferrer"><Text fontSize={["sm","lg","xl","xl"]}>https://www.htl-braunau.at/live</Text></Link>
                                </i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
