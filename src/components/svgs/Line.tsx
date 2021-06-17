import * as React from "react"

function Line(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={3}
      height={294}
      viewBox="0 0 3 294"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path stroke="#fff" d="M2.5 293.002L1.427.002" />
    </svg>
  )
}

export default Line
