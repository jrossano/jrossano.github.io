import assert from "node:assert/strict";
import { test } from "node:test";
import { knowledge } from "../content/knowledge";
import { answerQuestion, createAssistant, matchEntry } from "./chat";

test("pay in 4 matches the case study and keeps the published NPS line", () => {
  const answer = answerQuestion("Tell me about Pay in 4");
  assert.match(answer, /Chase retail mobile app/);
  assert.match(answer, /94 NPS/);
  assert.match(answer, /tens of millions/);
});

test("installment loan does not get described as Pay in 4", () => {
  const answer = answerQuestion("How does Installment Loan work?");
  assert.match(answer, /Chase travel app/);
  assert.doesNotMatch(answer, /MDS design-system/);
});

test("a greeting stays inside the portfolio", () => {
  const answer = answerQuestion("Hello");
  assert.match(answer, /published portfolio/);
});

test("unknown questions do not invent an answer", () => {
  const answer = answerQuestion("What is Joe's favorite coffee shop in Paris?");
  assert.match(answer, /I only answer from Joe Rossano's published portfolio/);
  assert.equal(matchEntry("What is Joe's favorite coffee shop in Paris?"), null);
});

test("quick-ask ids return that entry even if the label is short", () => {
  const answer = answerQuestion("FairDose", "fairdose");
  assert.match(answer, /GLP-1/);
  assert.match(answer, /in development/);
  assert.match(answer, /fairdose\.app/);
  assert.match(answer, /not released/);
  assert.doesNotMatch(answer, /apps\.apple\.com/);
});

test("email is not invented", () => {
  const answer = answerQuestion("What is Joe's email address?");
  assert.match(answer, /linkedin\.com\/in\/jrossano/);
  assert.match(answer, /does not publish an email address/);
  assert.doesNotMatch(answer, /@/);
  assert.doesNotMatch(answer, /\b\d{3}[-.\s]\d{3}[-.\s]\d{4}\b/);
});

test("hogan's recommendation is quoted, not paraphrased into a new claim", () => {
  const answer = answerQuestion("What did Hogan Lee say?");
  assert.match(answer, /three years supporting the Chase Mobile application/);
  assert.match(answer, /Swift 5\.x to Swift 6\.x/);
});

test("the default assistant is local", () => {
  assert.equal(createAssistant().mode, "local");
});

test("resume contact details stay out of every answer", () => {
  const blob = knowledge.map((entry) => `${entry.title} ${entry.answer}`).join("\n");
  assert.doesNotMatch(blob, /@/);
  assert.doesNotMatch(blob, /\b\d{3}[-.\s]\d{3}[-.\s]\d{4}\b/);
});

test("chase dates come from the resume", () => {
  const answer = answerQuestion("When did Joe start at JPMorganChase?");
  assert.match(answer, /January 2023/);
  assert.match(answer, /Installment Loan/);
  assert.match(answer, /Pay in 4/);
});
