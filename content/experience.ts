/**
 * Employment from Joe Rossano's resume.
 * Titles, dates, clients, and bullets are copied from that document.
 * The NeuroNode note is the published Control Bionics testimonial, not a second title.
 */

export type Role = {
  id: string;
  employer: string;
  location: string;
  title: string;
  product?: string;
  client?: string;
  dates: string;
  summary: string;
  bullets: string[];
  era: "chase" | "ios" | "earlier";
  note?: string;
};

export const roles: Role[] = [
  {
    id: "installment-loan",
    era: "chase",
    employer: "JPMorganChase",
    location: "Atlanta, GA",
    title: "Lead iOS Engineer",
    product: "Installment Loan",
    dates: "Nov 2024 – Present",
    summary:
      "Led development and maintenance of the Installment Loan Swift component powering financing in the Chase travel app.",
    bullets: [
      "Led development and maintenance of the Installment Loan Swift component powering financing in the Chase travel app.",
      "Designed and delivered the one-time payment flow end to end, integrating payment options, validation, and add-payment experience-service APIs.",
      "Launched automatic (recurring) payments and redesigned loan-detail screens, giving customers clearer visibility into balances and payment schedules.",
      "Championed a SwiftUI MVVM architecture with async/await and actor-based concurrency, authoring the code design patterns and view conventions later adopted team-wide.",
      "Adopted Swift Package Manager across both the Installment Loan and Pay in 4 codebases to modularize features and manage third-party dependencies, improving build times and enabling independent team ownership of components.",
      "Raised unit-test coverage above 70% for new code using XCTest and the Swift Testing framework.",
      "Introduced API contract testing with WireMock and Sage UI tests, validating success, edge-case, and error responses across the Eligible Accounts, Loan Detail, and Payment APIs.",
      "Partnered with product, design, QA, and accessibility teams to ship ADA-compliant screens featuring dynamic type, dark mode, and VoiceOver support.",
    ],
  },
  {
    id: "pay-in-4",
    era: "chase",
    employer: "JPMorganChase",
    location: "Atlanta, GA",
    title: "Lead iOS Engineer",
    product: "Pay in 4",
    dates: "Jan 2023 – Present",
    summary:
      "Led development and maintenance of the Pay in 4 Swift component in the Chase retail mobile app.",
    bullets: [
      "Led development and maintenance of the Pay in 4 Swift component in the Chase retail mobile app.",
      "Delivered the Pay in 4 experience to tens of millions of customers as a core engineer on a distributed team, achieving a 94 NPS on an MVVM-C architecture.",
      "Built pixel-perfect interfaces with MDS design-system components and instrumented analytics across all screen and action events.",
      "Engineered a fully ADA-compliant VoiceOver experience for vision-impaired customers.",
      "Drove the codebase migration to Swift 6, enabling strict concurrency, adopting actor isolation, and eliminating hundreds of compiler warnings.",
      "Implemented API error handling and knock-out content flows (ineligible, past-due, and bankruptcy/collections) across loan setup and management user flows.",
      "Refactored deep-link routing and added dynamic type and dark mode support while migrating to the updated MDS component library.",
      "Strengthened framework stability and release quality through XCTest unit tests and automated Sage UI test suites.",
      "Used Split (now Harness) for feature flagging and A/B testing, enabling controlled rollouts and experimentation across the Pay in 4 experience.",
    ],
  },
  {
    id: "lilly-frameworks",
    era: "ios",
    employer: "E-gineering",
    location: "Indianapolis, IN",
    title: "Senior iOS Developer",
    product: "iOS Frameworks",
    client: "Eli Lilly",
    dates: "Mar 2019 – Dec 2022",
    summary:
      "Owned development and maintenance of core iOS frameworks that expose service APIs to internal and external client apps.",
    bullets: [
      "Owned development and maintenance of core iOS frameworks that expose service APIs to internal and external client apps.",
      "Built and shipped a reusable library enabling host apps to communicate with Eli Lilly blood glucose monitors and insulin injectors over Bluetooth Low Energy (BLE).",
      "Extended the device framework to support the next generation of insulin-injector hardware.",
      "Enhanced and tested a reusable networking library for HTTP communication with Eli Lilly cloud-based web services.",
      "Implemented app-level encryption and decryption with the CryptoSwift library to protect sensitive health data.",
      "Migrated user identity and access management from Janrain to Okta using the Okta SDKs and web-service APIs.",
      "Achieved 92% unit-test coverage by emulating Core Bluetooth peripherals with Nordic Semiconductor's CoreBluetoothMock library.",
      "Collaborated with firmware engineers to design communication protocols, developing concurrently against iOS simulators, CanaKit Raspberry Pi, and Dialog Semiconductor SoC hardware.",
    ],
  },
  {
    id: "lilly-testing",
    era: "ios",
    employer: "E-gineering",
    location: "Indianapolis, IN",
    title: "Senior iOS Developer",
    product: "Injector Verifier",
    client: "Eli Lilly",
    dates: "Sep 2017 – Mar 2019",
    summary:
      "Designed and built a testing app that verifies insulin-injector compliance with Bluetooth Low Energy injector-profile requirements.",
    bullets: [
      "Designed and built a testing app that verifies insulin-injector compliance with Bluetooth Low Energy (BLE) injector-profile requirements.",
      "Developed a companion iOS app that simulates an insulin injector for end-to-end testing.",
      "Implemented a suite of asynchronous injector test cases with a functional design using the RZBluetooth framework.",
      "Persisted test results and logs with Core Data to support auditing and regulatory compliance.",
      "Automated custom text and JSON report generation and delivery via the Message UI framework.",
      "Wrote unit and service-integration tests with XCTest.",
      "Produced interaction and visual designs using Balsamiq Mockups, Sketch, and Marvel.",
    ],
  },
  {
    id: "neuronode-role",
    era: "ios",
    employer: "E-gineering",
    location: "Indianapolis, IN",
    title: "Senior iOS Developer",
    product: "NeuroNode",
    client: "Control Bionics, Inc",
    dates: "Mar 2017 – Aug 2017",
    summary:
      "Developed an app enabling NeuroNode, the world's first wearable EMG assistive communication device, to control iOS devices via bioelectrical signals.",
    note: "James Schorey, CTO of Control Bionics, writes that Joe was the Principal Software Engineer on the company's first iOS application, the NeuroNode.",
    bullets: [
      "Developed an app enabling NeuroNode — the world's first wearable EMG assistive communication device — to control iOS devices via bioelectrical signals.",
      "Integrated Core Bluetooth and BLE so users could personalize NeuroNode for use with Apple's assistive technologies.",
      "Designed a closure-based API to encapsulate and reuse Bluetooth interactions.",
      "Visualized real-time EMG signals with an interactive graph using the Charts framework.",
      "Implemented audio and visual signal indicators using Core Audio and UIKit animations.",
      "Created and edited design assets in Adobe Photoshop.",
    ],
  },
  {
    id: "puck-role",
    era: "ios",
    employer: "E-gineering",
    location: "Indianapolis, IN",
    title: "Senior iOS Developer",
    product: "Puck",
    client: "SmashToast, Inc",
    dates: "May 2016 – Dec 2016",
    summary:
      "Developed a universal remote-control app that consolidates remotes and overcomes the line-of-sight and range limits of infrared.",
    bullets: [
      "Developed a universal remote-control app that consolidates remotes and overcomes the line-of-sight and range limits of infrared (IR).",
      "Transmitted IR commands over Bluetooth Low Energy (BLE) to custom-built hardware using Core Bluetooth.",
      "Designed a closure-based API to encapsulate and reuse hardware communication.",
      "Consumed RESTful JSON web services with Foundation Networking, securing requests with JSON Web Tokens.",
      "Managed and persisted remote-control configurations with Core Data.",
      "Embedded web content in the native app using WebKit.",
    ],
  },
  {
    id: "rsq-role",
    era: "ios",
    employer: "E-gineering",
    location: "Indianapolis, IN",
    title: "Senior iOS Developer",
    product: "RSQ Mobile",
    client: "Medxcel",
    dates: "Jul 2015 – Apr 2016",
    summary:
      "Developed a native iOS app enabling service technicians to manage notifications, work orders, and medical-device information.",
    bullets: [
      "Developed a native iOS app enabling service technicians to manage notifications, work orders, and medical-device information.",
      "Built custom table views and cells to deliver specialized appearance and behavior.",
      "Integrated RESTful JSON web services with the RestKit framework.",
      "Authenticated users against Active Directory via Foundation Networking.",
      "Enabled in-app email and text messaging with Message UI, and click-to-call and FaceTime through Apple URL schemes.",
      "Added camera-based barcode scanning using AV Foundation.",
    ],
  },
  {
    id: "woodblockify-role",
    era: "ios",
    employer: "E-gineering",
    location: "Indianapolis, IN",
    title: "Senior iOS Developer",
    product: "Woodblockify Yourself",
    client: "Asian Art Museum",
    dates: "Mar 2015 – Jul 2015",
    summary:
      "Developed a native iOS app that transforms selfies into Japanese woodblock-print–inspired portraits.",
    bullets: [
      "Developed a native iOS app that transforms selfies into Japanese woodblock-print–inspired portraits.",
      "Delivered a live camera feed and still-image capture with AV Foundation.",
      "Created a custom woodblock-print image effect using the GPUImage framework.",
      "Enabled guests to email their creations via MailCore and share to a Flickr Photostream via ObjectiveFlickr.",
      "Captured newsletter sign-ups to a remote database with the Parse iOS SDK.",
      "Integrated the Fabric SDK for analytics, crash reporting, and beta distribution.",
    ],
  },
  {
    id: "connick-role",
    era: "ios",
    employer: "E-gineering",
    location: "Indianapolis, IN",
    title: "Cocoa Developer",
    product: "Connick Music Viewer",
    client: "Harry Connick Jr.",
    dates: "Nov 2014 – Feb 2015",
    summary: "Developed a native macOS app powering an onstage digital music-stand system for live ensembles.",
    bullets: [
      "Developed a native macOS app powering an onstage digital music-stand system for live ensembles.",
      "Architected the system so each stand runs on a rack-mounted Mac mini configurable for any instrument or chair in the orchestra.",
      "Implemented foot-pedal–mapped keyboard handling to give musicians hands-free control during performances.",
      "Built a drag-and-drop setlist editor and custom table views for navigating dynamically generated setlist columns.",
      "Rendered sheet music and lyrics using Apple's PDFKit.",
    ],
  },
  {
    id: "tech-xpert-role",
    era: "ios",
    employer: "E-gineering",
    location: "Indianapolis, IN",
    title: "iOS Developer",
    product: "Tech-Xpert",
    client: "Medxcel",
    dates: "Jan 2014 – Dec 2014",
    summary: "Developed a native iOS app helping technicians locate and access specialized technical expertise.",
    bullets: [
      "Developed a native iOS app helping technicians locate and access specialized technical expertise.",
      "Designed a block-based service API to encapsulate and reuse web services.",
      "Authenticated users against Active Directory via Foundation Networking and integrated RESTful JSON services with RestKit.",
      "Enabled in-app email and text via Message UI, and click-to-call and FaceTime through Apple URL schemes.",
      "Added camera-based barcode scanning with the ZBar SDK.",
    ],
  },
  {
    id: "pointillize-role",
    era: "ios",
    employer: "E-gineering",
    location: "Indianapolis, IN",
    title: "iOS Developer",
    product: "Pointillize Yourself",
    client: "Indiana Museum of Art",
    dates: "Oct 2013 – Feb 2014",
    summary: "Developed a native iOS app letting museum guests create pointillism-style self-portraits.",
    bullets: [
      "Developed a native iOS app letting museum guests create pointillism-style self-portraits.",
      "Delivered a live camera feed and still-image capture with AV Foundation.",
      "Wrote a custom pointillism image filter with Core Graphics and fine-tuned tint, temperature, and saturation with Core Image.",
      "Enabled users to sign their portraits using UIKit gesture recognizers.",
      "Posted images to a custom web service with AFNetworking and enabled email sharing via MailCore.",
      "Integrated the Facebook SDK and Open Graph API for social sharing, and the Google Analytics SDK for screen and event tracking.",
    ],
  },
  {
    id: "filter-monitor-role",
    era: "ios",
    employer: "E-gineering",
    location: "Indianapolis, IN",
    title: "iOS Developer",
    product: "Filter Monitor",
    client: "Cummins Filtration",
    dates: "Feb 2013 – Sep 2013",
    summary: "Developed a native iOS app enabling commercial drivers to monitor the condition of diesel-engine filters.",
    bullets: [
      "Developed a native iOS app enabling commercial drivers to monitor the condition of diesel-engine filters.",
      "Designed a custom protocol for securely sharing data over Bluetooth Low Energy (BLE).",
      "Discovered and communicated with custom filter sensors using Core Bluetooth, and built a mock peripheral to support testing.",
      "Managed and persisted filter condition and service history with MagicalRecord and Core Data.",
      "Animated pressure-gauge needles and remaining-hours and -miles gauges using UIKit and Core Animation.",
      "Built custom passcode, progress, alert, and action-sheet components.",
    ],
  },
  {
    id: "cook-portfolio-role",
    era: "ios",
    employer: "E-gineering",
    location: "Indianapolis, IN",
    title: "iOS Developer",
    product: "Portfolio",
    client: "Cook Medical Group",
    dates: "Aug 2012 – Jan 2013",
    summary:
      "Developed a native iOS app enabling the sales team to share product documentation and videos with customers.",
    bullets: [
      "Developed a native iOS app enabling the sales team to share product documentation and videos with customers.",
      "Customized a video player with the Media Player framework and Brightcove iOS Kit, streaming content via the Brightcove Media API.",
      "Created custom email templates with the Message UI framework.",
      "Modeled and persisted content with Core Data.",
      "Downloaded product documentation (PDFs) on background threads using Foundation Networking, GCD, and blocks.",
    ],
  },
  {
    id: "iris-role",
    era: "ios",
    employer: "E-gineering",
    location: "Indianapolis, IN",
    title: "iOS Developer",
    product: "IRIS",
    client: "Cook Medical Group",
    dates: "Jan 2012 – Aug 2012",
    summary: "Developed a native iOS app enabling the sales team to record and track customer interactions.",
    bullets: [
      "Developed a native iOS app enabling the sales team to record and track customer interactions.",
      "Integrated device contacts and calendars via the Address Book and Event Kit frameworks.",
      "Geocoded and reverse-geocoded locations and mapped them using Core Location and MapKit.",
      "Modeled and persisted data with Core Data and wrote custom parsers to unmarshal XML into an Objective-C object model.",
      "Enabled distributed testing, logging, coverage monitoring, and crash reporting with the TestFlight SDK.",
    ],
  },
  {
    id: "teva-2011",
    era: "earlier",
    employer: "E-gineering",
    location: "Indianapolis, IN",
    title: "Senior Java Developer",
    product: "Pharmaceutical",
    client: "Teva Pharmaceuticals",
    dates: "Oct 2011 – Dec 2011",
    summary: "Upgraded the inventory-management system to the JAXB XML data-binding framework.",
    bullets: [
      "Upgraded the inventory-management system to the JAXB XML data-binding framework.",
      "Built a unit-test suite validating correct XML marshaling and unmarshaling.",
      "Integrated the DynamicReports and JasperReports frameworks to generate custom reports in Java.",
      "Created reusable report templates with MS Excel and PDF export.",
      "Delivered multiple custom business reports, including complex crosstab reports.",
      "Technologies: DynamicReports, Apache Wicket, JavaScript, JAXB, XSLT, Java EE, Spring IoC, Hibernate.",
    ],
  },
  {
    id: "cook-web-2011",
    era: "earlier",
    employer: "E-gineering",
    location: "Indianapolis, IN",
    title: "Senior Java Developer",
    product: "Medical",
    client: "Cook Medical Group",
    dates: "Feb 2011 – Oct 2011",
    summary: "Designed and developed all layers of a multi-tier web application for planning and managing marketing projects.",
    bullets: [
      "Designed and developed all layers of a multi-tier web application for planning and managing marketing projects.",
      "Built a responsive web UI with AJAX, RichFaces, and JSF components.",
      "Implemented custom annotations for context-aware field validation.",
      "Created custom SMTP email templates for user notifications.",
      "Integrated authentication with the existing Active Directory infrastructure.",
      "Technologies: JBoss Seam2, RichFaces, JavaServer Faces (JSF), Java EE, Hibernate.",
    ],
  },
  {
    id: "dwd-2010",
    era: "earlier",
    employer: "E-gineering",
    location: "Indianapolis, IN",
    title: "Scrum Master",
    product: "Government",
    client: "Indiana DWD",
    dates: "Mar 2010 – Feb 2011",
    summary:
      "Led a team of up to fifteen developers delivering modules of Indiana's unemployment-insurance system.",
    bullets: [
      "Led a team of up to fifteen developers delivering modules of Indiana's unemployment-insurance system for the Department of Workforce Development.",
      "Established project plans, timelines, and tracking processes to forecast, execute, and communicate progress.",
      "Introduced a functional test-driven process to define scope and align development and testing efforts.",
      "Partnered with Business Analysts and subject-matter experts to refine and document requirements and change requests.",
      "Coordinated with developers to capture, schedule, and track development tasks.",
      "Technologies: JSP, Spring MVC, Java EE, Spring IoC, Hibernate.",
    ],
  },
  {
    id: "teva-2009",
    era: "earlier",
    employer: "E-gineering",
    location: "Indianapolis, IN",
    title: "Senior Java Developer",
    product: "Pharmaceutical",
    client: "Teva Pharmaceuticals",
    dates: "Oct 2009 – Mar 2010",
    summary:
      "Integrated products and processes from a newly acquired pharmaceutical company into existing inventory-management systems.",
    bullets: [
      "Integrated products and processes from a newly acquired pharmaceutical company into existing inventory-management systems.",
      "Implemented code and unit/integration tests spanning all layers of the application architecture.",
      "Led gap-analysis sessions to identify, estimate, and prioritize system enhancements.",
      "Captured and documented functional requirements and acceptance-test cases.",
      "Technologies: Apache Wicket, JavaScript, XSLT, Java EE, Hibernate.",
    ],
  },
  {
    id: "ncaa-2008",
    era: "earlier",
    employer: "E-gineering",
    location: "Indianapolis, IN",
    title: "Scrum Master",
    product: "Athletics",
    client: "NCAA Eligibility Center",
    dates: "Jul 2008 – Jul 2009",
    summary: "Led a team of seven developers to deliver a web-based student-registration system for the NCAA.",
    bullets: [
      "Led a team of seven developers to deliver a web-based student-registration system for the NCAA.",
      "Coached the team on Agile principles and the Scrum process.",
      "Facilitated requirement workshops, iteration planning, daily standups, reviews, and retrospectives.",
      "Captured and documented functional requirements and acceptance-test cases.",
      "Partnered with UI designers from Creative Street Media Group to optimize the user experience.",
      "Technologies: Adobe Flex, PureMVC, Java EE, Spring IoC, Hibernate.",
    ],
  },
  {
    id: "lilly-web-2008",
    era: "earlier",
    employer: "E-gineering",
    location: "Indianapolis, IN",
    title: "Scrum Master",
    product: "Pharmaceutical",
    client: "Eli Lilly",
    dates: "Feb 2008 – Jul 2008",
    summary: "Led a team of six developers to deliver a web-based health-education scheduling system for Eli Lilly.",
    bullets: [
      "Led a team of six developers to deliver a web-based health-education scheduling system for Eli Lilly.",
      "Partnered with UI designers from Outside Source Design to optimize the user experience.",
      "Technologies: JavaServer Faces, Java EE, Spring IoC, Hibernate.",
    ],
  },
  {
    id: "dwd-2007",
    era: "earlier",
    employer: "E-gineering",
    location: "Indianapolis, IN",
    title: "Scrum Master, Senior Java Developer",
    product: "Government",
    client: "Indiana DWD",
    dates: "Jan 2007 – Feb 2008",
    summary:
      "Led up to eleven developers delivering modules of Indiana's unemployment-insurance system.",
    bullets: [
      "Led up to eleven developers delivering modules of Indiana's unemployment-insurance system for the Department of Workforce Development.",
      "Established code and build-management guidelines for ClearCase UCM projects.",
      "Executed complex application builds and deployments across shared execution environments.",
      "Implemented code for the Tax application spanning all layers of the architecture.",
      "Technologies: JSP, Spring MVC, Java EE, Spring IoC, Hibernate.",
    ],
  },
  {
    id: "humanities-2005",
    era: "earlier",
    employer: "E-gineering",
    location: "Indianapolis, IN",
    title: "Scrum Master, Senior Java Developer",
    product: "Education",
    client: "Indiana Humanities Council",
    dates: "Oct 2005 – Dec 2006",
    summary: "Led a team of six developers to deliver a suite of web-based teaching tools for the Indiana Humanities Council.",
    bullets: [
      "Led a team of six developers to deliver a suite of web-based teaching tools for the Indiana Humanities Council.",
      "Built JSR 168–compliant portlets on uPortal (JA-SIG).",
      "Developed discussion-forum and knowledge-base portlets using Jive Software products.",
      "Technologies: JSP, Spring Portlet MVC, Java EE, Spring IoC, Hibernate.",
    ],
  },
];

