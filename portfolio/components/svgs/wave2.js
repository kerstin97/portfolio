import * as React from "react";

export default function Wave2(props) {
  const style = { background: props.background };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      style={style}
    >
      <path
        fill={props.fill}
        d="M0 160l48 16c48 16 144 48 240 53.3 96 5.7 192-16.3 288-32C672 181 768 171 864 176s192 27 288 48 192 43 240 53.3l48 10.7v32H0z"
      />
    </svg>
  );
}
