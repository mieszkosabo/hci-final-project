import * as React from "react"

function CrazyShape(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      viewBox="0 0 1920 1080"
      preserveAspectRatio="xMidYMax"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        stroke="#fff"
        d="M958.5 970v110M963.5 970v110M968.5 970v110M973.5 970v110M953.5 970v110M953.5 970c0-429.5-953 0-953-970m973 970c0-429.5 946 0 946-970m-961 970c0-516.5-728 0-728-970m738 970c0-516.5 721 0 721-970"
      />
    </svg>
  )
}

export default CrazyShape 
