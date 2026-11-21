/**
 * Portfolio copy from Joe Rossano's published Weebly site
 * (Home, About, Apps, Blog), his resume, and the FairDose facts he supplied.
 * Phone number and email from the resume are intentionally not published.
 */

export const profile = {
  name: "Joe Rossano",
  role: "Lead Software Engineer",
  location: "Atlanta area",
  email: "joe@rossano.net",
  linkedin: "https://www.linkedin.com/in/jrossano",
  fairdose: "https://fairdose.app",
  fairdoseSummary: "A privacy-first iOS GLP-1 injection tracker currently in development.",
  fairdoseDescription: "Track your doses, weight, and symptoms, and keep your medication schedule with reminders.",
  eyebrow: "Joe Rossano, Lead Software Engineer",
  headlineLead: "Over 25 years writing software and leading teams.",
  headlineAccent:
    "Native iOS since 2012. Leading iOS development for Pay in 4 and Installment Loan projects at JPMorganChase.",
  bio: "Lead Software Engineer with over 25 years of experience writing software and leading teams, having served as a Lead Software Engineer, Application Architect, and Scrum Master. Specializing in the design and development of native iOS apps since 2012, with a track record of shipping customer-facing features at scale, championing modern Swift practices, and mentoring high-performing teams. I currently lead iOS engineering on Pay in 4 and Installment Loan projects at JPMorganChase, reaching tens of millions of customers with a 94 NPS.",
} as const;

/** A short first-person line Joe supplied. He expects to rewrite it. */
export const aiNote = "I use GitHub Copilot in VS Code and Claude Opus in Xcode.";

export const competencies = [
  {
    title: "Architecture & Engineering Practices",
    body: "Swift Concurrency (async/await, actors), MVVM/MVVM-C, Swift 6 migration & strict concurrency, Swift Package Manager & modularization, system design & API integration",
  },
  {
    title: "Accessibility",
    body: "ADA compliance, VoiceOver, Dynamic Type, Dark Mode — accessible by default, not an afterthought",
  },
  {
    title: "Engineering Excellence",
    body: "Full SDLC, CI/build management, automated unit & UI testing (XCTest, Swift Testing), API contract testing (WireMock), secure coding, reusable design patterns",
  },
  {
    title: "Team Development",
    body: "Mentoring, onboarding, technical training, code reviews, performance feedback",
  },
  {
    title: "Agile & Delivery Leadership",
    body: "Scrum/Kanban, backlog & JIRA management, sprint & release planning, dependency tracking, risk/issue management, project governance",
  },
  {
    title: "Stakeholder Management",
    body: "Senior-level communication, proactive escalation, cross-functional coordination (Product, BA, QA, Ops, DCE, ADA)",
  },
  {
    title: "Payments & FinTech",
    body: "Consumer payment flows, one-time & automatic payments, loan origination and management, high-volume mobile banking, A/B testing & feature flagging (Split/Harness)",
  },
  {
    title: "AI-Assisted Engineering",
    body: "GitHub Copilot, Claude Code, Windsurf AI, LLM Suite; responsible & secure AI adoption, engineering skill development, pattern reuse",
  },
] as const;

/** Technologies named in the competency list and the case studies. */
export const techStack = [
  "Swift",
  "SwiftUI",
  "Swift Concurrency",
  "Swift 6",
  "MVVM",
  "MVVM-C",
  "Swift Package Manager",
  "Swift Testing",
  "UIKit",
  "VoiceOver",
  "Dynamic Type",
  "WireMock",
  "Split / Harness",
  "Core Bluetooth",
  "GitHub Copilot",
  "Claude Code",
  "AWS"
] as const;

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  featured: boolean;
};

