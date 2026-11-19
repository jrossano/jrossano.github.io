/**
 * Ask Joe.
 *
 * The default assistant matches a question against content/knowledge.ts and
 * returns a prewritten answer. It does not call a network API and needs no key.
 *
 * To plug in a real model later, set NEXT_PUBLIC_CHAT_ENDPOINT to a URL that
 * accepts POST JSON:
 *   { "messages": [{ "role": "user" | "assistant", "content": string }] }
 * and returns JSON:
 *   { "answer": string }
 * The browser will call that URL directly, so the endpoint must allow CORS
 * from the site origin. Rebuild after changing the variable — Next inlines
 * NEXT_PUBLIC_* at build time, including static export.
 */

import { knowledge, type KnowledgeEntry } from "../content/knowledge";

export type ChatRole = "user" | "assistant";

export type ChatTurn = {
  role: ChatRole;
  content: string;
};

export interface PortfolioAssistant {
  readonly mode: "local" | "http";
  reply(question: string, history: ChatTurn[], entryId?: string): Promise<string>;
}

const STOP = new Set([
  "a",
  "an",
  "the",
  "of",
  "to",
  "and",
  "for",
  "on",
  "in",
  "with",
  "his",
  "he",
  "joe",
  "about",
  "what",
  "how",
  "does",
  "did",
  "is",
  "are",
  "was",
  "were",
  "me",
  "my",
  "tell",
  "please",
  "you",
  "your",
  "do",
  "can",
  "who",
  "whom",
  "from",
  "that",
  "this",
  "it",
  "as",
  "at",
  "be",
  "or",
  "if",
  "into",
  "rossano",
  "i",
]);

export const FALLBACK =
  "I only answer from Joe Rossano's published portfolio: his bio, core competencies, app case studies, testimonials, training, and blog summaries. Try Pay in 4, Installment Loan, accessibility, FairDose, testimonials, or how he uses AI.";

export function normalize(value: string): string {
  return value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9+./\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function isGreeting(question: string): boolean {
  const q = normalize(question);
  return /^(hi|hey|hello|howdy|good morning|good afternoon|good evening)( there)?$/.test(q);
}

export function scoreEntry(question: string, entry: KnowledgeEntry): number {
  const q = normalize(question);
  if (!q) return 0;
  const tokens = new Set(q.split(" ").filter((token) => token.length > 1 && !STOP.has(token)));
  let score = 0;
  for (const keyword of entry.keywords) {
    const needle = normalize(keyword);
    if (!needle) continue;
    if (needle.includes(" ") && q.includes(needle)) {
      score += 8 + needle.length / 8;
      continue;
    }
    if (tokens.has(needle)) {
      score += needle.length > 4 ? 4 : 3;
      continue;
    }
    if (needle.length > 4 && q.includes(needle)) score += 2;
  }
  return score;
}

export function matchEntry(question: string, entryId?: string): KnowledgeEntry | null {
  if (entryId) return knowledge.find((entry) => entry.id === entryId) ?? null;
  if (isGreeting(question)) return knowledge.find((entry) => entry.id === "greeting") ?? null;
  let best: KnowledgeEntry | null = null;
  let bestScore = 0;
  for (const entry of knowledge) {
    if (entry.id === "greeting") continue;
    const score = scoreEntry(question, entry);
    if (score > bestScore) {
      best = entry;
      bestScore = score;
    }
  }
  return bestScore >= 3 ? best : null;
}

export function answerQuestion(question: string, entryId?: string): string {
  return matchEntry(question, entryId)?.answer ?? FALLBACK;
}

export class LocalKnowledgeAssistant implements PortfolioAssistant {
  readonly mode = "local" as const;

  async reply(question: string, _history: ChatTurn[], entryId?: string): Promise<string> {
    return answerQuestion(question, entryId);
  }
}

export class HttpLlmAssistant implements PortfolioAssistant {
  readonly mode = "http" as const;

  constructor(private readonly endpoint: string) {}

  async reply(question: string, history: ChatTurn[]): Promise<string> {
    const response = await fetch(this.endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        messages: [...history, { role: "user", content: question }],
      }),
    });
    if (!response.ok) {
      throw new Error(`Assistant endpoint returned ${response.status}`);
    }
    const data = (await response.json()) as { answer?: unknown };
    if (typeof data.answer !== "string" || data.answer.trim().length === 0) {
      throw new Error("Assistant endpoint returned no answer");
    }
    return data.answer;
  }
}

export function createAssistant(): PortfolioAssistant {
  const endpoint = process.env.NEXT_PUBLIC_CHAT_ENDPOINT;
  if (endpoint && endpoint.trim().length > 0) {
    return new HttpLlmAssistant(endpoint.trim());
  }
  return new LocalKnowledgeAssistant();
}
