import React from "react";

interface Props {
  width?: number;
  height?: number;
}

const Image = ({ width, height }: Props) => {
  return (
    <svg
      width={width ?? 24}
      height={height ?? 24}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0" fill="none" width="24" height="24" />

      <g>
        <path d="M20 6v12c0 1.105-.895 2-2 2H6c-1.105 0-2-.895-2-2V6c0-1.105.895-2 2-2h12c1.105 0 2 .895 2 2zm-2 0H6v6.38l2.19-2.19 5.23 5.23 1-1c.63-.504 1.536-.456 2.11.11L18 16V6zm-5 3.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5z" />
      </g>
    </svg>
  );
};

export default Image;
