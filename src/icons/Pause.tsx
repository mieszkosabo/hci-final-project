import * as React from 'react';

function PauseIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={80}
            height={80}
            viewBox="0 0 90 90"
            {...props}
        >
            <path fill={props.fill ?? "hotpink"} d="M31 11.2c-7.7 3-16.9 12.3-19.8 20.1-3 7.9-3 19.5 0 27.4 2.9 8 12.1 17.2 20.1 20.1 7.9 3 19.5 3 27.4 0 8-2.9 17.2-12.1 20.1-20.1 3-7.9 3-19.5 0-27.4-2.9-8-12.1-17.2-20.1-20.1-7.8-3-20-2.9-27.7 0zm10.4 21.4c.8 2 .8 22.8 0 24.8-.8 2.1-4 2.1-4.8 0-.8-2-.8-22.8 0-24.8.3-.9 1.4-1.6 2.4-1.6s2.1.7 2.4 1.6zm12 0c.8 2 .8 22.8 0 24.8-.8 2.1-4 2.1-4.8 0-.8-2-.8-22.8 0-24.8.3-.9 1.4-1.6 2.4-1.6s2.1.7 2.4 1.6z" />
        </svg>
    );
}

export default PauseIcon;
