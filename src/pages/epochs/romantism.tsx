const song = require('../../music/song.mp3');
import { Epoch } from "../../components/Epoch/Epoch";
import { useTheme } from "@chakra-ui/system";

export default function Romantism(props): JSX.Element {
  const theme = useTheme();
  return (
    <Epoch
      title="Romantyzm"
      catchPhrase="Chwytliwe zdanie, które określa daną epokę"
      date={{ year: "1827r.", suffix: "śmierć Beethovena"}}
      music={{ author: "F. Chopin", title: "Ballada g-moll op. 23 no 1", song: song}}
      paragraphs={[
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque et at egestas viverra libero at massa elit amet.",
        "Sit non vel natoque in. Sollicitudin sed velit pretium dictum massa egestas volutpat imperdiet sagittis. Nullam semper non vitae urna tincidunt sagittis nunc lorem elit.",
        "Sit lectus massa vitae pretium. Eget at sem massa ullamcorper adipiscing. Parturient maecenas lacus fames aliquet integer. Volutpat lobortis euismod senectus sit. Amet magna viverra aliquam, at."
      ]}
      image={{ src: "/roma3.png", alt: "Medieval people playing music"}}
      colors={{
        background: "linear-gradient(180deg, #0D0D0D 14.99%, rgba(214, 171, 136, 0.75) 100%)",
        primary: "#D6AB88",
        accent: "#D6AB88",
        white: theme.colors.white
      }}
      {...props}
    />
  )
}