import { Box } from "@chakra-ui/layout";
import * as React from "react";

export const HomeIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={75}
      height={58}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M30 58V37.53h15V58h18.75V30.706H75L37.5 0 0 30.706h11.25V58H30z"
        fill="#fff"
      />
    </svg>
  );
}

export const Home = (props) => (
	<Box {...props}>
		<HomeIcon />
	</Box>
)