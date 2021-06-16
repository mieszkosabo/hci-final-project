import { Flex } from "@chakra-ui/layout"
import { H2 } from "./typography/H2"

export const Date = ({ year, suffix, accentColor }) => {
	console.log(accentColor)
	return (
		<Flex>
			<H2 color={accentColor}>{year}</H2>
			<H2 ml={2}>{suffix}</H2>
		</Flex>
	)
}