export type Chapter = {
  id: string;
  title: string;
  employer: string;
  location: string;
  dates: string;
  intro: string;
  era: Role["era"];
};

export const chapters: Chapter[] = [
  {
    id: "jpmorganchase",
    era: "chase",
    title: "Lead iOS Engineer",
    employer: "JPMorganChase",
    location: "Atlanta, GA",
    dates: "January 2023 – Present",
    intro: "Installment Loan and Pay in 4 are both current. Installment Loan started in November 2024.",
  },
  {
    id: "egineering-ios",
    era: "ios",
    title: "Senior iOS Engineer & Scrum Master",
    employer: "E-gineering",
    location: "Indianapolis, IN",
    dates: "January 2012 – December 2022",
    intro:
      "Client engagements at E-gineering, including NeuroNode for Control Bionics (Mar 2017 – Aug 2017).",
  },
  {
    id: "egineering-earlier",
    era: "earlier",
    title: "Senior Java Engineer & Scrum Master",
    employer: "E-gineering",
    location: "Indianapolis, IN",
    dates: "October 2005 – December 2011",
    intro: "Earlier roles at the same firm, before the iOS work that starts in January 2012.",
  },
];

export function rolesIn(era: Role["era"]): Role[] {
  return roles.filter((role) => role.era === era);
}

export function roleHeading(role: Role): string {
  return [role.title, role.product, role.client].filter(Boolean).join(" · ");
}

export function roleLine(role: Role): string {
  return `${roleHeading(role)} · ${role.dates}`;
}
