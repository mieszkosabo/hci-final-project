const song = require('../../music/song.mp3');
import { Epoch } from "../../components/Epoch/Epoch";
import { useTheme } from "@chakra-ui/system";

export default function Renesans(): JSX.Element {
  const theme = useTheme();
  return (
    <Epoch
      title="Renesans"
      catchPhrase="Chwytliwe zdanie, które określa daną epokę"
      date={{ year: 1450, suffix: "r. początek druku"}}
      music={{ title: "M.Gomułka Nieście chwałę mocarzom", song: song}}
      paragraphs={[
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque et at egestas viverra libero at massa elit amet.",
        "Sit non vel natoque in. Sollicitudin sed velit pretium dictum massa egestas volutpat imperdiet sagittis. Nullam semper non vitae urna tincidunt sagittis nunc lorem elit.",
        "Sit lectus massa vitae pretium. Eget at sem massa ullamcorper adipiscing. Parturient maecenas lacus fames aliquet integer. Volutpat lobortis euismod senectus sit. Amet magna viverra aliquam, at."
      ]}
      image={{ src: "/renesans.png", alt: "Medieval people playing music"}}
      colors={{
        background: "linear-gradient(180deg, #0D0D0D 14.89%, rgba(192, 150, 154, 0.75) 100%)",
        primary: "#C0969A",
        accent: "#C0969A",
        white: theme.colors.white
      }}
			nextEpoch={null}
    />
  )
}