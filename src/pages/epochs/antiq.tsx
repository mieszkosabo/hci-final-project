import { Box, Flex, Grid, GridItem } from "@chakra-ui/layout";
import { H1 } from '../../components/typography/H1'
import { H3 } from '../../components/typography/H3'
import { H2 } from '../../components/typography/H2'
import { Button } from "../../components/buttons/Button";
import HistoryLine from "../../components/svgs/HistoryLine";
import { Player } from "../../components/Player";
import { Paragraph } from "../../components/typography/Paragraph";
const song = require('../../music/song.mp3');
import Image from 'next/Image';

export default function Antiquity(): JSX.Element {
  return (
  <Grid
    h="100vh"
    w="100vw"
    templateRows="auto 1fr"
    templateColumns="1fr auto 1fr"
    bg="linear-gradient(180deg, #0D0D0D 0%, #0D1526 100%)"
  > 
  <GridItem rowSpan={1} colStart={1} p={8}>
    <H1>Starożytność</H1>
    <H3 mt={8}>Chwytliwe zdanie, które określa daną epokę.</H3>
  </GridItem>

  <GridItem rowStart={2} colSpan={1} display="flex" justifyContent="center">
    <Box w="full" h="full" position="relative">
      <Image
        src="/medieval.png"
        alt="medieval people"
        layout="fill"
        objectFit="contain"
        objectPosition="bottom"
        />
      </Box>
  </GridItem>

  <GridItem rowSpan={2} colStart={2} mr={8} py={8}>
    <Box h="100vh" mt={-8} overflowY="hidden">
      <HistoryLine stroke="#F2E6E6" />
    </Box>
  </GridItem>

  <GridItem rowSpan={2} colStart={3}>
    <Flex direction="column" h="full" justify="flex-start" pt={10} pr={8} pb={8}>
      <H2>1580r.</H2>

      <Player my={16} title="Epitafium Seikilosa" song={song} />

      <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque et at egestas viverra libero at massa elit amet.
      </Paragraph>
      <br />
      <Paragraph>
      Sit non vel natoque in. Sollicitudin sed velit pretium dictum massa egestas volutpat imperdiet sagittis. Nullam semper non vitae urna tincidunt sagittis nunc lorem elit.
      </Paragraph>
      <br />
      <Paragraph>
      Sit lectus massa vitae pretium. Eget at sem massa ullamcorper adipiscing. Parturient maecenas lacus fames aliquet integer. Volutpat lobortis euismod senectus sit. Amet magna viverra aliquam, at.
      </Paragraph>

      <Flex justify="center">
        <Button>Kontunuuj</Button>
      </Flex>
    </Flex>
  </GridItem>
</Grid>
  )
}