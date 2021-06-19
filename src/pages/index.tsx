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

const Index = () => {
  const [isNavOpened, setIsNavOpened] = useState(false);
  const ref = useRef(null);
  const {y} = useScroll(ref);
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
      
      <Section >
        <Flex bg="linear-gradient(180deg, #000000 0%, #0D0D0D 100%)" direction="column" align="center" pt={12} pb={8} height="100vh">
            <H1 mt={NAVBAR_HEIGHT}>Historia</H1>
            <H1>Muzyki</H1>
            <Flex mt={8}>
                <Button bg="roseWhite" color="black" size="small">Rozpocznij podróż!</Button>
            </Flex>
            <Spacer grow />
            <Flex justify="flex-end">
              <Box maxWidth="50%">
                <H3 textAlign="center">“Studiowanie historii muzyki poparte bezpośrednim słuchaniem arcydzieł różnych epok  wyleczy cię najszybciej z zarozumiałości i próżności”</H3>
                <H3 textAlign="center" mt={4}>~ R.Schumann</H3>
              </Box>
            </Flex>
        </Flex>
    </Section>
    {
      epochs.map((Epoch, i) => (
        <Section key={i}>
          <Epoch />
        </Section>
      ))
    }
    </Box>
    </>
  )
}

export default Index
