import * as React from 'react';
import { PlayPauseProps } from './Play';

function PauseIcon({ frontColor, backColor, ...props }: PlayPauseProps) {
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
          <path fill={frontColor} d="M23 22h18v55H23zM59 22h18v55H59V22z" />
        </svg>
      )
}

export default PauseIcon;
