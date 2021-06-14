import { Flex } from "@chakra-ui/layout";
import useSound from 'use-sound'
import PauseIcon from "../icons/Pause";
import PlayIcon from "../icons/Play";
import { H2 } from "./typography/H2";


export const Player = ({ song, title, ...props }) => {
	const [play, { pause, isPlaying }] = useSound(song);

	return (
		<Flex align="center" {...props}>
			{ isPlaying
				? <PauseIcon onClick={() => pause()}/>
				: <PlayIcon  onClick={() => play()} />
			}
			<H2 ml={8}>{title}</H2>
		</Flex>
	)
}