export type TokenKind = "plain" | "comment" | "string" | "keyword" | "number" | "type";

export type Token = {
  text: string;
  kind: TokenKind;
};

const KEYWORDS = new Set([
  "Any",
  "AnyObject",
  "Self",
  "as",
  "associatedtype",
  "async",
  "await",
  "break",
  "case",
  "catch",
  "class",
  "continue",
  "convenience",
  "default",
  "defer",
  "do",
  "else",
  "enum",
  "extension",
  "fallthrough",
  "false",
  "fileprivate",
  "for",
  "func",
  "get",
  "guard",
  "if",
  "import",
  "in",
  "init",
  "inout",
  "internal",
  "is",
  "lazy",
  "let",
  "mutating",
  "nil",
  "open",
  "operator",
  "override",
  "private",
  "protocol",
  "public",
  "repeat",
  "required",
  "rethrows",
  "return",
  "self",
  "set",
  "some",
  "static",
  "struct",
  "subscript",
  "super",
  "switch",
  "throw",
  "throws",
  "true",
  "try",
  "typealias",
  "unowned",
  "var",
  "weak",
  "where",
  "while",
]);

function isIdentStart(char: string): boolean {
  return /[A-Za-z_]/.test(char) || char.charCodeAt(0) > 127;
}

function isIdentPart(char: string): boolean {
  return /[A-Za-z0-9_]/.test(char) || char.charCodeAt(0) > 127;
}

function push(tokens: Token[], text: string, kind: TokenKind) {
  if (!text) return;
  const last = tokens[tokens.length - 1];
  if (last && last.kind === kind) last.text += text;
  else tokens.push({ text, kind });
}

/** Highlight Swift, including the Objective-C headers in the async/await post. */
export function highlightSwift(source: string): Token[] {
  const tokens: Token[] = [];
  let index = 0;

  while (index < source.length) {
    const char = source[index];
    const next = source[index + 1] ?? "";

    if (char === "/" && next === "/") {
      let end = index + 2;
      while (end < source.length && source[end] !== "\n") end += 1;
      push(tokens, source.slice(index, end), "comment");
      index = end;
      continue;
    }

    if (char === "/" && next === "*") {
      const close = source.indexOf("*/", index + 2);
      const end = close === -1 ? source.length : close + 2;
      push(tokens, source.slice(index, end), "comment");
      index = end;
      continue;
    }

    if (char === '"' || char === "'") {
      const quote = char;
      let end = index + 1;
      while (end < source.length && source[end] !== quote && source[end] !== "\n") {
        end += source[end] === "\\" ? 2 : 1;
      }
      if (end < source.length && source[end] === quote) end += 1;
      push(tokens, source.slice(index, end), "string");
      index = end;
      continue;
    }

    if (char === "@") {
      let end = index + 1;
      while (end < source.length && isIdentPart(source[end])) end += 1;
      push(tokens, source.slice(index, end), "keyword");
      index = end;
      continue;
    }

    if (isIdentStart(char)) {
      let end = index + 1;
      while (end < source.length && isIdentPart(source[end])) end += 1;
      const word = source.slice(index, end);
      const kind: TokenKind = KEYWORDS.has(word)
        ? "keyword"
        : word[0] === word[0].toUpperCase() && word[0] !== word[0].toLowerCase()
          ? "type"
          : "plain";
      push(tokens, word, kind);
      index = end;
      continue;
    }

    if (char >= "0" && char <= "9") {
      let end = index + 1;
      while (end < source.length && /[0-9.]/.test(source[end])) {
        if (source[end] === "." && source[end + 1] === ".") break;
        end += 1;
      }
      push(tokens, source.slice(index, end), "number");
      index = end;
      continue;
    }

    push(tokens, char, "plain");
    index += 1;
  }

  return tokens;
}
