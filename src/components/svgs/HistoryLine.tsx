import * as React from "react"

function HistoryLine(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
			width={21}
			height={1080}
			viewBox="0 0 21 1080"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        stroke={props.stroke}
        d="M5.5 0v1080M10.5 0v1080M15.5 0v1080M20.5 0v1080M.5 0v1080"
      />
    </svg>
  )
}

export default HistoryLine 
