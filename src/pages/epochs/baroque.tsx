const song = require('../../music/song.mp3');
import { Epoch } from "../../components/Epoch/Epoch";
import { useTheme } from "@chakra-ui/system";

export default function Baroque(): JSX.Element {
  const theme = useTheme();
  return (
    <Epoch
      title="Barok"
      catchPhrase="Chwytliwe zdanie, które określa daną epokę"
      date={{ year: 1600, suffix: "r. pierwsza opera"}}
      music={{ title: "J.S Bach Tocatta i fuga d-moll", song: song}}
      paragraphs={[
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque et at egestas viverra libero at massa elit amet.",
        "Sit non vel natoque in. Sollicitudin sed velit pretium dictum massa egestas volutpat imperdiet sagittis. Nullam semper non vitae urna tincidunt sagittis nunc lorem elit.",
        "Sit lectus massa vitae pretium. Eget at sem massa ullamcorper adipiscing. Parturient maecenas lacus fames aliquet integer. Volutpat lobortis euismod senectus sit. Amet magna viverra aliquam, at."
      ]}
      image={{ src: "/baroque.png", alt: "Medieval people playing music"}}
      colors={{
        background: "linear-gradient(180deg, #0D0D0D 15.38%, rgba(178, 94, 16, 0.75) 100%)",
        primary: "#B25E10",
        accent: "#B25E10",
        white: theme.colors.white
      }}
			nextEpoch={null}
    />
  )
}