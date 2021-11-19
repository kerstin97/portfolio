import React, { useEffect, useCallback, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { Image, Box } from '@chakra-ui/react'
import { PrevButton, NextButton } from './EmblaCarouselButtons'
import SectionHeading from './SectionHeading'

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
        <Box w="100%">
            <section id="aboutme">
                <SectionHeading title="About me" />
                <div className="embla" >
                    <div className="embla__viewport"  ref={emblaRef}>
                        <div className="embla__container">
                            <div className="embla__slide">
                                <div className="embla__slide__inner">
                                    <Image 
                                        className="embla__slide__img" 
                                        src={"images/mountain1.jpg"} 
                                        alt="Me in the Mountains."/>
                                </div>
                            </div>
                            <div className="embla__slide">
                                <div className="embla__slide__inner">
                                    <Image 
                                        className="embla__slide__img" 
                                        src={"images/mountain2.jpg"} 
                                        alt="Me in the Mountains."/>
                                </div>
                            </div>
                            <div className="embla__slide">
                                <div className="embla__slide__inner">
                                    <Image 
                                    className="embla__slide__img" 
                                    src={"images/mountain3.jpg"} 
                                    alt="Me in the Mountains."/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
                    <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
                </div>
            </section>
        </Box>
        
      
    )
}