import { Box, BoxProps, Flex, Grid, GridItem, Spacer } from "@chakra-ui/layout";
import { useTheme } from "@chakra-ui/system";
import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import React from "react";
import { NAVBAR_HEIGHT } from "../../pages";
import { Date } from "../Date";
import { Player } from "../Player";
import HistoryLine from "../svgs/HistoryLine";
import { Home } from "../svgs/Home";
import { NavTriangle } from "../svgs/NavTriangle";
import { H1 } from "../typography/H1";
import { H3 } from "../typography/H3";
import { Paragraph } from "../typography/Paragraph";

type Song = any;
interface EpochProps extends BoxProps {
  title: string;
  catchPhrase: string;
  date: {
    year: string;
    suffix?: string;
  }
  music: {
    title: string;
    author?: string;
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
  onNextEpoch: () => void;
  onPrevEpoch: () => void;
  isLast?: boolean;
}

export const Epoch = ({
  title,
  catchPhrase,
  date,
  music,
  paragraphs,
  image,
  colors,
  onNextEpoch,
  onPrevEpoch,
  isLast,
  ...props
}: EpochProps) => {
  const theme = useTheme();
  return (
      <Grid
        templateRows="auto 1fr"
        templateColumns="1fr auto 1fr"
        bg={colors.background}
        {...props}
      >
      <GridItem rowSpan={1} colStart={1} p={8}>
        <H1 mt={NAVBAR_HEIGHT}>{title}</H1>
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
          <Flex justify="space-between" align="baseline">
          <Date mt={NAVBAR_HEIGHT} year={date.year} suffix={date.suffix} accentColor={colors.accent}/>
              <NavTriangle isUpward onClick={onPrevEpoch} />
          </Flex>

          <Player my={8} title={music.title} author={music.author} song={music.song} frontColor={colors.white} backColor={colors.primary} />
          {
            paragraphs.map((text, i) => (
              <React.Fragment key={i}>
              <Paragraph>
                  {text}
              </Paragraph>
              { i < paragraphs.length - 1 && <br />}
              </React.Fragment>
            ))
          }
          <Spacer grow={1} />
          <Flex justify="flex-end">
              {
                isLast
                ? <Home onClick={onNextEpoch} pb={8} fill={theme.colors.roseWhite}/>
                : <NavTriangle pt={8} isUpward={false} onClick={onNextEpoch} />
              }
          </Flex>
        </Flex>
      </GridItem>
    </Grid>
  )
}