export const testimonials: Testimonial[] = [
  {
    id: "hogan-lee",
    featured: true,
    name: "Hogan Lee",
    role: "VP - SR Manager of Software Engineering at JPMorganChase",
    quote:
      "I would highly recommend Joe Rossano for a Lead Software Engineer or Engineering Manager role. I have worked with Joe for three years supporting the Chase Mobile application with millions of active users and have witnessed Joe's impressive technical depth, thorough documentation, clear communication, and ability to break down complex engineering efforts into smaller tasks. Joe is considered an iOS expert on the team and was trusted with large scale efforts such as updating Swift 5.x to Swift 6.x code, migrating a large UIKit codebase to SwiftUI, and building brand new zero-to-one lending products. In addition to his technical abilities, Joe collaborates seamlessly with our various partners, including QA, design, product, data & analytics. Beyond his individual contributions, he regularly mentors other engineers, drives productive design discussions, and helps teams make practical decisions that balance short-term delivery with long-term sustainability. I am confident recommending Joe for the previously mentioned roles. He has the enviable combination of technical expertise, clear communication, and leadership ability, which will benefit everyone who works with him.",
  },
  {
    id: "patrick-lind",
    featured: true,
    name: "Patrick Lind",
    role: "Associate Director at Eli Lilly and Company",
    quote:
      "Joe is a first class iOS engineer in every sense of the word. On top of writing easy to read, well structured Swift code, his architecture and software design sensibilities are top notch. He has a great knack for being able to think through and design his software in advance and then appropriately document the software designs. Joe's ability to not just understand the software but to ask questions and understand the Why behind the work being done was very much appreciated as that allowed him to come up with innovative solutions to problems we had on his own. I would personally recommend Joe to anyone looking for a highly talented iOS software engineer to partner with in creating amazing software products!",
  },
  {
    id: "james-schorey",
    featured: true,
    name: "James Schorey",
    role: "CTO at Control Bionics",
    quote:
      "Joe Rossano was the Principal Software Engineer on our first iOS Application, the NeuroNode. It is notable that I did not know Joe before this project. We stayed on schedule and had a smooth rollout in large part due to Joe's expertise in the field. He worked faithfully with our requirements document and, when parts of the project were undefined, he was an indispensable team member as we designed and implemented the missing parts of the user experience. As the CTO of Control Bionics, I can pay Joe the highest compliment: He made my life easy. His combination of technical prowess and superb human interaction skills is nearly impossible to find. I would enthusiastically recommend Mr. Joe Rossano on your next project.",
  },
  {
    id: "barnabas-helmy",
    featured: false,
    name: "Barnabas Helmy",
    role: "CEO and Founder at SmashToast, Inc",
    quote:
      "I've worked with Joe for the past couple of years on Puck for iOS. His passion for balancing form and function is a major reason I chose to work with him, and the simplicity of an otherwise complex app shows how truly talented he is as a developer with design principles. 10 out of 10. I highly recommend working with Joe if given the opportunity.",
  },
  {
    id: "dax-hafer",
    featured: false,
    name: "Dax Hafer",
    role: "Design Engineer at TriMedx",
    quote:
      "I've worked with Joe on a couple of app development projects for our company, and he will continue to be my go-to for all future iOS development needs as well. On the first project, I had a fully vetted idea for the app, complete set of functional requirements, and a mockup to demonstrate the desired look and feel of the app. However, after discussing our needs with Joe and going over a multitude of options and capabilities, we were able to redefine our functional requirements, allowed him to handle most of the app design and flow, and ultimately walked away with an app that was far beyond what I had originally hoped for. When another opportunity for app development arose within our company, this time a much larger initiative, I engaged Joe in the early stages of defining the needs and functional requirements for the project. He assisted in design, project planning, and helping to define a reasonable budget and timeline for the project. Again, Joe was able to deliver an excellent finished project and did so on time and within budget. Joe has an excellent ability to design apps that are both functional and intuitive, as well as visually appealing. My advice for anyone needing iOS development would be to engage Joe in the early stages of the app ideation process, well before development is needed. Leaning on his broad knowledge around iOS app capabilities, flow, and eye for design may greatly speed up the design and planning process and ultimately lead to a much more functional and polished product. I would recommend Joe for all of your iOS app development needs.",
  },
  {
    id: "rob-cadick",
    featured: false,
    name: "Rob Cadick",
    role: "Lead Design Engineer at TriMedx",
    quote:
      "Working with Joe on a couple of iOS app developments was fun and educational. Joe is soft spoken, but speaks to the point. For our first project, we had everything documented in functional requirements. Joe reviewed the functional requirements and then went through them with our team. I was amazed at how well Joe understood our needs and what we were wanting to do. We worked through a lot of our requirements and Joe would let us know if our requirements were a good Idea and doable or he would make reconditions on how we could enhance our requirements. He was always positive and forward thinking. I would highly recommend Joe for any iOS development projects. Joe is easy to communicate with, works to understand his customers' needs and always communicates the progress of the project.",
  },
  {
    id: "brian-van-pelt",
    featured: false,
    name: "Brian Van Pelt",
    role: "Software Engineer at E-gineering",
    quote:
      "Joe is one of the most thoughtful and professional developers I've ever worked with. Over the last few years we've collaborated on several mobile apps, both public-facing, and corporate internal. During that time, I was particularly impressed with Joe's ability to get to the heart of customers' needs, propose innovative solutions, and then implement them cleanly and efficiently. I would definitely recommend Joe Rossano.",
  },
];

