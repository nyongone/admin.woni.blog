"use client";

import React, { useRef } from "react";
import { EditorView } from "codemirror";
import Heading1 from "@/components/icons/Heading1";
import Heading2 from "@/components/icons/Heading2";
import Heading3 from "@/components/icons/Heading3";
import Heading4 from "@/components/icons/Heading4";
import Image from "@/components/icons/Image";
import Bold from "@/components/icons/Bold";
import Italic from "@/components/icons/Italic";
import Strike from "@/components/icons/Strike";
import { uploadBlob } from "@/utils/vercel-blob";

interface Props {
  editorRef: React.RefObject<EditorView | null>;
}

const Toolbar = ({ editorRef }: Props) => {
  const imageRef = useRef<HTMLInputElement>(null);
  const actions = {
    heading: (headingCount: number) => {
      editorRef.current?.focus();

      if (!editorRef.current?.state.selection.ranges[0].empty) {
        const selection = editorRef.current?.state.selection.ranges[0];
        const selectedText = editorRef.current?.state.doc
          .toString()
          .slice(selection?.from, selection?.to);

        editorRef.current?.dispatch(
          editorRef.current.state.replaceSelection(
            `${`#`.repeat(headingCount)} ${selectedText}`,
          ),
        );

        return;
      }

      editorRef.current?.dispatch(
        editorRef.current?.state.replaceSelection(
          `${`#`.repeat(headingCount)} `,
        ),
      );
    },
    bold: () => {
      editorRef.current?.focus();

      if (!editorRef.current?.state.selection.ranges[0].empty) {
        const selection = editorRef.current?.state.selection.ranges[0];
        const selectedText = editorRef.current?.state.doc
          .toString()
          .slice(selection?.from, selection?.to);

        editorRef.current?.dispatch(
          editorRef.current.state.replaceSelection(`**${selectedText}**`),
        );

        return;
      }

      editorRef.current?.dispatch({
        changes: {
          from: editorRef.current.state.selection.ranges[0].to,
          to: editorRef.current.state.selection.ranges[0].to,
          insert: `****`,
        },
        selection: {
          anchor: editorRef.current.state.selection.ranges[0].from + 2,
        },
      });
    },
    italic: () => {
      editorRef.current?.focus();

      if (!editorRef.current?.state.selection.ranges[0].empty) {
        const selection = editorRef.current?.state.selection.ranges[0];
        const selectedText = editorRef.current?.state.doc
          .toString()
          .slice(selection?.from, selection?.to);

        editorRef.current?.dispatch(
          editorRef.current.state.replaceSelection(`_${selectedText}_`),
        );

        return;
      }

      editorRef.current?.dispatch({
        changes: {
          from: editorRef.current.state.selection.ranges[0].to,
          to: editorRef.current.state.selection.ranges[0].to,
          insert: `__`,
        },
        selection: {
          anchor: editorRef.current.state.selection.ranges[0].from + 1,
        },
      });
    },
    strike: () => {
      editorRef.current?.focus();

      if (!editorRef.current?.state.selection.ranges[0].empty) {
        const selection = editorRef.current?.state.selection.ranges[0];
        const selectedText = editorRef.current?.state.doc
          .toString()
          .slice(selection?.from, selection?.to);

        editorRef.current?.dispatch(
          editorRef.current.state.replaceSelection(`~~${selectedText}~~`),
        );

        return;
      }

      editorRef.current?.dispatch({
        changes: {
          from: editorRef.current.state.selection.ranges[0].to,
          to: editorRef.current.state.selection.ranges[0].to,
          insert: `~~~~`,
        },
        selection: {
          anchor: editorRef.current.state.selection.ranges[0].from + 2,
        },
      });
    },
    addImage: async (folder: string, file: File) => {
      const blob = await uploadBlob(folder, file);

      editorRef.current?.focus();
      editorRef.current?.dispatch({
        changes: {
          from: editorRef.current?.state.selection.ranges[0].to,
          to: editorRef.current?.state.selection.ranges[0].to,
          insert: `![](${blob.url})`,
        },
        selection: {
          anchor: editorRef.current?.state.selection.ranges[0].from + 2,
        },
      });
    },
  };

  return (
    <div className="flex h-auto w-full flex-row items-start justify-start gap-4">
      <button
        type="button"
        className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-sm transition-colors hover:bg-zinc-200"
        onClick={() => actions.heading(1)}
      >
        <Heading1 />
      </button>
      <button
        type="button"
        className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-sm transition-colors hover:bg-zinc-200"
        onClick={() => actions.heading(2)}
      >
        <Heading2 />
      </button>
      <button
        type="button"
        className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-sm transition-colors hover:bg-zinc-200"
        onClick={() => actions.heading(3)}
      >
        <Heading3 />
      </button>
      <button
        type="button"
        className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-sm transition-colors hover:bg-zinc-200"
        onClick={() => actions.heading(4)}
      >
        <Heading4 />
      </button>
      <button
        type="button"
        className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-sm transition-colors hover:bg-zinc-200"
        onClick={actions.bold}
      >
        <Bold />
      </button>
      <button
        type="button"
        className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-sm transition-colors hover:bg-zinc-200"
        onClick={actions.italic}
      >
        <Italic />
      </button>
      <button
        type="button"
        className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-sm transition-colors hover:bg-zinc-200"
        onClick={actions.strike}
      >
        <Strike />
      </button>
      <button
        type="button"
        className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-sm transition-colors hover:bg-zinc-200"
        onClick={() => imageRef.current?.click()}
      >
        <Image />
      </button>
      <input
        type="file"
        className="hidden"
        accept="image/jpeg, image/png, image/gif, image/jpg"
        ref={imageRef}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          if (e.target.files) actions.addImage(`images`, e.target.files[0]);
        }}
      />
    </div>
  );
};

export default Toolbar;
