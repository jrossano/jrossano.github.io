/**
 * Local knowledge for Ask Joe.
 * Answers come from the published site, the resume, and the FairDose note.
 * The resume's phone number and email are not included.
 */

import { roles, roleLine } from "./experience";
import {
  aiNote,
  aiPrinciples,
  apps,
  competencies,
  posts,
  profile,
  techStack,
  testimonials,
  training,
} from "./site";

export type KnowledgeEntry = {
  id: string;
  title: string;
  chip?: string;
  keywords: string[];
  answer: string;
};

const featuredQuotes = testimonials.filter((item) => item.featured);
const moreQuotes = testimonials.filter((item) => !item.featured);

function quoteBlock(id: string): string {
  const item = testimonials.find((entry) => entry.id === id);
  if (!item) return "";
  return `"${item.quote}" — ${item.name}, ${item.role}`;
}

export const knowledge: KnowledgeEntry[] = [
  {
    id: "greeting",
    title: "Hello",
    keywords: ["hello", "hi", "hey", "good morning", "good afternoon"],
    answer:
      "Hi. I answer from Joe Rossano's published portfolio: bio, competencies, case studies, testimonials, training, and blog summaries. I don't invent dates, metrics, or employers. Ask about Pay in 4, Installment Loan, accessibility, FairDose, or how he uses AI.",
  },
  {
    id: "bio",
    title: "Bio",
    keywords: ["bio", "background", "who is", "about joe", "25 years", "25+", "since 2012", "scrum master", "application architect", "lead developer"],
    answer: profile.bio,
  },
  {
    id: "pay-in-4",
    title: "Pay in 4",
    chip: "Pay in 4",
    keywords: ["pay in 4", "pay-in-4", "payin4", "mds", "mvvm-c", "retail mobile", "94 nps", "nps", "tens of millions"],
    answer: `${apps.find((app) => app.id === "pay-in-4")?.body} On the resume this is Lead iOS Engineer at JPMorganChase, January 2023 to present, in Atlanta. ${roles.find((role) => role.id === "pay-in-4")?.bullets.join(" ")}`,
  },
  {
    id: "installment-loan",
    title: "Installment Loan",
    chip: "Installment Loan",
    keywords: ["installment", "installment loan", "chase travel", "recurring payment", "loan-detail", "loan detail", "swiftui mvvm"],
    answer: `${apps.find((app) => app.id === "installment-loan")?.body} On the resume this is Lead iOS Engineer at JPMorganChase, November 2024 to present. ${roles.find((role) => role.id === "installment-loan")?.bullets.join(" ")}`,
  },
  {
    id: "chase",
    title: "JPMorganChase",
    keywords: ["jpmorgan", "jpmorganchase", "chase", "chase mobile", "lead software engineer", "current role", "atlanta", "january 2023"],
    answer: `Joe has been a Lead iOS Engineer at JPMorganChase in Atlanta since January 2023. Installment Loan (Nov 2024 – Present) and Pay in 4 (Jan 2023 – Present) are both current. ${roles
      .filter((role) => role.era === "chase")
      .map((role) => `${role.product} (${role.dates}): ${role.bullets.join(" ")}`)
      .join(" ")}`,
  },
  {
    id: "accessibility",
    title: "Accessibility",
    chip: "Accessibility",
    keywords: ["accessibility", "accessible", "ada", "voiceover", "dynamic type", "dark mode", "a11y", "vision-impaired"],
    answer: `Accessibility is one of Joe's published core competencies: "${competencies.find((item) => item.title === "Accessibility")?.body}." Pay in 4 has a fully ADA-compliant VoiceOver experience along with dynamic type and dark mode support for vision-impaired customers. Installment Loan's screens support dynamic type, dark mode, and VoiceOver. His bio says he is focused on accessible design.`,
  },
  {
    id: "ai",
    title: "How Joe uses AI",
    chip: "How he uses AI",
    keywords: ["ai", "copilot", "claude", "windsurf", "llm suite", "llm", "artificial intelligence", "responsible"],
    answer: `Joe's AI-Assisted Engineering competency: "${competencies.find((item) => item.title === "AI-Assisted Engineering")?.body}." ${aiPrinciples.map((item) => `${item.title}: ${item.body}`).join(" ")} In his words: "${aiNote}"`,
  },
  {
    id: "fairdose",
    title: "FairDose",
    chip: "FairDose",
    keywords: ["fairdose", "fair dose", "glp-1", "glp1", "injection", "r&d", "rnd", "side project", "own app"],
    answer: `FairDose is an iOS GLP-1 injection tracker currently in development. The site is ${profile.fairdose}. It is not released, and there is no App Store link.`,
  },
  {
    id: "testimonials",
    title: "Testimonials",
    chip: "Testimonials",
    keywords: ["testimonial", "testimonials", "recommend", "recommendation", "reference", "what people say"],
    answer: `Three recommendations lead the portfolio. ${featuredQuotes
      .map((item) => `${item.name}, ${item.role}, writes: "${item.quote.split(". ")[0]}.")`)
      .join(" ")} The full text of each is in the testimonials section. Four more published recommendations are on the About page, from ${moreQuotes.map((item) => `${item.name} (${item.role})`).join("; ")}.`,
  },
  {
    id: "hogan-lee",
    title: "Hogan Lee",
    keywords: ["hogan", "hogan lee", "swift 6", "swift 5", "uikit", "zero-to-one", "lending"],
    answer: quoteBlock("hogan-lee"),
  },
  {
    id: "patrick-lind",
    title: "Patrick Lind",
    keywords: ["patrick", "patrick lind", "eli lilly", "lilly"],
    answer: quoteBlock("patrick-lind"),
  },
  {
    id: "james-schorey",
    title: "James Schorey",
    keywords: ["james", "schorey", "cto", "control bionics"],
    answer: quoteBlock("james-schorey"),
  },
  {
    id: "neuronode",
    title: "NeuroNode",
    keywords: ["neuronode", "neuro node", "emg", "assistive", "charts framework", "control bionics"],
    answer: `${apps.find((app) => app.id === "neuronode")?.body} On the resume this is Senior iOS Developer at E-gineering, client Control Bionics, Inc, March 2017 to August 2017. ${roles.find((role) => role.id === "neuronode-role")?.bullets.join(" ")} ${roles.find((role) => role.id === "neuronode-role")?.note} ${quoteBlock("james-schorey")}`,
  },
  {
    id: "puck",
    title: "Puck",
    keywords: ["puck", "smashtoast", "universal remote", "infrared", "barnabas"],
    answer: `${apps.find((app) => app.id === "puck")?.body} ${quoteBlock("barnabas-helmy")}`,
  },
  {
    id: "bluetooth",
    title: "Core Bluetooth",
    keywords: ["bluetooth", "ble", "core bluetooth", "corebluetooth"],
    answer: `Core Bluetooth and Bluetooth Low Energy show up in four published case studies. NeuroNode Controller uses BLE and Core Bluetooth to personalize a wearable EMG device, with Charts for real-time EMG graphing. Compliance Testing uses BLE, RZBluetooth, and Nordic Semiconductor's CoreBluetoothMock for unit tests of proprietary medical devices. Puck uses BLE and Core Bluetooth to send IR commands to custom hardware. Filter Monitor uses BLE and Core Bluetooth to read real-time data from diesel filter sensors.`,
  },
  {
    id: "tech-stack",
    title: "Tech stack",
    chip: "Tech stack",
    keywords: ["tech stack", "stack", "swift", "swiftui", "concurrency", "mvvm", "spm", "swift package", "xctest", "swift testing", "wiremock", "split", "harness", "competenc"],
    answer: `Published core competencies — ${competencies.map((item) => `${item.title}: ${item.body}`).join(" ")} The tech strip on this site lists ${techStack.join(", ")}.`,
  },
  {
    id: "experience",
    title: "Experience",
    chip: "Experience",
    keywords: [
      "experience",
      "career",
      "resume",
      "employment",
      "worked at",
      "job",
      "timeline",
      "principal software",
      "e-gineering",
      "egineering",
      "medxcel",
      "cummins",
      "teva",
      "ncaa",
      "cook medical",
      "humanities",
      "dwd",
      "scrum master",
    ],
    answer: `JPMorganChase, Atlanta, January 2023 to present. E-gineering, Indianapolis, October 2005 to December 2022. ${roles
      .map((role) => `${roleLine(role)} at ${role.employer}. ${role.summary}`)
      .join(" ")}`,
  },
  {
    id: "education",
    title: "Training and education",
    keywords: ["education", "rutgers", "certification", "certified", "scrum", "aws", "degree", "training", "big nerd", "java"],
    answer: `Certifications and education from the resume: ${training
      .map((group) => `${group.group}: ${group.items.join("; ")}`)
      .join(". ")}.`,
  },
  {
    id: "blog",
    title: "Blog",
    keywords: ["blog", "post", "essay", "generics", "protocols", "extensions", "closures", "optionals", "async/await", "async await", "swift essentials"],
    answer: `Six posts are published on this site. ${posts
      .map((post) => `${post.title} (${post.date}): ${post.summary}`)
      .join(" ")}`,
  },
  ...posts.map((post) => ({
    id: `post-${post.id}`,
    title: post.title,
    keywords: [post.title.toLowerCase().replace(":", ""), post.id.replace(/-/g, " ")],
    answer: `${post.title} (${post.date}): ${post.summary}`,
  })),
  {
    id: "apps",
    title: "Apps",
    keywords: ["apps", "case study", "case studies", "projects", "portfolio", "which apps", "flappy", "dashboard", "viper", "woodblock", "pointillize", "music viewer", "agile roadmap", "irate", "tech-xpert", "rsq"],
    answer: `The Apps page keeps every case study from the current site, in the published order: ${apps
      .map((app) => app.name)
      .join(", ")}. Ask about one by name for the write-up. Gallery images from the Weebly Apps page are on this site. Portfolio and IRIS are resume projects for Cook Medical Group and were not on that page.`,
  },
  {
    id: "contact",
    title: "Contact",
    keywords: ["contact", "email", "e-mail", "hire", "booking", "calendar", "calendly", "phone", "reach", "talk", "linkedin"],
    answer: `Message Joe on LinkedIn: ${profile.linkedin}. This site does not publish an email address, a phone number, or a booking link.`,
  },
  {
    id: "location",
    title: "Location",
    keywords: ["atlanta", "location", "where", "time zone", "timezone", "based", "georgia"],
    answer:
      "Joe is based in the Atlanta area. The globe on this site marks Atlanta. The current site does not say whether he is flexible across time zones, so this assistant does not claim that.",
  },
];

export const quickAsks = knowledge.filter((entry) => entry.chip);
