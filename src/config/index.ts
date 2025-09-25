import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Esteban Campos — Senior Software Developer",
  author: "Esteban Campos Valenzuela",
  description:
    "Senior Software Developer at Ackama, based in Melbourne, Australia. I specialize in full-stack development with React, React Native, TypeScript, Ruby on Rails, and cloud infrastructure on AWS.",
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
      "Senior Software Developer at Ackama, based in Melbourne, Australia. I specialize in full-stack development with React, React Native, TypeScript, Ruby on Rails, and cloud infrastructure on AWS.",
    email: "campos.esteban@gmail.com",
  },
  experience: [
    {
      company: "Ackama",
      position: "Senior Software Developer",
      startDate: "Dec 2023",
      endDate: "Present",
      summary: [
        "Developed full-stack solutions for web and hybrid mobile applications, collaborating with product teams to deliver maintainable, scalable systems",
        "Technologies: Node.js, React, React Native, Vue, NextJS, Gatsby, Ruby on Rails, Python (Django), AWS, Docker, Terraform, GraphQL, PostgreSQL, MongoDB",
        "Mentored junior and mid-level developers, fostering team knowledge sharing and best practices",
      ],
    },
    {
      company: "Ackama",
      position: "Software Developer",
      startDate: "Jul 2018",
      endDate: "Dec 2023",
      summary: [
        "Prior to my promotion to Senior Developer, I led impactful hybrid mobile projects and delivered solutions across varied client requirements.",
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
          caption: "Main hypnotherapy session interface with progress tracking and audio controls",
        },
        {
          url: "/mindset-health/finito-1.webp",
          alt: "Finito App - Program Overview",
          caption: "Program overview showing session progress and therapeutic content",
        },
        {
          url: "/mindset-health/evia-1.webp",
          alt: "Evia App - Program Overview",
          caption: "Program overview showing session progress and therapeutic content",
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
      image: "/goodonyou-mobile/goodonyou-mobile-1.png",
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
          caption: "Main interface showcasing ethical brand ratings and featured content",
        },
        {
          url: "/goodonyou-mobile/goodonyou-mobile-2.webp",
          alt: "Good on You Mobile App - Brand Search",
          caption: "Advanced brand search and filtering capabilities",
        },
        {
          url: "/goodonyou-mobile/goodonyou-mobile-3.webp",
          alt: "Good on You Mobile App - Brand Details",
          caption: "Detailed brand information with ethical ratings and sustainability metrics",
        },
        {
          url: "/goodonyou-mobile/goodonyou-mobile-4.webp",
          alt: "Good on You Mobile App - Collections",
          caption: "Personal collections and saved items for sustainable shopping",
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
          caption: "Main brand directory interface with search and filtering capabilities",
        },
        {
          url: "/goodonyou-website/goodonyou-directory-3.png",
          alt: "Good on You Website - Search Results",
          caption: "Advanced search results with filtering options and brand comparisons",
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
  ],
  about: {
    description: `
      Senior Software Developer at Ackama with 10+ years building scalable applications. I specialize in React, TypeScript, Ruby on Rails, and AWS cloud infrastructure.
      When I'm not coding, you'll find me playing board games, singing in choirs, playing with my two kids or hanging out with my dog Balu.
    `,
    image: "/profilepic.jpg",
  },
};

// #5755ff
