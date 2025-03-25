"use client";

import React, { useEffect, useRef } from "react";
import { EditorView, minimalSetup } from "codemirror";
import { placeholder } from "@codemirror/view";
import { markdown } from "@codemirror/lang-markdown";
import Toolbar from "@/components/editor/Toolbar";
import { codemirrorTheme } from "@/utils/codemirror-theme";

interface Props {
  name: string;
  onMarkdownChange: (markdown: string) => void;
  onReady?: () => void;
  initialValue?: string;
}

const MarkdownEditor = ({
  name,
  onMarkdownChange,
  onReady,
  initialValue,
}: Props) => {
  const textArea = useRef<HTMLTextAreaElement>(null);
  const codeMirror = useRef<EditorView>(null);

  useEffect(() => {
    if (!textArea.current) return;

    const cm = new EditorView({
      doc: initialValue,
      extensions: [
        minimalSetup,
        placeholder("내용을 입력하세요."),
        markdown(),
        codemirrorTheme,
        EditorView.lineWrapping,
        EditorView.updateListener.of((update) => {
          if (update.docChanged) onMarkdownChange(update.state.doc.toString());
        }),
      ],
    });

    if (onReady) onReady();

    codeMirror.current = cm;
    textArea.current.parentNode?.insertBefore(cm.dom, textArea.current);

    if (initialValue)
      codeMirror.current.dispatch({
        changes: {
          from: 0,
          to: codeMirror.current.state.doc.length,
          insert: initialValue,
        },
      });

    if (textArea.current.form)
      textArea.current.form.addEventListener("submit", () => {
        if (textArea.current) textArea.current.value = cm.state.doc.toString();
      });

    return () => {
      cm.destroy();
      codeMirror.current = null;
    };
  }, []);

  return (
    <div className="flex h-full w-full flex-col items-start justify-start gap-4 overflow-y-auto">
      <Toolbar editorRef={codeMirror} />
      <hr className="h-[1px] w-full border-none bg-zinc-200" />
      <textarea name={name} ref={textArea} className="hidden" />
    </div>
  );
};

export default MarkdownEditor;
