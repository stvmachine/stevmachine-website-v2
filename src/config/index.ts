import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Esteban Campos — Senior Software Developer",
  author: "Esteban Campos Valenzuela",
  description: `Senior Software Engineer with 10+ years of experience building and operating large-scale web and mobile platforms across healthcare, energy, government, financial services, and enterprise domains. Master of Informatics Engineering.
    Experienced in developer tooling, monorepos, CI/CD systems, cloud infrastructure, and full-stack application development. I have designed and maintained scalable build pipelines, automated delivery workflows, and cloud-native services using AWS, Docker, Terraform, and modern TypeScript ecosystems.
    My background spans React, React Native, Node.js, GraphQL, Python/Django, Ruby on Rails, and distributed systems, with a strong focus on engineering quality, reliability, and developer productivity. I practice test-driven development by default and have recently embraced AI-native engineering workflows using Claude, OpenCode, OpenSpec, and Model Context Protocols (MCPs), accelerating design and implementation while maintaining high standards for maintainability and operational excellence.
`,
  lang: "en",
  siteLogo: "/profilepic.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    {
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/esteban-campos-valenzuela-338235b0/",
    },
    { text: "Github", href: "https://github.com/stvmachine" },
    { text: "Email", href: "mailto:campos.esteban@gmail.com" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://stevmachine.me",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Esteban Campos",
    specialty: "Senior Software Developer",
    summary:
      "Senior Software Engineer with 10+ years' experience building scalable web and mobile platforms, cloud infrastructure, and AI-native workflows, emphasizing quality, reliability, and developer productivity.",
    email: "campos.esteban@gmail.com",
  },
  experience: [
    {
      company: "Medtasker",
      position: "Senior Frontend Engineer",
      startDate: "Jan 2025",
      endDate: "Present",
      summary: [
        "Architect and maintain web and mobile applications used within the healthcare sector.",
        "Design and evolve development workflows, build pipelines, and release processes to improve engineering velocity and reliability.",
        "Leverage AI-native tooling (Claude, OpenCode, OpenSpec and MCPs) to accelerate full-stack development and integration work.",
        "Drive technical decisions around component architecture, infrastructure, and cross-platform consistency.",
        "Collaborate closely with engineers and product teams to deliver maintainable, production-grade systems.",
        "Tech stack: React, React Native, Angular, TypeScript, Node.js, AWS, CI/CD, Docker, Claude, OpenCode.",
      ],
    },
    {
      company: "Ackama",
      position: "Senior Software Developer",
      startDate: "Jul 2018",
      endDate: "Dec 2025",
      summary: [
        "Developed full-stack solutions for web and hybrid mobile applications, collaborating with product teams to deliver maintainable, scalable systems",
        "Technologies: Node.js, React, React Native, Vue, NextJS, Gatsby, Ruby on Rails, Python (Django), AWS, Docker, Terraform, GraphQL, PostgreSQL, MongoDB",
        "Mentored junior and mid-level developers, fostering team knowledge sharing and best practices",
      ],
    },
    {
      company: "VicSuper",
      position: "Angular 2/Ionic 2 Developer",
      startDate: "Jan 2018",
      endDate: "Jul 2018",
      summary: [
        "Development, deployment and maintenance of VicSuper's first hybrid mobile app for Android and iOS.",
        "Active collaboration with the rest of the team through email and daily meetings.",
        "Ensure continuous integration and automatic deployment to Play Store and iTunes using Bamboo and Fastlane.",
        "Strengthen the security of the app and add support for multiple APK on Android.",
        "Developed tests and e2e tests using Ionic 4, Angular 5, iOS, Android, Firebase, Karma, Fastlane, Git.",
      ],
    },
    {
      company: "IDEA Uno Ltda.",
      position: "Software Engineer",
      startDate: "Jun 2016",
      endDate: "Nov 2017",
      summary: [
        "Led mobile hybrid app and web projects, participating in the entire software development lifecycle.",
        "Mentored colleagues in Angular, Ionic, and Ruby on Rails, and drove a shift in the company tech stack.",
        "Skills: Ruby on Rails, React, React Native, AngularJS, Ionic Framework.",
      ],
    },
    {
      company: "Kunder",
      position: "Software Engineer",
      startDate: "Feb 2016",
      endDate: "Jun 2016",
      summary: [
        "Worked in the area of front-end with the family of hybrid apps: MiBanco, MiCuenta, MiPago, MiPass, etc.",
        "This family of eight apps are based on Ionic, Cordova and Node.",
        "Used Test-Driven development (TDD), linting tools and followed good practices that ensure code of good quality.",
        "Skills: Ionic Framework, AngularJS, Continuous Integration.",
      ],
    },
    {
      company: "Random ERP",
      position: "Junior Software Engineer",
      startDate: "Feb 2015",
      endDate: "Feb 2016",
      summary: [
        "Developed desktop apps based on NodeJS and Angular.",
        "Relevant technologies involved: NodeJS, Express, NW.js, Angular, Microsoft SQL, MongoDB, Git.",
        "Company with more than 27 years providing solutions of business management with a specialization in production, logistics, and distribution.",
      ],
    },
  ],
  projects: [
    {
      name: "MedTasker - Healthcare Communication Platform",
      slug: "medtasker",
      summary:
        "React Native mobile app and React web application that helps hospitals replace pagers and fragmented communication with secure, trackable clinical messaging and task management.",
      longSummary: `MedTasker is a mobile-first communication and task-management platform designed for hospitals and clinical teams. It ensures the right message reaches the right clinician the first time, replacing pagers, phone tag, and informal channels like SMS or WhatsApp.

Key Contributions:
- Built and maintained the React Native iOS and Android applications used by clinicians at the point of care
- Developed the React web companion used by administrative and desktop hospital staff
- Implemented secure clinical photography, on-duty directory, automated escalations, and result notifications
- Worked on integrations with hospital PAS, EMR, pathology, radiology, paging systems, and Active Directory
- Helped deliver end-to-end encryption, audit trails, and 24/7 SLA-ready redundant infrastructure
`,
      challenges: `Healthcare environments demand extremely high reliability, security, and usability. Clinicians are time-poor and often interrupted, so every interaction had to be fast and unambiguous. We also had to satisfy strict patient-privacy and medico-legal requirements while integrating with a wide range of legacy hospital systems.`,
      role: "Senior Full Stack / Mobile Developer",
      linkPreview: "https://medtasker.com/",
      linkAppStore: "https://apps.apple.com/au/app/medtasker/id1626021847",
      linkGooglePlay:
        "https://play.google.com/store/apps/details?id=com.medtasker.medtaskermobile&hl=en_AU",
      image: "/medtasker/medtasker-hero.jpg",
      tech: [
        "React Native",
        "React",
        "TypeScript",
        "Node.js",
        "iOS",
        "Android",
        "Healthcare Integrations",
        "Active Directory",
        "End-to-End Encryption",
        "Audit Logging",
      ],
      screenshots: [
        {
          url: "/medtasker/medtasker-mobile-home.png",
          alt: "MedTasker mobile app home screen",
          caption: "Home screen showing inbox, team tasks, and quick actions",
        },
        {
          url: "/medtasker/medtasker-gallery-1.webp",
          alt: "MedTasker task list",
          caption:
            "All clinical tasks in one place with priority and status cues",
        },
        {
          url: "/medtasker/medtasker-gallery-2.webp",
          alt: "MedTasker task detail",
          caption:
            "Task detail view with recipients, messages, and history tabs",
        },
      ],
      implementationDetails: {
        features: [
          "On-duty directory and smart routing",
          "Secure clinical photography",
          "Automated escalations",
          "Mobile task management",
          "Result notifications",
          "Real-time workload insights and reporting",
        ],
        security: {
          features: [
            "End-to-end encrypted communications",
            "Full audit trail of tasks and escalations",
            "Privacy-compliant clinical photography",
            "Integration with hospital identity systems",
          ],
        },
      },
    },
    {
      name: "Impacta.red - Activity Marketplace",
      slug: "impacta-red",
      summary:
        "Shopify-powered marketplace built with Next.js and React for discovering and booking in-person workshops and experiences across Chile.",
      longSummary: `Impacta.red is a Chilean marketplace that connects people with curated, in-person activities and workshops led by verified experts. From ceramics and analog photography to cooking, music, and wellness, the platform makes it easy to explore, filter, book, and gift experiences.

Key Contributions:
- Built the frontend experience with Next.js, React, and TypeScript
- Integrated Shopify for product catalog, checkout, and gift-card flows
- Implemented dynamic filtering, search, and category browsing
- Delivered a responsive, performance-focused UI for mobile and desktop users
- Collaborated on content strategy and conversion-focused landing pages
`,
      challenges: `The platform had to balance rich discovery (dozens of categories, price ranges, and locations) with fast page loads and a smooth checkout. We also needed a flexible content architecture so the marketing team could launch campaigns and seasonal experiences without developer support.`,
      role: "Frontend Developer",
      linkPreview: "https://impacta.red/homepage",
      image: "/impacta/impacta-hero.png",
      tech: [
        "Next.js",
        "React",
        "TypeScript",
        "Shopify",
        "Tailwind CSS",
        "Headless CMS",
        "Vercel",
      ],
      implementationDetails: {
        commerce: {
          features: [
            "Shopify headless checkout",
            "Gift-card and experience products",
            "Dynamic product filtering",
          ],
        },
        performance: {
          features: [
            "SSR/SSG for fast landing pages",
            "Responsive image handling",
            "Mobile-first UX",
          ],
        },
      },
    },
    {
      name: "Nura - System Backend Upgrade and React Storefront",
      slug: "nura",
      summary:
        "Migration and scaling of Nura's legacy backend platform based on Ruby on Rails. Participated in early discussions, planning, and execution of the migration without impacting current users. Updated the storefront platform built with React, GatsbyJS, Stripe, and GraphQL with international shipping capabilities.",
      longSummary: `Nura is a revolutionary audio technology company that creates personalized headphones and earbuds that adapt to your unique hearing profile. As part of the development team, I was responsible for modernizing their e-commerce platform and backend systems.

Key Contributions:
- Led the migration of their legacy Ruby on Rails backend to a more scalable architecture
- Implemented a new React and Gatsby storefront with international shipping capabilities
- Integrated with Contentful for content management and Stripe for payments
- Optimized the GraphQL API for better performance and reliability
- Set up CI/CD pipelines and infrastructure as code using AWS and Terraform
`,
      challenges: `The main challenge was migrating the legacy system without any downtime or impact on existing customers. This required careful planning, feature flagging, and extensive testing. We also had to handle complex inventory and shipping requirements for international markets.`,
      role: "Senior Full Stack Developer",
      linkPreview: "https://www.nurasound.com/",
      image: "/nura/nura-homepage.png",
      tech: [
        "React 18",
        "TypeScript",
        "Gatsby",
        "Tailwind CSS",
        "Contentful",
        "GraphQL",
        "AWS",
        "Docker",
        "Ruby",
        "Ruby on Rails",
        "PostgreSQL",
        "Stripe",
        "i18next",
      ],
      screenshots: [
        {
          url: "/nura/nura-homepage.png",
          alt: "Nura Homepage",
          caption: "Homepage showcasing featured products and hero banner",
        },
        {
          url: "/nura/nura-product.png",
          alt: "Product Detail Page",
          caption:
            "Product page with customization options and add to cart functionality",
        },
        {
          url: "/nura/nura-checkout.png",
          alt: "Checkout Process",
          caption: "Multi-step checkout with international shipping options",
        },
      ],
      implementationDetails: {
        i18n: {
          regions: ["North America", "Europe", "Asia Pacific", "Australia"],
          languages: ["English", "French", "German", "Japanese", "Chinese"],
          frameworks: ["i18next", "react-i18next"],
        },
        payment: {
          provider: "Stripe",
          features: [
            "Multi-currency support",
            "Subscription billing",
            "Tax calculation",
            "3D Secure authentication",
            "Local payment methods",
          ],
          currencies: ["USD", "EUR", "GBP", "AUD", "JPY", "CNY"],
        },
        otherDetails: [
          "Responsive design for all device sizes",
          "Progressive Web App (PWA) capabilities",
          "SEO optimized with dynamic meta tags",
          "Performance optimized with code splitting and lazy loading",
        ],
      },
    },
    {
      name: "Mindset Health - Nerva & Finito",
      slug: "mindset-health",
      summary:
        "Contributed to several features and maintenance across the family of apps at Mindset Health. Special focus on their Hypnotherapy program, improving animations and UI components.",
      longSummary: `Mindset Health provides digital hypnotherapy programs for chronic conditions. I worked on their flagship apps Nerva (for IBS) and Finito (for smoking cessation), focusing on delivering therapeutic content through engaging mobile experiences.

Key Contributions:
- Enhanced the hypnotherapy audio player with smooth animations and progress tracking
- Undergo multiple A/B testing to improve user experience
- Implemented and contributed on multiple features and maintenance
- Implemented new theme colors, logo and push notifications updates
`,
      challenges: `The main challenge was ensuring smooth playback of hypnotherapy sessions while maintaining app performance. We also had to handle complex subscription states and offline functionality for users in areas with poor connectivity.`,
      role: "Senior Mobile Developer",
      linkPreview: "https://www.nervahealth.com/",
      linkAppStore:
        "https://apps.apple.com/us/app/nerva-ibs-gut-hypnotherapy/id1467398796",
      linkGooglePlay:
        "https://apps.apple.com/au/app/nerva-ibs-gut-hypnotherapy/id1467398796",
      image: "/mindset-health/mindset-health.jpg",
      tech: [
        "React Native",
        "TypeScript",
        "Jest",
        "React Testing Library",
        "AWS Amplify",
        "CI/CD",
        "Fastlane",
        "GitHub Actions",
      ],
      screenshots: [
        {
          url: "/mindset-health/nerva-1.webp",
          alt: "Nerva App - Hypnotherapy Session",
          caption:
            "Main hypnotherapy session interface with progress tracking and audio controls",
        },
        {
          url: "/mindset-health/finito-1.webp",
          alt: "Finito App - Program Overview",
          caption:
            "Program overview showing session progress and therapeutic content",
        },
        {
          url: "/mindset-health/evia-1.webp",
          alt: "Evia App - Program Overview",
          caption:
            "Program overview showing session progress and therapeutic content",
        },
      ],
    },
    {
      name: "VicSuper Mobile App",
      slug: "vicsuper-mobile-app",
      summary:
        "Project-based on Ionic/Angular and Cordova. Allows clients to check their superannuation associated with VicSuper. Available for Android and iOS with continuous integration.",
      longSummary: `The VicSuper mobile app provides members with secure access to their superannuation accounts, allowing them to track their balance, make contributions, and manage their investments on the go.

Key Contributions:
- Developed cross-platform mobile app using Ionic and Angular
- Implemented secure authentication and biometric login
- Integrated with VicSuper's backend APIs for real-time account data
- Built custom charts for investment performance visualization
- Set up automated testing with Jest and Detox
- Implemented CI/CD pipelines for both App Store and Play Store deployments
`,
      challenges: `The main challenge was ensuring the app met strict security requirements for financial data while maintaining a smooth user experience. We also had to handle complex financial calculations and display them in an intuitive way.`,
      role: "Frontend Developer",
      linkPreview: "https://www.vicsuper.com.au/forms-and-resources/mobile-app",
      image: "/vicsuper-mobile-app.png",
      tech: ["Ionic", "Angular", "TypeScript", "Node.js", "Jest", "Detox"],
      implementationDetails: {
        security: {
          features: [
            "Biometric authentication",
            "Secure storage",
            "Session timeout",
          ],
        },
        features: [
          "Account balance and transactions",
          "Investment performance tracking",
          "Contribution calculator",
          "Quality and security by bank standards",
          "Push notifications",
        ],
      },
    },
    {
      name: "Good on You - Mobile App",
      slug: "good-on-you-mobile",
      summary:
        "Implemented UI improvements and feature delivery across the iOS and Android apps. Focus on performance, UX polish, and release stability.",
      longSummary: `Good On You is the world's leading source for brand ratings, articles, and guides on ethical and sustainable fashion. The mobile app helps users discover ethical brands and make conscious shopping decisions.

Key Contributions:
- Improved visual, data fetching and state management
- Implemented a new design system with reusable UI components
- Optimized app performance, reducing load times by 40%
- Improved CI/CD pipelines for faster and more reliable releases
`,
      challenges: `The main challenge was handling the complex filtering system for brand ratings while maintaining smooth performance. We also had to ensure the app worked well with a large and frequently updated database of brands and products.`,
      role: "Senior Mobile Developer",
      linkGooglePlay:
        "https://apps.apple.com/au/app/good-on-you-ethical-ratings/id1044017998",
      linkAppStore:
        "https://apps.apple.com/us/app/good-on-you-ethical-ratings/id1044017998",
      image: "/goodonyou-mobile/goodonyou-hero-slug.png",
      tech: [
        "React Native",
        "TypeScript",
        "Node.js",
        "GraphQL",
        "Apollo Client",
        "React Query",
        "Jest",
        "Detox",
        "Redux Toolkit",
        "GitHub Actions",
      ],
      screenshots: [
        {
          url: "/goodonyou-mobile/goodonyou-mobile-1.png",
          alt: "Good on You Mobile App - Home Screen",
          caption:
            "Main interface showcasing ethical brand ratings and featured content",
        },
        {
          url: "/goodonyou-mobile/goodonyou-mobile-2.webp",
          alt: "Good on You Mobile App - Brand Search",
          caption: "Advanced brand search and filtering capabilities",
        },
        {
          url: "/goodonyou-mobile/goodonyou-mobile-3.webp",
          alt: "Good on You Mobile App - Brand Details",
          caption:
            "Detailed brand information with ethical ratings and sustainability metrics",
        },
        {
          url: "/goodonyou-mobile/goodonyou-mobile-4.webp",
          alt: "Good on You Mobile App - Collections",
          caption:
            "Personal collections and saved items for sustainable shopping",
        },
      ],
      implementationDetails: {
        features: [
          "Brand and product search with filters",
          "Ethical rating system",
          "Personalized recommendations",
          "Saved items and collections",
          "Dark mode",
        ],
        performance: {
          optimizations: [
            "Code splitting",
            "Image optimization",
            "List virtualization",
            "Optimistic UI updates",
          ],
        },
      },
    },
    {
      name: "Good on You - Website",
      slug: "good-on-you",
      summary:
        "Revamped Good On You's web platform to provide a seamless experience for discovering ethical fashion brands and sustainable shopping.",
      longSummary: `The Good On You website serves as a comprehensive directory for ethical fashion brands, providing detailed ratings, articles, and guides on sustainable fashion. The platform helps consumers make informed purchasing decisions based on brands' environmental impact, labor conditions, and animal welfare practices.

Key Contributions:
- Led the frontend architecture redesign using React for improved SEO and performance
- Implemented a responsive design system
- Optimized the brand directory with advanced filtering and search capabilities
- Integrated with headless CMS for content management
- Implemented analytics
`,
      challenges: `The main challenge was handling the complex filtering system for thousands of brands while maintaining fast page loads. We also had to ensure the site was accessible and performed well across all devices and connection speeds.`,
      role: "Frontend Tech Lead",
      linkPreview: "https://directory.goodonyou.eco/",
      image: "/goodonyou-website/goodonyou-directory-1.png",
      tech: [
        "React",
        "TypeScript",
        "React Query",
        "Apollo Client",
        "GraphQL",
        "Headless CMS",
        "GitHub Actions",
      ],
      screenshots: [
        {
          url: "/goodonyou-website/goodonyou-directory-1.png",
          alt: "Good on You Website - Brand Directory",
          caption:
            "Main brand directory interface with search and filtering capabilities",
        },
        {
          url: "/goodonyou-website/goodonyou-directory-3.png",
          alt: "Good on You Website - Search Results",
          caption:
            "Advanced search results with filtering options and brand comparisons",
        },
      ],
      implementationDetails: {
        seo: {
          features: [
            "SSG (Static Site Generation)",
            "Stadistics and analytics integration",
          ],
        },
      },
    },
    {
      name: "Banco de Chile Apps",
      slug: "banco-de-chile-apps",
      summary:
        "A family of hybrid applications offered by Banco de Chile: MiBanco, MiCuenta, MiPago, MiCrédito, MiPass among others. All applications are based on Ionic and have versions for Android and iOS.",
      longSummary: `Developed and maintained a suite of mobile banking applications for Banco de Chile, one of the largest banks in Chile. The apps provide customers with secure access to their accounts, payments, transfers, and other banking services.

Key Applications:
- MiBanco: Main banking app for account management
- MiPago: Bill payments and transfers
- MiCrédito: Loan and credit card management
- MiPass: Digital wallet and contactless payments

Key Contributions:
- Led the development of multiple features in the ecosystem
- Wrote several tests and ensured secure and well tested feature deployment
`,
      challenges: `The main challenge was ensuring the highest level of security while maintaining a smooth user experience. We had to comply with strict banking regulations and protect sensitive financial data. Performance optimization was also critical, as many users in Chile have older Android devices with limited resources.`,
      role: "Mobile Development Lead",
      linkGooglePlay:
        "https://play.google.com/store/apps/details?id=cl.bancochile.mi_banco",
      linkAppStore: "https://apps.apple.com/cl/app/mi-banco-chile/id1516872542",
      image: "/bancodechile/bancodechile-mobile-1.webp",
      tech: [
        "Ionic",
        "Angular",
        "Cordova",
        "Java",
        "iOS",
        "Android",
        "TDD",
        "CI/CD",
        "Fastlane",
        "GitHub Actions",
      ],
      implementationDetails: {
        features: [
          "Account balance and transactions",
          "Bill payments and transfers",
          "QR code payments",
          "Card management",
          "ATM and branch locator",
          "Customer support chat",
        ],
      },
    },

    {
      name: "Oodle Labs - Agency Website",
      slug: "oodle-labs",
      summary:
        "Astro and React marketing site for Oodle Labs, a boutique software studio, showcasing services, work, and project inquiry flows.",
      longSummary: `Oodle Labs is a boutique software development studio. Their website serves as the primary marketing presence, explaining services, highlighting selected work, and guiding prospective clients toward project inquiries.

Key Contributions:
- Built the site with Astro for fast, static delivery and React islands for interactive components
- Implemented responsive layouts, smooth animations, and polished visual details
- Created a clean information architecture for services, work, about, and contact sections
- Optimized for Core Web Vitals and SEO
`,
      challenges: `As a studio site, the design needed to feel distinctive and trustworthy while remaining fast and accessible. We focused on keeping the bundle small, animations subtle, and the inquiry flow frictionless.`,
      role: "Frontend Developer",
      linkPreview: "https://oodle-labs.dev/",
      image: "/oodle-labs/oodle-labs-hero.png",
      tech: ["Astro", "React", "TypeScript", "Tailwind CSS", "MDX", "Vercel"],
      implementationDetails: {
        performance: {
          features: [
            "Static site generation with Astro",
            "Partial hydration via React islands",
            "Optimized images and Core Web Vitals",
          ],
        },
      },
    },
    {
      name: "EthicalJobs - Mission-Driven Job Board",
      slug: "ethical-jobs",
      summary:
        "Homepage and admin system updates for EthicalJobs.com.au, Australia's leading job board for not-for-profit and community sector roles.",
      longSummary: `EthicalJobs is an Australian job board connecting job seekers with meaningful work in not-for-profit, community services, social justice, and environmental sectors. The platform helps values-aligned candidates discover roles at organizations making a positive impact.

Key Contributions:
- Updated the homepage built with React and GraphQL
- Updated the admin system and databases using Django, HTML, and PostgreSQL
- Collaborated with the team via Aclama to deliver improvements on a tight timeline
`,
      challenges: `The platform serves a niche but passionate audience — people seeking mission-driven work. The homepage needed to surface relevant opportunities quickly while maintaining the site's community-focused identity.`,
      role: "Full Stack Developer",
      linkPreview: "https://www.ethicaljobs.com.au/",
      image: "/ethical-jobs/ethical-jobs-hero.png",
      imageFocalPoint: "bottom",
      tech: ["React", "GraphQL", "Django", "PostgreSQL", "HTML"],
    },
    {
      name: "Aesop - Customer Service Help Center",
      slug: "aesop-help-center",
      summary:
        "Custom React-based Zendesk Help Center for Aesop's Australian market, translating the brand's minimalist aesthetic into a customer-service experience.",
      longSummary: `Aesop's customer service help center provides self-service support for the Australian market, covering product advice, orders and delivery, gift services, payments, and sustainability. Built on Zendesk with a custom React layer, the help center extends Aesop's signature minimalist brand into the support experience.

Key Contributions:
- Built a custom React frontend layered on Zendesk Help Center
- Collaborated with a designer in a traditional designer-developer workflow
- Implemented topic-based category navigation, prompt-action quick links, and FAQ structure
- Integrated with Zendesk's article and search infrastructure
- Maintained Aesop's editorial typography, bottle motif branding, and B Corp messaging
`,
      challenges: `Zendesk Help Center themes are constrained by the platform's templating system. Layering React on top required careful integration to keep the brand's premium, editorial feel while working within Zendesk's content structure and article routing.`,
      role: "Frontend Developer",
      linkPreview: "https://au.assistance.aesop.com/hc/en-au",
      image: "/aesop-help-center/aesop-help-center-3.png",
      imageFocalPoint: "top",
      tech: ["React", "Zendesk", "TypeScript"],
      screenshots: [
        {
          url: "/aesop-help-center/aesop-help-center-3.png",
          alt: "Aesop Customer Service homepage with decorative bottle-pattern header, 'How can we help you?' prompt, topic navigation, and quick-action cards for contact, delivery, tracking, and returns",
          caption:
            "Help center homepage with Aesop's signature bottle-pattern header and prompt-action quick links",
        },
        {
          url: "/aesop-help-center/aesop-help-center-2.png",
          alt: "Aesop 'Orders and delivery' category page with pink header and expandable FAQ accordion alongside the persistent topic navigation sidebar",
          caption:
            "Category page with expandable FAQ accordion for shipping and returns questions",
        },
        {
          url: "/aesop-help-center/aesop-help-center-1.png",
          alt: "Aesop help article page under 'Payment and My Account' explaining international credit card payments, with sidebar topic navigation and article feedback buttons",
          caption:
            "Article page with topic sidebar and 'Was this article helpful?' feedback buttons",
        },
      ],
    },
    {
      name: "MyNous - Livestock Buyer Portal",
      slug: "mynous",
      summary:
        "Buyer-facing customer portal for the Australian livestock industry, giving meat processors and agents real-time visibility into purchases, weights, prices, and EID data from any device at the saleyard.",
      longSummary: `MyNous is a buyer portal built by AgriNous for the Australian livestock industry. It gives buyers and their teams 24/7 access to real-time purchase data — reports, averages, prices, weights, and EID device data — all from any device, at the saleyard or in the office.

The portal respects real-world saleyard workflows, marking data as provisional until confirmed by the agent or saleyard. Active since 2018, MyNous is used by meat processing companies and agents buying on behalf of producer clients.
`,
      challenges: `The portal needed to work reliably on mobile devices in rural saleyard environments, while presenting complex agricultural data (weights, prices, EIDs, provisional vs. confirmed status) in a way that's fast and unambiguous for buyers on the move.`,
      linkPreview: "https://www.agrinous.com.au/mynous",
      image: "/mynous/mynous-hero.png",
      imageFocalPoint: "top",
      tech: ["Responsive Web", "Real-time Data", "Agricultural Tech"],
    },
    {
      name: "Tugeda Space - Education Space Matching",
      slug: "tugeda-space",
      summary:
        "Platform connecting unused spaces with teams running education across the Pacific, originally built around the idea that 'every building is a classroom.'",
      longSummary: `Tugeda is a platform that connects unused spaces with teams trying to run education across the Pacific. Originally conceived as "Every building is a classroom," the tool makes it easier to find and book spaces for educational programs in communities that need them.

Key Contributions:
- Actively participated on the frontend part of Tugeda.space
- Built with React, TypeScript, Next.js, Redux, Storybook, and AWS
- Collaborated via Ackama
`,
      role: "Frontend Developer",
      image: "/tugeda-space/tugeda-space-1.png",
      tech: ["React", "TypeScript", "Next.js", "Redux", "Storybook", "AWS"],
      screenshots: [
        {
          url: "/tugeda-space/tugeda-space-1.png",
          alt: "Tugeda community engagement page on a teal background asking how visitors can help connect Solomon Islanders with education, with six action cards",
          caption:
            "Community engagement page offering six ways to participate — list a building, suggest spaces, or advertise services",
        },
        {
          url: "/tugeda-space/tugeda-space-2.png",
          alt: "Tugeda marketing landing page with 'Every building can be a place to learn' headline and a browser mockup previewing the search interface and map",
          caption:
            "Marketing landing page introducing the platform with the tagline 'Every building can be a place to learn'",
        },
        {
          url: "/tugeda-space/tugeda-space-3.png",
          alt: "Tugeda web app split-pane search results: building cards with photos, capacity, and amenity badges on the left, interactive map of the Solomon Islands on the right",
          caption:
            "Split-pane search results showing available buildings with photos, capacity, and amenity badges alongside an interactive map of the Solomon Islands",
        },
      ],
    },
  ],
  about: {
    description: `
    Senior Software Engineer with 10+ years' experience building scalable web and mobile platforms, cloud infrastructure, and AI-native workflows.
    When I'm not coding, you'll find me playing board games, singing in choirs, playing with my two kids or hanging out with my dog Balu.
    `,
    image: "/profilepic.jpg",
  },
};

// #5755ff
