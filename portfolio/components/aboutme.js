import React, { useEffect, useCallback, useState } from "react";
import { Image, Box, Text, Center } from "@chakra-ui/react";
import { PrevButton, NextButton } from "./EmblaCarouselButtons";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import SectionHeading from "./SectionHeading";

export default function AboutMe() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: false }, [Autoplay()]);
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
  }, [embla, onSelect]);

  return (
    <Box w="100%">
      <section id="aboutme">
        <SectionHeading title="About me" />
        <Center>
          <Text
            textAlign="center"
            fontSize="lg"
            width={["100%", "100%", "700px", "800px"]}
            pl={["20px", "20px", "50px", "50px"]}
            pr={["20px", "20px", "50px", "50px"]}
          >
            I love the nature and when I&#39;m in the mountains, I feel free.
            Listening to loud electronic music and visiting festivals with my
            friends makes me happy. Also pushing me to my personal limits in the
            gym is one of my passions.
          </Text>
        </Center>
        <div className="embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              <div className="embla__slide">
                <div className="embla__slide__inner">
                  <Image
                    className="embla__slide__img"
                    src={"images/mountain1.jpg"}
                    alt="Me in the Mountains."
                  />
                </div>
              </div>
              <div className="embla__slide">
                <div className="embla__slide__inner">
                  <Image
                    className="embla__slide__img"
                    src={"images/mountain2.jpg"}
                    alt="Me in the Mountains."
                  />
                </div>
              </div>
              <div className="embla__slide">
                <div className="embla__slide__inner">
                  <Image
                    className="embla__slide__img"
                    src={"images/mountain3.jpg"}
                    alt="Me in the Mountains."
                  />
                </div>
              </div>
            </div>
          </div>
          <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
          <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
        </div>
      </section>
    </Box>
  );
}
