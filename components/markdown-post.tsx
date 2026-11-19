import type { ReactNode } from "react";
import { highlightSwift, type TokenKind } from "@/lib/highlight";

type Block =
  | { type: "h2" | "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "code"; code: string }
  | { type: "image"; alt: string; src: string };

const tokenClass: Record<TokenKind, string> = {
  plain: "text-cloud",
  comment: "text-ash",
  string: "text-amber",
  keyword: "text-sky",
  number: "text-[#d7b4ff]",
  type: "text-[#9ecbff]",
};

function parseMarkdown(source: string): Block[] {
  const blocks: Block[] = [];
  const pattern = /```(\w*)\n([\s\S]*?)```/g;
  let cursor = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(source))) {
    pushText(blocks, source.slice(cursor, match.index));
    blocks.push({ type: "code", code: match[2].replace(/\n$/, "") });
    cursor = match.index + match[0].length;
  }
  pushText(blocks, source.slice(cursor));
  return blocks;
}

function pushText(blocks: Block[], source: string) {
  const lines = source.split("\n");
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];
    const trimmed = line.trim();

    if (!trimmed) {
      index += 1;
      continue;
    }

    if (trimmed.startsWith("### ")) {
      blocks.push({ type: "h3", text: trimmed.slice(4).trim() });
      index += 1;
      continue;
    }

    if (trimmed.startsWith("## ")) {
      blocks.push({ type: "h2", text: trimmed.slice(3).trim() });
      index += 1;
      continue;
    }

    const image = trimmed.match(/^!\[([^\]]*)]\(([^)]+)\)$/);
    if (image) {
      blocks.push({ type: "image", alt: image[1] || "Code sample screenshot", src: image[2] });
      index += 1;
      continue;
    }

    if (trimmed.startsWith("- ")) {
      const items: string[] = [];
      while (index < lines.length && lines[index].trim().startsWith("- ")) {
        items.push(lines[index].trim().slice(2).trim());
        index += 1;
      }
      blocks.push({ type: "ul", items });
      continue;
    }

    const paragraph: string[] = [trimmed];
    index += 1;
    while (index < lines.length && lines[index].trim() && !isSpecial(lines[index].trim())) {
      paragraph.push(lines[index].trim());
      index += 1;
    }
    blocks.push({ type: "p", text: paragraph.join(" ") });
  }
}

function isSpecial(line: string): boolean {
  return line.startsWith("## ") || line.startsWith("### ") || line.startsWith("- ") || line.startsWith("![");
}

function RichText({ text }: { text: string }) {
  const nodes: ReactNode[] = [];
  const pattern = /\[([^\]]+)]\(([^)]+)\)/g;
  let cursor = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = pattern.exec(text))) {
    if (match.index > cursor) nodes.push(text.slice(cursor, match.index));
    const href = match[2];
    const external = href.startsWith("http");
    nodes.push(
      <a
        key={key}
        href={href}
        className="text-sky underline decoration-sky/40 underline-offset-2 hover:decoration-sky"
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {match[1]}
      </a>,
    );
    key += 1;
    cursor = match.index + match[0].length;
  }

  if (cursor < text.length) nodes.push(text.slice(cursor));
  return <>{nodes}</>;
}

export function MarkdownPost({ source }: { source: string }) {
  const blocks = parseMarkdown(source);
  let figure = 0;

  return (
    <div className="blog-post space-y-5 text-base leading-relaxed text-ash">
      {blocks.map((block, index) => {
        if (block.type === "h2") {
          return (
            <h2 key={index} className="pt-6 text-2xl font-bold tracking-tight text-cloud sm:text-3xl">
              {block.text}
            </h2>
          );
        }
        if (block.type === "h3") {
          return (
            <h3 key={index} className="pt-2 text-xl font-semibold text-cloud">
              {block.text}
            </h3>
          );
        }
        if (block.type === "ul") {
          return (
            <ul key={index} className="list-disc space-y-2 pl-5">
              {block.items.map((item) => (
                <li key={item}>
                  <RichText text={item} />
                </li>
              ))}
            </ul>
          );
        }
        if (block.type === "code") {
          const tokens = highlightSwift(block.code);
          return (
            <pre
              key={index}
              className="overflow-x-auto rounded-2xl border border-cloud/15 bg-[#070d1c] p-4 text-[13px] leading-6 sm:text-sm"
            >
              <code className="font-mono">
                {tokens.map((token, tokenIndex) => (
                  <span key={tokenIndex} className={tokenClass[token.kind]}>
                    {token.text}
                  </span>
                ))}
              </code>
            </pre>
          );
        }
        if (block.type === "image") {
          figure += 1;
          return (
            <figure key={index} className="overflow-hidden rounded-2xl border border-cloud/15 bg-navy">
              {/* The Wix posts store each sample as an Xcode screenshot. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={block.src} alt={block.alt || `Code sample screenshot ${figure}`} className="h-auto w-full" />
            </figure>
          );
        }
        return (
          <p key={index}>
            <RichText text={block.text} />
          </p>
        );
      })}
    </div>
  );
}
