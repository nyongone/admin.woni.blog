/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    typography: {
      DEFAULT: {
        css: {
          color: "var(--color-zinc-700)",
          h1: {
            fontSize: "2rem",
            fontWeight: "bold",
            margin: "1.5rem 0",
          },
          h2: {
            fontSize: "1.75rem",
            fontWeight: "bold",
            margin: "1.5rem 0",
          },
          h3: {
            fontSize: "1.5rem",
            fontWeight: "bold",
            margin: "1.5rem 0",
          },
          h4: {
            fontSize: "1.25rem",
            fontWeight: "bold",
            margin: "1.5rem 0",
          },
          p: {
            fontSize: "1rem",
            fontWeight: "normal",
            lineHeight: "1.75",
            wordBreak: "break-all",
            marginBlockStart: "1rem",
            marginBlockEnd: "1rem",
          },
          ul: {
            fontSize: "1rem",
            lineHeight: "1.5",
            listStyle: "disc",
            margin: "1.5rem 0",
            paddingLeft: "1.5rem",
          },
          ol: {
            fontSize: "1rem",
            lineHeight: "1.5",
            listStyle: "decimal",
            margin: "1.5rem 0",
            paddingLeft: "1.5rem",
          },
          pre: {
            width: "100%",
            height: "auto",
            padding: "1.25rem",
            margin: "2rem 0",
            backgroundColor: "var(--color-zinc-50)",
            borderRadius: "0.75rem",
            overflowX: "auto",
            fontSize: "1.25rem",
          },
          "pre code": {
            display: "inline-block",
            padding: "0 0.25rem",
            margin: "0 0.25rem",
            fontSize: "1rem",
            borderRadius: "0.5rem",
            backgroundColor: "var(--color-zinc-100)",
            color: "var(--color-zinc-700)",
          },
          code: {
            display: "inline-block",
            padding: "0 0.3rem",
            margin: "0 0.25rem",
            fontSize: "1rem",
            fontWeight: "normal",
            borderRadius: "0.5rem",
            backgroundColor: "var(--color-zinc-50)",
            color: "var(--color-zinc-700)",
            "&::before, &::after": {
              content: `"" !important`,
            },
          },
          hr: {
            width: "100%",
            height: "1px",
            border: "none",
            backgroundColor: "var(--color-zinc-200)",
          },
          blockquote: {
            width: "auto",
            height: "auto",
            padding: "0.25rem",
            paddingLeft: "1.25rem",
            borderLeft: "5px solid var(--color-blue-400)",
            backgroundColor: "var(--color-blue-50)",
          },
          iframe: {
            maxWidth: "100%",
          },
        },
      },
    },
  },
};
