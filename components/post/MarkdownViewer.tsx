import React from "react";
import { parseMarkdownToHTML } from "@/utils/markdown";

import "@/styles/hljs.css";

interface Props {
  markdown: string;
}

const MarkdownViewer = ({ markdown }: Props) => {
  return (
    <div
      className="prose w-full"
      dangerouslySetInnerHTML={{
        __html: parseMarkdownToHTML(markdown),
      }}
    ></div>
  );
};

export default MarkdownViewer;