export const training = [
  {
    group: "AWS Certification",
    items: [
      "AWS Certified AI Practitioner — September 2026",
      "AWS Certified Cloud Practitioner — December 2023",
    ],
  },
  {
    group: "iOS Training",
    items: [
      "The iOS Architect (Matteo Manferdini) — September 2021",
      "SwiftUI Design and Development (Design+Code) — December 2020",
      "Functional Programming in Swift (Dim Sum Thinking) — June 2018",
      "Advanced iOS Development (Big Nerd Ranch) — November 2014",
    ],
  },
  {
    group: "Scrum Certification",
    items: [
      "Certified Scrum Product Owner — October 2008",
      "Certified Scrum Practitioner — January 2008",
      "Certified Scrum Master — October 2005",
    ],
  },
  {
    group: "Java Certification",
    items: [
      "Certified Enterprise Architect — January 2003",
      "Certified Web Component Developer — August 2001",
      "Certified Java Developer — June 2001",
      "Certified Java Programmer — March 2000",
    ],
  },
  {
    group: "Rutgers University",
    items: ["MS in Management — May 1994", "BA in Labor Studies — May 1992"],
  },
] as const;

export type AppCase = {
  id: string;
  name: string;
  body: string;
  technologies: string[];
  featured?: boolean;
  note?: string;
};

