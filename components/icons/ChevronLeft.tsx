import React from "react";

interface Props {
  width?: number;
  height?: number;
  stroke?: string;
}

const ChevronLeft = ({ width, height, stroke }: Props) => {
  return (
    <svg
      width={width ?? 24}
      height={height ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" fill="none" />
      <path
        d="M14.5 17L9.5 12L14.5 7"
        stroke={stroke ?? "#000"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChevronLeft;
