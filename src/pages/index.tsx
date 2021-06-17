import { H1 } from './../components/typography/H1';
import { Button } from '../components/buttons/Button'
import { Box, Flex, Spacer } from '@chakra-ui/layout';
import { H3 } from '../components/typography/H3';
import Antiquity from './epochs/antiq';
import Medieval from './epochs/medieval';
import Baroque from './epochs/baroque';
import Renesans from './epochs/renesans';
import Classicism from './epochs/classicism';

const epochs = [
  Antiquity,
  Medieval,
  Renesans,
  Baroque,
  Classicism
];

const Section = (props) => <Box sx={{ scrollSnapAlign: 'start', width: '100%', 'top': 0 }} {...props} />

const Index = () => (
  <Box sx={{ overflowY: 'scroll', scrollSnapType: 'y mandatory', height: '100vh', msScrollSnapPointsY: 'repeat(100vh)'}}>
    <Section>
      <Flex bg="linear-gradient(180deg, #000000 0%, #0D0D0D 100%)" direction="column" align="center" pt={12} pb={8} height="100vh">
          <H1>Historia</H1>
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
)

export default Index
