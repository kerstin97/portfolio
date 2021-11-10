import {TimeIcon} from '@chakra-ui/icons';
import {Heading} from '@chakra-ui/react';
export default function Timeline() {
    return (
        <section id="timeline">
        <Heading bgGradient="linear(to-l, yellow.400, orange.500, pink.400)" bgClip="text" size="2xl">Timeline</Heading>
        <div className="center-column">
            <div className="timeline-container">
                <div className="timeline-body">
                    <div className="timeline-entry">
                        <div className="timeline-entry-time">2020 - present</div>
                        <TimeIcon className="timeline-entry-icon" alt="timeline-clock-icon"></TimeIcon>
                        <div className="timeline-entry-content">
                            <div className="timeline-entry-title"><h3>Salzburg University of Applied Sciences</h3></div>
                            <div className="timeline-entry-discription"><i>
                                <p>This Study includes everything about Multimedia and web development and will finish bacholer as a full stack web dev</p>
                                <a href="https://multimediatechnology.at" target="_blank" rel="noopener noreferrer">https://multimediatechnology.at</a>
                            </i></div>
                        </div>
                    </div>
                    <div className="timeline-entry">
                        <div className="timeline-entry-time">2016-2020</div>
                        <TimeIcon className="timeline-entry-icon" alt="timeline-clock-icon"></TimeIcon>
                        <div className="timeline-entry-content">
                            <div className="timeline-entry-title"><h3>Software Developer and Project Manager @Porsche Informatik</h3></div>
                            <div className="timeline-entry-discription"><i>
                                <p>I was part of the developer team for DasWeltauto. Languages: HTML5, CSS, Angular </p>
                                <a href="https://www.dasweltauto.at/" target="_blank" rel="noopener noreferrer">https://www.dasweltauto.at/</a>
                                <p>Later I lead the project 'Digitale Antragsstrecke/Porsche Bank Shop' with some colleagues, which realizes the process of buying a car online. </p>
                                <a href="https://www.porschebank.at/shop/fahrzeugsuche" target="_blank" rel="noopener noreferrer">https://www.porschebank.at/shop/fahrzeugsuche</a>
                            </i></div>
                        </div>
                    </div>
                    <div className="timeline-entry">
                        <div className="timeline-entry-time">2011-2016</div>
                        <TimeIcon className="timeline-entry-icon" alt="timeline-clock-icon"></TimeIcon>
                        <div className="timeline-entry-content">
                            <div className="timeline-entry-title"><h3>Technical College Braunau</h3></div>
                            <div className="timeline-entry-discription"><i>
                                <p>Electronics / Bionics </p>
                                <p>Including Microcontroller Programming, Java, C++, Laboratory exercies...</p>
                                <a href="https://www.htl-braunau.at/live" target="_blank" rel="noopener noreferrer">https://www.htl-braunau.at/live</a>
                            </i></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}
