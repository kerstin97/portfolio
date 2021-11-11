import React, { useEffect, useCallback, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { Image, Heading, Text } from '@chakra-ui/react'
import { PrevButton, NextButton } from './EmblaCarouselButtons'

export default function AboutMe() {
    const [emblaRef, embla] = useEmblaCarousel({ loop: false }, [Autoplay()])
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

    const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
    const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
    const onSelect = useCallback(() => {
      if (!embla) return;
      setPrevBtnEnabled(embla.canScrollPrev());
      setNextBtnEnabled(embla.canScrollNext());
    }, [embla]);

    useEffect(() => {
        if (!embla) return;
        embla.on("select", onSelect);
        onSelect();
      }, [embla, onSelect])

    return (
        <section id="aboutme">
            <Heading bgGradient="linear(to-l, yellow.400, orange.500, pink.400)" bgClip="text" size="2xl">About me</Heading>
            <Text>I love hiking, meeting my friends, go to the gym and enjoy listen to music and go to music festivals</Text>
            <div className="embla" bg={'gray.50'}>
                    <div className="embla__viewport"  ref={emblaRef}>
                        <div className="embla__container">
                            <div className="embla__slide">
                                <div className="embla__slide__inner">
                                    <Image className="embla__slide__img" src={"images/me.jpg"} alt="A cool cat."/>
                                </div>
                            </div>
                            <div className="embla__slide">
                                <div className="embla__slide__inner">
                                    <Image className="embla__slide__img" src={"images/me.jpg"} alt="A cool cat."/>
                                </div>
                            </div>
                            <div className="embla__slide">
                                <div className="embla__slide__inner">
                                    <Image className="embla__slide__img" src={"images/me.jpg"} alt="A cool cat."/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
                    <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
                </div>
        </section>
      
    )
}