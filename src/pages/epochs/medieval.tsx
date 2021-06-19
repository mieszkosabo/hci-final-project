const song = require('../../music/song.mp3');
import { Epoch } from "../../components/Epoch/Epoch";
import { useTheme } from "@chakra-ui/system";

export default function Medieval(): JSX.Element {
  const theme = useTheme();
  return (
    <Epoch
      title="Średniowiecze"
      catchPhrase="Chwytliwe zdanie, które określa daną epokę"
      date={{ year: "476 r.", suffix: "upadek Rzymu"}}
      music={{ title: "Bogurodzica", song: song}}
      paragraphs={[
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque et at egestas viverra libero at massa elit amet.",
        "Sit non vel natoque in. Sollicitudin sed velit pretium dictum massa egestas volutpat imperdiet sagittis. Nullam semper non vitae urna tincidunt sagittis nunc lorem elit.",
        "Sit lectus massa vitae pretium. Eget at sem massa ullamcorper adipiscing. Parturient maecenas lacus fames aliquet integer. Volutpat lobortis euismod senectus sit. Amet magna viverra aliquam, at."
      ]}
      image={{ src: "/medieval.png", alt: "Medieval people playing music"}}
      colors={{
        background: "linear-gradient(180deg, #0D0D0D 15.34%, rgba(96, 154, 103, 0.75) 98.29%)",
        primary: "#609A67",
        accent: "#609A67",
        white: theme.colors.white
      }}
			nextEpoch={null}
    />
  )
}