import * as React from "react"

function Logo(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={108.432}
      height={74.185}
      viewBox="0 0 120 120"
      {...props}
    >
      <defs>
        <linearGradient
          id="prefix__a"
          x1={0.5}
          x2={0.5}
          y2={1}
          gradientUnits="objectBoundingBox"
        >
          <stop offset={0} stopColor="#ec64a1" />
          <stop offset={1} stopColor="#e36855" />
        </linearGradient>
      </defs>
      <g data-name="Gruppe 5">
        <path
          data-name="Pfad 7"
          d="M54.216 2.5l51.716 69.185H2.5z"
          fill="none"
          stroke={props.fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={5}
        />
        <g data-name="Gruppe 4">
          <g
            data-name="Gruppe 3"
            fill="#e9666e"
            stroke="#e9666e"
            strokeLinejoin="round"
            strokeWidth={5}
          >
            <path
              data-name="Pfad 2"
              d="M17.704 61.758h10.729l10.12-13.55 2.025 2.5v11.05h8.732V27.901h-8.731V43.24L28.484 27.901h-10.12l13.233 15.667z"
            />
            <path
              data-name="Pfad 3"
              d="M77.108 38.165a4.309 4.309 0 00-.523-2.183 3.506 3.506 0 00-1.8-1.432 6.612 6.612 0 00-2.069-.443q-1.182-.08-2.751-.08h-3.157v9.118h2.683a25.006 25.006 0 003.5-.2 5.017 5.017 0 002.365-.932 4.532 4.532 0 001.33-1.558 5.212 5.212 0 00.422-2.29zm13.62 23.488H80.064l-9.211-12.41h-4.045v12.415h-8.686V27.801h14.643a33.642 33.642 0 015.162.341 11.141 11.141 0 014.047 1.478 8.829 8.829 0 013.036 2.945 8.44 8.44 0 011.126 4.536 10.065 10.065 0 01-1.736 6.116 13.125 13.125 0 01-4.968 3.934z"
            />
          </g>
        </g>
        <path
          data-name="Pfad 8"
          d="M614.112 940.5l2.922 3.091 3.1-3.091 3.028 3.091 3.471-3.091 2.806 3.091 3.323-3.091-9.323-12.5c.096 0-9.327 12.5-9.327 12.5z"
          transform="translate(-569.223 -925.5)"
          stroke={props.fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={5}
          fill="url(#prefix__a)"
        />
      </g>
    </svg>
  )
}

export default Logo
