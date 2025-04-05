import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import remarkGfm from "remark-gfm";
import rehypeStringify from "rehype-stringify";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import breaks from "@/utils/markdown/breaks";

export function parseMarkdownToHTML(markdown: string) {
  return unified()
    .use(remarkParse)
    .use(breaks)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeStringify)
    .use(rehypeHighlight)
    .processSync(markdown)
    .toString();
}
