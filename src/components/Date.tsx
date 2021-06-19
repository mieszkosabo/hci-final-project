import { Flex } from "@chakra-ui/layout"
import { H2 } from "./typography/H2"
import { H3 } from "./typography/H3"

export const Date = ({ year, suffix, accentColor, ...props}) => {
	return (
		<Flex align="baseline" {...props}>
			<H2 color={accentColor}>{year}</H2>
			{ suffix && <H3 ml={2}>{`- ${suffix}`}</H3> }
		</Flex>
	)
}