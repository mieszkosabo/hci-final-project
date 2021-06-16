import { Flex } from "@chakra-ui/layout";
import useSound from 'use-sound'
import PauseIcon from "../icons/Pause";
import PlayIcon from "../icons/Play";
import { H3 } from "./typography/H3";


export const Player = ({ song, title, frontColor, backColor, ...props }) => {
	const [play, { pause, isPlaying }] = useSound(song);

	return (
		<Flex align="center" {...props}>
			{ isPlaying
				? <PauseIcon onClick={() => pause()} frontColor={frontColor} backColor={backColor}/>
				: <PlayIcon  onClick={() => play()} frontColor={frontColor} backColor={backColor}/>
			}
			<H3 ml={8}>{title}</H3>
		</Flex>
	)
}