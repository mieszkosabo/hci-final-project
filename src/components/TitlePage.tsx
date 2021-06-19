import { Box, Flex, Spacer } from "@chakra-ui/layout";
import { NAVBAR_HEIGHT } from "../pages";
import { Button } from "./buttons/Button";
import { H1 } from "./typography/H1";
import { H3 } from "./typography/H3";

export const TitlePage = ({onClick}) => (
	<Flex bg="linear-gradient(180deg, #000000 0%, #0D0D0D 100%)" direction="column" align="center" pt={12} pb={8} height="100vh">
			<H1 mt={NAVBAR_HEIGHT}>Historia</H1>
			<H1>Muzyki</H1>
			<Flex mt={8}>
					<Button bg="roseWhite" color="black" size="small" onClick={onClick}>Rozpocznij podróż!</Button>
			</Flex>
			<Spacer grow={1} />
			<Flex justify="flex-end">
				<Box maxWidth="50%">
					<H3 textAlign="center">“Studiowanie historii muzyki poparte bezpośrednim słuchaniem arcydzieł różnych epok  wyleczy cię najszybciej z zarozumiałości i próżności”</H3>
					<H3 textAlign="center" mt={4}>~ R.Schumann</H3>
				</Box>
			</Flex>
  </Flex>
)