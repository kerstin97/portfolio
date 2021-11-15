import * as React from "react"

export default function Wave1(props) {
    const style = {background: props.background}
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={style}>
      <path
        fill={props.fill}
        d="M0 256l30-26.7c30-26.3 90-80.3 150-80 60-.3 120 53.7 180 74.7s120 11 180-16 120-69 180-64 120 59 180 42.7C960 171 1020 85 1080 85.3c60-.3 120 85.7 180 133.4 60 48.3 120 58.3 150 64l30 5.3v32H0z"
      />
    </svg>
  )
}
