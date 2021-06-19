import { H1 } from './../components/typography/H1';
import { Button } from '../components/buttons/Button'
import { Box, Flex, Spacer } from '@chakra-ui/layout';
import { H3 } from '../components/typography/H3';
import Antiquity from './epochs/antiq';
import Medieval from './epochs/medieval';
import Baroque from './epochs/baroque';
import Renesans from './epochs/renesans';
import Classicism from './epochs/classicism';
import Romantism from './epochs/romantism';
import Contemporary from './epochs/contemporary';
import { useEffect, useRef, useState } from 'react';
import { Slide } from '@chakra-ui/transition';
import { forwardRef } from '@chakra-ui/system';
import {useScroll} from 'react-use';
import { TitlePage } from '../components/TitlePage';

const epochs = [
  Antiquity,
  Medieval,
  Renesans,
  Baroque,
  Classicism,
  Romantism,
  Contemporary
];

const Section = forwardRef((props, ref) => <Box ref={ref} sx={{ scrollSnapAlign: 'start', width: '100%', 'top': 0 }} {...props} />)
export const NAVBAR_HEIGHT = "50px";

const scrollTo = (ref) => ref.current.scrollIntoView({ behavior: 'smooth'});

const Index = () => {
  const [isNavOpened, setIsNavOpened] = useState(false);
  const ref = useRef(null);
  const {y} = useScroll(ref);

  const titleRef = useRef(null);
  const anitqRef = useRef(null);
  const medievalRef = useRef(null);
  const renesansRef = useRef(null);
  const baroqueRef = useRef(null);
  const classRef = useRef(null);
  const romaRef = useRef(null);
  const contRef = useRef(null);

  return (
    <>
    <Slide direction="top" in={isNavOpened || y < 50}>
      <Box
          h={NAVBAR_HEIGHT}
          p="40px"
          color="black"
          bg="white"
          rounded="md"
          shadow="md"
        >
          dawdawdawdf awfaw fwaf wa awf awf awfa wf awf awf a
        </Box>
      </Slide>
      <Box bg="transparent" w="full" h="100px" position="fixed" top="0" onMouseEnter={() => setIsNavOpened(true)} onMouseLeave={() => setIsNavOpened(false)}/>

    <Box ref={ref} sx={{ overflowY: 'scroll', scrollSnapType: 'y mandatory', height: '100vh', msScrollSnapPointsY: 'repeat(100vh)'}}>
      
        <Section ref={titleRef}>
            <TitlePage onClick={() => scrollTo(anitqRef)}/>
        </Section>

        <Section ref={anitqRef}>
            <Antiquity 
             onPrevEpoch={() => scrollTo(titleRef)} 
             onNextEpoch={() => scrollTo(medievalRef)}
            />
        </Section>

        <Section ref={medievalRef}>
            <Medieval 
             onPrevEpoch={() => scrollTo(anitqRef)} 
             onNextEpoch={() => scrollTo(renesansRef)}
            />
        </Section>

        <Section ref={renesansRef}>
            <Renesans 
             onPrevEpoch={() => scrollTo(medievalRef)} 
             onNextEpoch={() => scrollTo(baroqueRef)}
            />
        </Section>

        <Section ref={baroqueRef}>
            <Baroque 
             onPrevEpoch={() => scrollTo(renesansRef)} 
             onNextEpoch={() => scrollTo(classRef)}
            />
        </Section>

        <Section ref={classRef}>
            <Classicism 
             onPrevEpoch={() => scrollTo(baroqueRef)} 
             onNextEpoch={() => scrollTo(romaRef)}
            />
        </Section>

        <Section ref={romaRef}>
            <Romantism 
             onPrevEpoch={() => scrollTo(classRef)} 
             onNextEpoch={() => scrollTo(contRef)}
            />
        </Section>

        <Section ref={contRef}>      
            <Contemporary 
             onPrevEpoch={() => scrollTo(romaRef)} 
             onNextEpoch={() => scrollTo(titleRef)}
             isLast
            />
        </Section>

    </Box>
    </>
  )
}

export default Index
