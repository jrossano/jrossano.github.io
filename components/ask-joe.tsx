"use client";

import { FormEvent, useMemo, useState } from "react";
import { Sparkles } from "lucide-react";
import { usePathname } from "next/navigation";
import { quickAsks } from "@/content/knowledge";
import { createAssistant, type ChatTurn } from "@/lib/chat";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Logo } from "@/components/logo";

const greeting: ChatTurn = {
  role: "assistant",
  content:
    "Hi. I'm a scoped assistant for Joe Rossano's portfolio. I answer from his published bio, competencies, case studies, testimonials, and blog summaries. I don't invent dates, employers, or metrics.",
};

export function AskJoe() {
  const assistant = useMemo(() => createAssistant(), []);
  const [turns, setTurns] = useState<ChatTurn[]>([greeting]);
  const [draft, setDraft] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  async function ask(question: string, entryId?: string) {
    const cleaned = question.trim();
    if (!cleaned || pending) return;
    const history = turns.filter((turn) => turn !== greeting);
    setTurns((current) => [...current, { role: "user", content: cleaned }]);
    setDraft("");
    setError("");
    setPending(true);
    try {
      const answer = await assistant.reply(cleaned, history, entryId);
      setTurns((current) => [...current, { role: "assistant", content: answer }]);
    } catch {
      setError("The assistant couldn't answer just now. The quick-ask buttons still run entirely on this page.");
    } finally {
      setPending(false);
    }
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    void ask(draft);
  }

  return (
    <section id="ask-joe" aria-labelledby="ask-heading" className="relative scroll-mt-28 px-4 py-16 sm:px-6">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-sky/10 blur-3xl" />
      <div className="relative mx-auto max-w-3xl">
        <p className="text-center font-mono text-xs uppercase tracking-[0.2em] text-sky">Scoped portfolio assistant</p>
        <h2 id="ask-heading" className="mt-3 text-center text-3xl font-bold text-cloud md:text-5xl">
          Ask <span className="text-sky">Joe</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-sm text-ash sm:text-base">
          Questions about iOS work at JPMorganChase, FairDose, accessibility, testimonials, and the published case studies.
        </p>

        <div className="panel mt-8 overflow-hidden" data-assistant={assistant.mode}>
          <div className="flex items-center justify-between gap-3 border-b border-cloud/10 px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-sky" aria-hidden />
              <span className="h-2.5 w-2.5 rounded-full bg-royal" aria-hidden />
              <span className="h-2.5 w-2.5 rounded-full bg-amber" aria-hidden />
              <p className="ml-2 font-mono text-xs text-ash">ask-joe ~ portfolio</p>
            </div>
            <p className="rounded-full bg-midnight px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-sky">
              {assistant.mode === "local" ? "Local knowledge" : "Remote model"}
            </p>
          </div>

          <div className="px-4 py-4 sm:px-6">
            <p className="text-xs text-ash">
              Quick ask
              <span className="sr-only">. These buttons insert a prepared question.</span>
            </p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {quickAsks.map((entry) => (
                <li key={entry.id}>
                  <Button type="button" variant="outline" size="sm" onClick={() => void ask(entry.chip ?? entry.title, entry.id)}>
                    {entry.chip}
                  </Button>
                </li>
              ))}
            </ul>

            <div role="log" aria-live="polite" aria-relevant="additions" className="mt-5 max-h-96 space-y-3 overflow-y-auto pr-1">
              {turns.map((turn, index) => (
                <p
                  key={`${turn.role}-${index}`}
                  className={
                    turn.role === "user"
                      ? "ml-8 rounded-2xl bg-royal px-4 py-3 text-sm leading-relaxed text-cloud"
                      : "mr-4 rounded-2xl bg-midnight px-4 py-3 text-sm leading-relaxed text-cloud"
                  }
                >
                  <span className="mb-1 block font-mono text-[10px] uppercase tracking-wider text-ash">
                    {turn.role === "user" ? "You" : "Ask Joe"}
                  </span>
                  {turn.content}
                </p>
              ))}
              {pending ? <p className="text-sm text-ash">Looking through the portfolio…</p> : null}
            </div>

            {error ? (
              <p role="alert" className="mt-3 text-sm text-amber">
                {error}
              </p>
            ) : null}

            <form onSubmit={onSubmit} className="mt-4 flex flex-col gap-2 sm:flex-row">
              <label htmlFor="ask-joe-input" className="sr-only">
                Ask a question about Joe Rossano
              </label>
              <Input
                id="ask-joe-input"
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                placeholder="Ask about Pay in 4, accessibility, FairDose…"
                autoComplete="off"
              />
              <Button type="submit" disabled={pending || draft.trim().length === 0} className="sm:w-28">
                Ask
              </Button>
            </form>
            <p className="mt-3 text-xs text-ash">
              {assistant.mode === "local"
                ? "Runs in the browser from a local knowledge file. No API key."
                : "This build calls NEXT_PUBLIC_CHAT_ENDPOINT. Quick ask still has local answers if that call fails."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AskLauncher() {
  const pathname = usePathname() || "/";
  const href = pathname === "/" ? "#ask-joe" : "/#ask-joe";
  return (
    <a
      href={href}
      className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 rounded-full border border-cloud/15 bg-navy/95 py-2 pl-2 pr-3 text-left shadow-[0_0_24px_-8px_rgba(0,168,255,0.8)] backdrop-blur sm:bottom-6 sm:right-6"
    >
      <Logo className="h-8 w-8 rounded-lg" labelled />
      <span className="hidden sm:block">
        <span className="flex items-center gap-1 text-xs font-semibold text-cloud">
          Ask Joe <Sparkles className="h-3 w-3 text-sky" aria-hidden />
        </span>
        <span className="block text-[10px] text-ash">Portfolio Q&amp;A</span>
      </span>
      <span className="sr-only sm:hidden">Ask Joe, portfolio Q and A</span>
    </a>
  );
}
