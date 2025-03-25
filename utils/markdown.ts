import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkBreaks from "remark-breaks";
import remarkRehype from "remark-rehype";
import remarkGfm from "remark-gfm";
import rehypeStringify from "rehype-stringify";
import rehypeHighlight from "rehype-highlight";

export function parseMarkdownToHTML(markdown: string) {
  return unified()
    .use(remarkParse)
    .use(remarkBreaks)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeStringify)
    .use(rehypeHighlight)
    .processSync(markdown)
    .toString();
}
