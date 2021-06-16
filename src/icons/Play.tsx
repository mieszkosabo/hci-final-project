import * as React from 'react';

export interface PlayPauseProps extends React.SVGProps<SVGSVGElement> {
    frontColor: string;
    backColor: string;
}

function PlayIcon({ frontColor, backColor, ...props }: PlayPauseProps) {
    return (
        <svg
          width={100}
          height={100}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <circle cx={50} cy={50} r={50} fill={backColor} />
          <path d="M86 50L33.5 80.31V19.69L86 50z" fill={frontColor} />
        </svg>
      )
}

export default PlayIcon;