export const apps: AppCase[] = [
  {
    id: "installment-loan",
    name: "Installment Loan",
    technologies: ["SwiftUI", "MVVM", "async/await", "actors", "VoiceOver", "Dynamic Type", "Dark Mode"],
    body: "Led development and maintenance of the Installment Loan Swift component powering financing in the Chase travel app. The app delivers one-time and automatic recurring payment flows, with redesigned loan-detail screens giving customers clear visibility into balances and payment schedules. It's built on a SwiftUI MVVM architecture using async/await and actor-based concurrency, with ADA-compliant screens supporting dynamic type, dark mode, and VoiceOver.",
  },
  {
    id: "pay-in-4",
    name: "Pay in 4",
    featured: true,
    technologies: ["MVVM-C", "MDS", "VoiceOver", "Dynamic Type", "Dark Mode", "ADA"],
    body: "Led development and maintenance of the Pay in 4 Swift component in the Chase retail mobile app. The app delivers a Pay in 4 payment experience to tens of millions of customers, built on an MVVM-C architecture with pixel-perfect interfaces using MDS design-system components. It features a fully ADA-compliant VoiceOver experience along with dynamic type and dark mode support for vision-impaired customers.",
  },
  {
    id: "compliance-testing",
    name: "Injector Verifier",
    technologies: ["Bluetooth Low Energy", "RZBluetooth", "CoreBluetoothMock"],
    body: "This app was developed for a major pharmaceutical company. It is used by hardware engineers and quality assurance to verify the correct behavior of proprietary Bluetooth-enabled medical devices. It uses Bluetooth Low Energy (BLE) and the RZBluetooth library to enable the automated execution of custom test suites. I used Nordic Semiconductor's CoreBluetoothMock library to emulate Core Bluetooth objects for unit testing.",
  },
  {
    id: "neuronode",
    name: "NeuroNode Controller",
    featured: true,
    technologies: ["Core Bluetooth", "Bluetooth Low Energy", "Charts"],
    body: "This app was developed for an innovative medical technology company. The app facilitates the use of NeuroNode — the world's first wearable EMG assistive communications device — to operate iOS devices using bioelectrical signals. It uses Bluetooth Low Energy (BLE) and Apple's Core Bluetooth framework to help users personalize NeuroNode for use with Apple's assistive technology. Real-time graphing of EMG signals is accomplished using the Charts framework.",
  },
  // {
  //   id: "dashboard",
  //   name: "Dashboard",
  //   technologies: ["VIPER"],
  //   body: "This app was developed for use by internal employees and contractors. It is used to perform time reporting and record business expenses. The app was designed and built using the VIPER architectural pattern. VIPER is an application of Clean Architecture which consists of the following components: View, Interactor, Presenter, Entity, and Routing.",
  // },
  {
    id: "puck",
    name: "Puck",
    featured: true,
    technologies: ["Core Bluetooth", "Bluetooth Low Energy"],
    body: "This app was developed for a Midwest based startup company. It is a universal remote control app used to consolidate remotes, and to overcome the line-of-sight and range limitations of infrared (IR) technology. It uses Bluetooth Low Energy (BLE) and Apple's Core Bluetooth framework to send IR commands to a custom built hardware component.",
  },
  {
    id: "rsq-mobile",
    name: "RSQ Mobile",
    featured: true,
    technologies: ["RestKit"],
    body: "This app was developed for a healthcare technology management company. It is used by service technicians to manage notifications, work orders, and medical device information. It uses the RestKit framework to interact with custom built RESTful web services.",
  },
  {
    id: "woodblockify",
    name: "Woodblockify Yourself",
    technologies: ["GPUImage", "ObjectiveFlickr"],
    body: "This app was developed for a Japanese art exhibition at an art museum. It is used by museum guests, who can create a Japanese woodblock print-inspired selfie. Guests can email their selfie, and choose to share it on the museum's Flickr Photostream. It uses the GPUImage framework for GPU-based image processing. Flickr integration is accomplished using the ObjectiveFlickr API framework.",
  },
  // {
  //   id: "music-viewer",
  //   name: "Music Viewer",
  //   note: "Mac app",
  //   technologies: ["PDF Kit"],
  //   body: "This Mac app is part of an onstage digital music stand system for performing ensembles, which eliminates the need for paper copies. Musicians use a foot pedal to traverse a setlist and advance through each song. It uses Apple's PDF Kit framework to display sheet music and song lyrics.",
  // },
  {
    id: "tech-xpert",
    name: "Tech-Xpert",
    technologies: ["Message UI", "URL Schemes"],
    body: "This app was developed for a healthcare technology management company. It is used by service technicians to locate and access specific technical expertise within the organization. It uses Apple's Message UI framework and URL Schemes to enable communication by email, text, phone, and FaceTime.",
  },
  {
    id: "pointillize",
    name: "Pointillize Yourself",
    technologies: ["Core Image", "Core Graphics", "Facebook iOS SDK"],
    body: "This app was developed for a neo-impressionist exhibition at an art museum. It is used by museum guests, who can create a pointillism style self-portrait and post it to their Facebook accounts. It uses Apple's Core Image framework and a custom photo filter built using Core Graphics. Facebook integration is accomplished using the Facebook iOS SDK and a custom Open Graph Story.",
  },
  {
    id: "filter-monitor",
    name: "Filter Monitor",
    technologies: ["Core Bluetooth", "Bluetooth Low Energy"],
    body: "This app was developed for a major power equipment manufacturing company. It is used by commercial drivers to monitor the condition of various filters on their diesel engines. It uses Bluetooth Low Energy (BLE) and Apple's Core Bluetooth framework to retrieve real-time data from custom filter sensors.",
  },
  {
    id: "irate",
    name: "iRate for iMessage",
    technologies: ["Messages", "StoreKit"],
    body: "The iRate for iMessage app lets users express their ratings using fun stickers of popular emoji. The app uses Apple's Messages framework to extend the Message app, and Apple's StoreKit framework to enable in-app purchases. Emoji art supplied by EmojiOne.",
  },
  {
    id: "flappy-creeper",
    name: "Flappy Creeper",
    technologies: ["SpriteKit"],
    body: "The Flappy Creeper app is my contribution to the Flappy Bird meme. I built this app for my sons, who are fans of the game Minecraft. It was built using Apple's Sprite Kit, a framework for creating 2D games.",
  },
  // {
  //   id: "agile-roadmap",
  //   name: "Agile Roadmap",
  //   technologies: ["Core Data"],
  //   body: "The Agile Roadmap app is used by Product Owners to perform strategic product planning. The app uses Apple's Core Data framework to persist and manage product information.",
  // },
  // {
  //   id: "cook-portfolio",
  //   name: "Portfolio",
  //   note: "Resume. Not on the Weebly Apps page, so there is no gallery.",
  //   technologies: ["Media Player", "Brightcove", "Core Data", "Message UI"],
  //   body: "Developed for Cook Medical Group while Joe was an iOS Developer at E-gineering (Aug 2012 – Jan 2013). A native iOS app enabling the sales team to share product documentation and videos with customers.",
  // },
  // {
  //   id: "iris",
  //   name: "IRIS",
  //   note: "Resume. Not on the Weebly Apps page, so there is no gallery.",
  //   technologies: ["Address Book", "Event Kit", "MapKit", "Core Data", "Core Location"],
  //   body: "Developed for Cook Medical Group while Joe was an iOS Developer at E-gineering (Jan 2012 – Aug 2012). A native iOS app enabling the sales team to record and track customer interactions.",
  // },
];

