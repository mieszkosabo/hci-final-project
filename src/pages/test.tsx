import { Box } from "@chakra-ui/layout"
import { forwardRef } from "@chakra-ui/system"
import { useRef } from "react"
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Container = (props) => <Box sx={{ scrollSnapType: 'y mandatory'}} overflowY="scroll" h="100vh" {...props}/>
const Section = forwardRef((props, ref) => <Box ref={ref} sx={{ scrollSnapAlign: 'start' }} display="flex" alignItems="center" justifyContent="center" color="white" h="100vh" {...props}/>)
const MasterContainer = (props) => <Box {...props}/>
export default function Test(): JSX.Element {
	const ref = useRef(null);
	return (
		<MasterContainer>
				<button onClick={() => ref.current.scrollIntoView({ behavior: 'smooth'})}>clickme</button>
				<Container>
					<Section bg="palevioletred">elo1</Section>
					<Section bg="papayawhip" ref={ref}>elo2</Section>
					<Element name="test3">
						<Section bg="blue">elo3</Section>
					</Element>
				</Container>
		</MasterContainer>
	)
}