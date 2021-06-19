const song = require('../../music/song.mp3');
import { Epoch } from "../../components/Epoch/Epoch";
import { useTheme } from "@chakra-ui/system";

export default function Contemporary(props): JSX.Element {
  const theme = useTheme();
  return (
    <Epoch
      title="Współczesność"
      catchPhrase="Chwytliwe zdanie, które określa daną epokę"
      date={{ year: "XX w."}}
      music={{ author: "J. Ch. Richard", title: "Bab Boujloud", song: song}}
      paragraphs={[
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque et at egestas viverra libero at massa elit amet.",
        "Sit non vel natoque in. Sollicitudin sed velit pretium dictum massa egestas volutpat imperdiet sagittis. Nullam semper non vitae urna tincidunt sagittis nunc lorem elit.",
        "Sit lectus massa vitae pretium. Eget at sem massa ullamcorper adipiscing. Parturient maecenas lacus fames aliquet integer. Volutpat lobortis euismod senectus sit. Amet magna viverra aliquam, at."
      ]}
      image={{ src: "/modern.png", alt: "Medieval people playing music"}}
      colors={{
        background: "linear-gradient(180deg, #0D0D0D 15.48%, rgba(255, 55, 109, 0.75) 100%)",
        primary: "#FF376D",
        accent: "#FF376D",
        white: theme.colors.white
      }}
      {...props}
    />
  )
}