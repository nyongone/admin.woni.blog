import React from "react";

interface Props {
  width?: number;
  height?: number;
}

const Heading4 = ({ width, height }: Props) => {
  return (
    <svg
      width={width ?? 24}
      height={height ?? 24}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0" fill="none" width="24" height="24" />

      <g>
        <path d="M11 17H9v-4H5v4H3V7h2v4h4V7h2v10zm10-2h-1v2h-2v-2h-5v-2l4.05-6H20v6h1v2zm-3-2V9l-2.79 4H18z" />
      </g>
    </svg>
  );
};

export default Heading4;
