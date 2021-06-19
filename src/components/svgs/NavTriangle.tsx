import { Box } from "@chakra-ui/layout";
import * as React from "react";

function Triangle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={65}
      height={44}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M32.5 0l32.476 43.27H.024L32.5 0z" fill="#fff" />
    </svg>
  );
}

export const NavTriangle = ({onClick, isUpward, ...props}) => (
	<Box
		onClick={onClick}
		transform={isUpward ? "rotate(0)" : "rotate(180deg)"}
	{...props}
	>
		<Triangle />
	</Box>
)