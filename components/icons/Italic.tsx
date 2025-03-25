import React from "react";

interface Props {
  width?: number;
  height?: number;
}

const Italic = ({ width, height }: Props) => {
  return (
    <svg
      width={width ?? 24}
      height={height ?? 24}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0" fill="none" width="24" height="24" />

      <g>
        <path d="M10.536 5l-.427 2h1.5L9.262 18h-1.5l-.427 2h6.128l.426-2h-1.5l2.347-11h1.5l.427-2" />
      </g>
    </svg>
  );
};

export default Italic;
