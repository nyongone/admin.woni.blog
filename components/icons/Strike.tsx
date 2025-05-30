import React from "react";

interface Props {
  width?: number;
  height?: number;
}

const Strike = ({ width, height }: Props) => {
  return (
    <svg
      width={width ?? 24}
      height={height ?? 24}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0" fill="none" width="24" height="24" />

      <g>
        <path d="M10.837 10.163l-4.6 4.6L10 4h4l.777 2.223-2.144 2.144-.627-2.092-1.17 3.888zm5.495.506L19.244 19H15.82l-1.05-3.5H11.5L5 22l-1.5-1.5 17-17L22 5l-5.668 5.67zm-2.31 2.31l-.032.03.032-.01v-.02z" />
      </g>
    </svg>
  );
};

export default Strike;
