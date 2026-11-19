/**
 * Resume facts matched to published case studies.
 * Dashboard, iRate, Flappy Creeper, and Agile Roadmap are on the Weebly Apps page only.
 */

export type Engagement = {
  role: string;
  client?: string;
  dates: string;
  bullets: string[];
};

export const engagements: Record<string, Engagement> = {
  "installment-loan": {
    role: "Lead iOS Engineer, JPMorganChase",
    dates: "Nov 2024 – Present",
    bullets: [
      "Designed and delivered the one-time payment flow end to end, integrating payment options, validation, and add-payment experience-service APIs.",
      "Launched automatic (recurring) payments and redesigned loan-detail screens, giving customers clearer visibility into balances and payment schedules.",
      "Championed a SwiftUI MVVM architecture with async/await and actor-based concurrency, authoring the code design patterns and view conventions later adopted team-wide.",
      "Adopted Swift Package Manager across both the Installment Loan and Pay in 4 codebases to modularize features and manage third-party dependencies, improving build times and enabling independent team ownership of components.",
      "Raised unit-test coverage above 70% for new code using XCTest and the Swift Testing framework.",
      "Introduced API contract testing with WireMock and Sage UI tests, validating success, edge-case, and error responses across the Eligible Accounts, Loan Detail, and Payment APIs.",
      "Partnered with product, design, QA, and accessibility teams to ship ADA-compliant screens featuring dynamic type, dark mode, and VoiceOver support.",
    ],
  },
  "pay-in-4": {
    role: "Lead iOS Engineer, JPMorganChase",
    dates: "Jan 2023 – Present",
    bullets: [
      "Delivered the Pay in 4 experience to tens of millions of customers as a core engineer on a distributed team, achieving a 94 NPS on an MVVM-C architecture.",
      "Built pixel-perfect interfaces with MDS design-system components and instrumented analytics across all screen and action events.",
      "Drove the codebase migration to Swift 6, enabling strict concurrency, adopting actor isolation, and eliminating hundreds of compiler warnings.",
      "Implemented API error handling and knock-out content flows (ineligible, past-due, and bankruptcy/collections) across loan setup and management user flows.",
      "Refactored deep-link routing and added dynamic type and dark mode support while migrating to the updated MDS component library.",
      "Strengthened framework stability and release quality through XCTest unit tests and automated Sage UI test suites.",
      "Used Split (now Harness) for feature flagging and A/B testing, enabling controlled rollouts and experimentation across the Pay in 4 experience.",
    ],
  },
  "compliance-testing": {
    role: "Senior iOS Developer, E-gineering",
    client: "Eli Lilly",
    dates: "Sep 2017 – Mar 2019",
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
  neuronode: {
    role: "Senior iOS Developer, E-gineering",
    client: "Control Bionics, Inc",
    dates: "Mar 2017 – Aug 2017",
    bullets: [
      "Integrated Core Bluetooth and BLE so users could personalize NeuroNode for use with Apple's assistive technologies.",
      "Designed a closure-based API to encapsulate and reuse Bluetooth interactions.",
      "Visualized real-time EMG signals with an interactive graph using the Charts framework.",
      "Implemented audio and visual signal indicators using Core Audio and UIKit animations.",
      "Created and edited design assets in Adobe Photoshop.",
    ],
  },
  puck: {
    role: "Senior iOS Developer, E-gineering",
    client: "SmashToast, Inc",
    dates: "May 2016 – Dec 2016",
    bullets: [
      "Transmitted IR commands over Bluetooth Low Energy (BLE) to custom-built hardware using Core Bluetooth.",
      "Designed a closure-based API to encapsulate and reuse hardware communication.",
      "Consumed RESTful JSON web services with Foundation Networking, securing requests with JSON Web Tokens.",
      "Managed and persisted remote-control configurations with Core Data.",
      "Embedded web content in the native app using WebKit.",
    ],
  },
  "rsq-mobile": {
    role: "Senior iOS Developer, E-gineering",
    client: "Medxcel",
    dates: "Jul 2015 – Apr 2016",
    bullets: [
      "Built custom table views and cells to deliver specialized appearance and behavior.",
      "Integrated RESTful JSON web services with the RestKit framework.",
      "Authenticated users against Active Directory via Foundation Networking.",
      "Enabled in-app email and text messaging with Message UI, and click-to-call and FaceTime through Apple URL schemes.",
      "Added camera-based barcode scanning using AV Foundation.",
    ],
  },
  woodblockify: {
    role: "Senior iOS Developer, E-gineering",
    client: "Asian Art Museum",
    dates: "Mar 2015 – Jul 2015",
    bullets: [
      "Delivered a live camera feed and still-image capture with AV Foundation.",
      "Created a custom woodblock-print image effect using the GPUImage framework.",
      "Enabled guests to email their creations via MailCore and share to a Flickr Photostream via ObjectiveFlickr.",
      "Captured newsletter sign-ups to a remote database with the Parse iOS SDK.",
      "Integrated the Fabric SDK for analytics, crash reporting, and beta distribution.",
    ],
  },
  "music-viewer": {
    role: "Cocoa Developer, E-gineering",
    client: "Harry Connick Jr.",
    dates: "Nov 2014 – Feb 2015",
    bullets: [
      "Architected the system so each stand runs on a rack-mounted Mac mini configurable for any instrument or chair in the orchestra.",
      "Implemented foot-pedal–mapped keyboard handling to give musicians hands-free control during performances.",
      "Built a drag-and-drop setlist editor and custom table views for navigating dynamically generated setlist columns.",
      "Rendered sheet music and lyrics using Apple's PDFKit.",
    ],
  },
  "tech-xpert": {
    role: "iOS Developer, E-gineering",
    client: "Medxcel",
    dates: "Jan 2014 – Dec 2014",
    bullets: [
      "Designed a block-based service API to encapsulate and reuse web services.",
      "Authenticated users against Active Directory via Foundation Networking and integrated RESTful JSON services with RestKit.",
      "Enabled in-app email and text via Message UI, and click-to-call and FaceTime through Apple URL schemes.",
      "Added camera-based barcode scanning with the ZBar SDK.",
    ],
  },
  pointillize: {
    role: "iOS Developer, E-gineering",
    client: "Indiana Museum of Art",
    dates: "Oct 2013 – Feb 2014",
    bullets: [
      "Delivered a live camera feed and still-image capture with AV Foundation.",
      "Wrote a custom pointillism image filter with Core Graphics and fine-tuned tint, temperature, and saturation with Core Image.",
      "Enabled users to sign their portraits using UIKit gesture recognizers.",
      "Posted images to a custom web service with AFNetworking and enabled email sharing via MailCore.",
      "Integrated the Facebook SDK and Open Graph API for social sharing, and the Google Analytics SDK for screen and event tracking.",
    ],
  },
  "filter-monitor": {
    role: "iOS Developer, E-gineering",
    client: "Cummins Filtration",
    dates: "Feb 2013 – Sep 2013",
    bullets: [
      "Designed a custom protocol for securely sharing data over Bluetooth Low Energy (BLE).",
      "Discovered and communicated with custom filter sensors using Core Bluetooth, and built a mock peripheral to support testing.",
      "Managed and persisted filter condition and service history with MagicalRecord and Core Data.",
      "Animated pressure-gauge needles and remaining-hours and -miles gauges using UIKit and Core Animation.",
      "Built custom passcode, progress, alert, and action-sheet components.",
    ],
  },
  "cook-portfolio": {
    role: "iOS Developer, E-gineering",
    client: "Cook Medical Group",
    dates: "Aug 2012 – Jan 2013",
    bullets: [
      "Customized a video player with the Media Player framework and Brightcove iOS Kit, streaming content via the Brightcove Media API.",
      "Created custom email templates with the Message UI framework.",
      "Modeled and persisted content with Core Data.",
      "Downloaded product documentation (PDFs) on background threads using Foundation Networking, GCD, and blocks.",
    ],
  },
  iris: {
    role: "iOS Developer, E-gineering",
    client: "Cook Medical Group",
    dates: "Jan 2012 – Aug 2012",
    bullets: [
      "Integrated device contacts and calendars via the Address Book and Event Kit frameworks.",
      "Geocoded and reverse-geocoded locations and mapped them using Core Location and MapKit.",
      "Modeled and persisted data with Core Data and wrote custom parsers to unmarshal XML into an Objective-C object model.",
      "Enabled distributed testing, logging, coverage monitoring, and crash reporting with the TestFlight SDK.",
    ],
  },
};
