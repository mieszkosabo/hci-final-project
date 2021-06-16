const song = require('../../music/song.mp3');
import { Epoch } from "../../components/Epoch/Epoch";
import { useTheme } from "@chakra-ui/system";

export default function Antiquity(): JSX.Element {
  const theme = useTheme();
  return (
    <Epoch
      title="Starożytność"
      catchPhrase="Chwytliwe zdanie, które określa daną epokę"
      date={{ year: 12000, suffix: "p.n.e"}}
      music={{ title: "Epitafium Seikilosa", song: song}}
      paragraphs={[
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque et at egestas viverra libero at massa elit amet.",
        "Sit non vel natoque in. Sollicitudin sed velit pretium dictum massa egestas volutpat imperdiet sagittis. Nullam semper non vitae urna tincidunt sagittis nunc lorem elit.",
        "Sit lectus massa vitae pretium. Eget at sem massa ullamcorper adipiscing. Parturient maecenas lacus fames aliquet integer. Volutpat lobortis euismod senectus sit. Amet magna viverra aliquam, at."
      ]}
      image={{ src: "/medieval.png", alt: "Medieval people playing music"}}
      colors={{
        background: "linear-gradient(180deg, #0D0D0D 0%, #0D1526 100%);",
        primary: "#484848",
        accent: "#D1A160",
        white: theme.colors.white
      }}
    />
  )
}