export type BlogPost = {
  id: string;
  title: string;
  date: string;
  iso: string;
  summary: string;
};

export const posts: BlogPost[] = [
  {
    id: "swift-asynchronous-functions",
    title: "Swift Asynchronous Functions",
    date: "October 26, 2022",
    iso: "2022-10-26",
    summary: "In this blog post I show you how to update your app's asynchronous APIs to use async/await.",
  },
  {
    id: "swift-essentials-generics",
    title: "Swift Essentials: Generics",
    date: "February 10, 2020",
    iso: "2020-02-10",
    summary: "The fifth and final post in my Swift Essentials blog series explores Swift generics.",
  },
  {
    id: "swift-essentials-protocols",
    title: "Swift Essentials: Protocols",
    date: "July 31, 2019",
    iso: "2019-07-31",
    summary: "The fourth post in my Swift Essentials blog series discusses Swift protocols.",
  },
  {
    id: "swift-essentials-extensions",
    title: "Swift Essentials: Extensions",
    date: "April 23, 2018",
    iso: "2018-04-23",
    summary: "The third post in my Swift Essentials blog series deals with Swift extensions.",
  },
  {
    id: "swift-essentials-closures",
    title: "Swift Essentials: Closures",
    date: "November 13, 2017",
    iso: "2017-11-13",
    summary: "The second post in my Swift Essentials blog series covers Swift closures.",
  },
  {
    id: "swift-essentials-optionals",
    title: "Swift Essentials: Optionals",
    date: "March 14, 2017",
    iso: "2017-03-14",
    summary: "The first post in my Swift Essentials blog series introduces Swift optionals.",
  },
];

export const aiPrinciples = [
  {
    kicker: "Toolkit",
    title: "GitHub Copilot, Claude Code, Windsurf AI, LLM Suite",
    body: "These are the tools named in Joe's AI-Assisted Engineering competency.",
  },
  {
    kicker: "Adoption",
    title: "Responsible and secure AI adoption",
    body: "The published competency pairs the tools with responsible and secure AI adoption. Day-to-day rules beyond that line are not on the current site.",
  },
  {
    kicker: "Practice",
    title: "Engineering skill development and pattern reuse",
    body: "The same competency names engineering skill development and pattern reuse as part of how the tools are used.",
  },
] as const;
