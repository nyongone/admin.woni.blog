"use client";

import React, { useEffect } from "react";

interface Props {
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ onClose, children }: Props) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "";
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 flex h-screen w-full items-center justify-center bg-[rgba(0,0,0,0.25)]"
      onClick={() => onClose()}
    >
      <div
        className="auto relative min-w-96 rounded-lg bg-white p-8 shadow-2xl"
        onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
