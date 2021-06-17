import { Box, BoxProps, Flex, Grid, GridItem, Spacer } from "@chakra-ui/layout";
import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import { Button } from "../buttons/Button";
import { Date } from "../Date";
import { Player } from "../Player";
import HistoryLine from "../svgs/HistoryLine";
import { H1 } from "../typography/H1";
import { H3 } from "../typography/H3";
import { Paragraph } from "../typography/Paragraph";

type Song = any;
interface EpochProps extends BoxProps {
  title: string;
  catchPhrase: string;
  date: {
    year: number;
    suffix: string;
  }
  music: {
    title: string;
    song: Song;
  }
  paragraphs: string[];
  image: {
    src: string;
    alt: string;
  }
  colors: {
      background: string;
      primary: string;
      accent: string;
      white: string;
  }
  nextEpoch: string | null;
}

export const Epoch = ({
  title,
  catchPhrase,
  date,
  music,
  paragraphs,
  image,
  colors,
  nextEpoch,
}: EpochProps) => {
  const router = useRouter();
  return (
      <Grid
        templateRows="auto 1fr"
        templateColumns="1fr auto 1fr"
        bg={colors.background} 
      >
      <GridItem rowSpan={1} colStart={1} p={8}>
        <H1>{title}</H1>
        <H3 mt={8}>{catchPhrase}</H3>
      </GridItem>

      <GridItem rowStart={2} colSpan={1} display="flex" justifyContent="center">
        <Box w="full" h="full" position="relative">
          <Image
            src={image.src}
            alt={image.alt}
            layout="fill"
            objectFit="contain"
            objectPosition="bottom"
            />
          </Box>
      </GridItem>

      <GridItem rowSpan={2} colStart={2} mr={8} py={8}>
        <Box h="100vh" mt={-8} overflowY="hidden">
          <HistoryLine stroke={colors.white} />
        </Box>
      </GridItem>

      <GridItem rowSpan={2} colStart={3}>
        <Flex direction="column" h="full" justify="flex-start" pt={10} pr={8} pb={8}>
          <Date year={date.year} suffix={date.suffix} accentColor={colors.accent}/>

          <Player my={8} title={music.title} song={music.song} frontColor={colors.white} backColor={colors.primary} />
          {
            paragraphs.map((text, i) => (
              <>
              <Paragraph key={i}>
                  {text}
              </Paragraph>
              { i < paragraphs.length - 1 && <br />}
              </>
            ))
          }
        </Flex>
      </GridItem>
    </Grid>
  )
}