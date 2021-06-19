import { Box, Flex, Text } from '@chakra-ui/layout';
import Antiquity from './epochs/antiq';
import Medieval from './epochs/medieval';
import Baroque from './epochs/baroque';
import Renesans from './epochs/renesans';
import Classicism from './epochs/classicism';
import Romantism from './epochs/romantism';
import Contemporary from './epochs/contemporary';
import { useRef, useState } from 'react';
import { Slide } from '@chakra-ui/transition';
import { forwardRef } from '@chakra-ui/system';
import { useScroll } from 'react-use';
import { TitlePage } from '../components/TitlePage';
import { Home } from '../components/svgs/Home';
import { useMouse } from 'react-use';

const epochs = [
  Antiquity,
  Medieval,
  Renesans,
  Baroque,
  Classicism,
  Romantism,
  Contemporary
];

const NavbarLink = (props) => <Text fontSize="2rem" color="black" fontFamily="futura" {...props} style={{ cursor: 'pointer'}}/>
const Section = forwardRef((props, ref) => <Box ref={ref} sx={{ scrollSnapAlign: 'start', width: '100%', 'top': 0 }} {...props} />)
export const NAVBAR_HEIGHT = "50px";

const scrollTo = (ref) => ref.current.scrollIntoView({ behavior: 'smooth'});

const Index = () => {
  const [isNavOpened, setIsNavOpened] = useState(false);
  const ref = useRef(null);
  const {y} = useScroll(ref);
  const { elY } = useMouse(ref);

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
    <Slide direction="top" in={isNavOpened || y < 50 || elY < 70}>
      <Flex
          h={NAVBAR_HEIGHT}
          p="40px"
          bg="white"
          rounded="md"
          shadow="md"
          align="center"
          justify="space-between"
        >
            <Home fill="black"/>
            <NavbarLink onClick={() => scrollTo(anitqRef)} fontSize="2rem">Starożytność</NavbarLink>
            <NavbarLink onClick={() => scrollTo(medievalRef)}>Średniowiecze</NavbarLink>
            <NavbarLink onClick={() => scrollTo(renesansRef)}>Renesans</NavbarLink>
            <NavbarLink onClick={() => scrollTo(baroqueRef)}>Barok</NavbarLink>
            <NavbarLink onClick={() => scrollTo(classRef)}>Klasycyzm</NavbarLink>
            <NavbarLink onClick={() => scrollTo(romaRef)}>Romantyzm</NavbarLink>
            <NavbarLink onClick={() => scrollTo(contRef)}>Współczesność</NavbarLink>
        </Flex>
      </Slide>

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
