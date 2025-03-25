import { EditorView } from "codemirror";

export const codemirrorTheme = EditorView.theme({
  "&": {
    fontSize: "1rem",
    color: "var(--color-zinc-700)",
    width: "100%",
    height: "auto",
    maxHeight: "100%",
    overflowY: "hidden",
  },
  "&.cm-focused": {
    outline: "none",
  },
  "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": {
    background: "var(--color-blue-200)",
  },
  ".cm-line": {
    padding: "0",
  },
});
