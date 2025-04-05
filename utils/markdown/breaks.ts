import { Root } from "mdast";
import { findAndReplace } from "mdast-util-find-and-replace";

export default function breaks() {
  return function (tree: Root) {
    findAndReplace(tree, [/\n/g, () => ({ type: "break" })]);
  };
}
