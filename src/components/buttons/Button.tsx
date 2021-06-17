import { Box } from "@chakra-ui/layout";

export const Button = (props) => (
	<Box
		as="button"
		height={props.size === "big" ? "5.37rem" : "3.78rem"}
		transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
		px={8}
		borderRadius="1rem"
		fontSize={props.size === "big" ? "2.25rem" : "1.5rem"}
		fontWeight="bold"
		fontFamily="futura"
		color="roseWhite"
		bg={props.bg ?? 'palevioletred'}
		_hover={{ bg: "#ebedf0" }}
  	_active={{
    bg: "#dddfe2",
    transform: "scale(0.98)",
    borderColor: "#bec3c9",
  	}}
  	_focus={{
    	boxShadow:
      	"0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
  	}}
		{...props}
	/>
)