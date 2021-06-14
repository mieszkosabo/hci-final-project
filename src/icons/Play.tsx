import * as React from 'react';

function PlayIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={80}
            height={80}
            viewBox="0 0 90 90"
            {...props}
        >
            <path fill="black" d="M31 11.2c-7.7 3-16.9 12.3-19.8 20.1-3 7.9-3 19.5 0 27.4 2.9 8 12.1 17.2 20.1 20.1 7.9 3 19.5 3 27.4 0 8-2.9 17.2-12.1 20.1-20.1 3-7.9 3-19.5 0-27.4-2.9-8-12.1-17.2-20.1-20.1-7.8-3-20-2.9-27.7 0zm23.7 29.7c3.5 2 6.3 3.8 6.3 4.1 0 .9-23.4 13.9-24.2 13.4-1-.6-1.1-25.8-.1-26.7.6-.7 4.4 1.3 18 9.2z" />
        </svg>
    );
}

export default PlayIcon;
