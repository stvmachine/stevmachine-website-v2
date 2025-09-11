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
    { text: "LinkedIn", href: "https://www.linkedin.com/in/esteban-campos-valenzuela-338235b0/" },
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
        "Act as a technical domain expert in projects, including infrastructure (AWS & third-party services).",
        "Mentoring junior and mid-level developers, driving technical excellence and team collaboration.",
        "Notable clients: Kaluza, Mindset Health, AESOP, Nura, Good on You, Agronius and Ynomia.",
        "Ackama is an AU-NZ digital agency specialising in government initiatives, energy suppliers, and startups.",
      ],
    },
    {
      company: "Ackama",
      position: "Software Developer",
      startDate: "Jul 2018",
      endDate: "Dec 2023",
      summary: [
        "Full-stack development using React Native, React, Ruby on Rails, NodeJS, Python, Django, Ruby, TypeScript.",
        "Hybrid App Development and Amazon Web Services (AWS) cloud infrastructure.",
        "Worked on diverse projects including mobile apps, web platforms, and system migrations.",
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
        "Develop tests and e2e tests using Ionic 4, Angular 5, iOS, Android, Firebase, Karma, Fastlane, Git.",
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
      name: "Kaluza Platform",
      summary: "Enabled the Kaluza platform to scale and onboard retailers for the Australian and New Zealand markets. Collaborated across multiple teams in the UK and Australia.",
      linkPreview: "https://kaluza.com",
      linkSource: "https://kaluza.com",
      image: "/kaluza.png",
    },
    {
      name: "AESOP System Upgrade",
      summary: "Lead major upgrades for critical parts of the Aerup.com platform, involving significant updates to their monorepo based on NX, AWS, Apollo GraphQL, Typescript and NodeJS.",
      linkPreview: "https://aesop.com",
      linkSource: "https://aesop.com",
      image: "/aesop.png",
    },
    {
      name: "Mindset Health - Nerva & Finito",
      summary: "Contributed to several features and maintenance across the family of apps at Mindset Health. Special focus on their Hypnotherapy program, improving animations and UI components.",
      linkPreview: "https://nerva.com",
      linkSource: "https://nerva.com",
      image: "/nerva.png",
    },
    {
      name: "Nura - System Backend Upgrade",
      summary: "Migration and scaling of their legacy backend platform based on Ruby on Rails. Performed major refactoring and updated internal and third-party libraries to follow best practices.",
      linkPreview: "https://nura.com",
      linkSource: "https://nura.com",
      image: "/nura.png",
    },
    {
      name: "Good on You - Mobile App and Website",
      summary: "Revamped Good On You mobile app and website for ethical fashion ratings.",
      linkPreview: "https://directory.goodonyou.eco/",
      linkSource: "https://directory.goodonyou.eco/",
      image: "/goodonyou-directory.png",
    },
    {
      name: "MyNous - Livestock Sales App",
      summary: "Built an internal Progressive Web Application to count and monitor livestock sales stock and manage sales efficiently. Special focus on offline capabilities and data conflict management.",
      linkPreview: "https://agrinous.com",
      linkSource: "https://agrinous.com",
      image: "/mynous.png",
    },
    {
      name: "VicSuper Mobile App",
      summary: "Project-based on Ionic/Angular and Cordova. Allows clients to check their superannuation associated with VicSuper. Available for Android and iOS with continuous integration.",
      linkPreview: "https://www.vicsuper.com.au/forms-and-resources/mobile-app",
      linkSource: "https://www.vicsuper.com.au/forms-and-resources/mobile-app",
      image: "/vicsuper-mobile-app.png",
    },
    {
      name: "Banco de Chile Apps",
      summary: "A family of hybrid applications offered by Banco de Chile: MiBanco, MiCuenta, MiPago, MiCrédito, MiPass among others. All applications are based on Ionic and have versions for Android and iOS.",
      linkPreview: "https://play.google.com/store/apps/details?id=cl.bancochile.mbanking&hl=es_419",
      linkSource: "https://play.google.com/store/apps/details?id=cl.bancochile.mbanking&hl=es_419",
      image: "/bancodechile-mobile.png",
    },
  ],
  about: {
    description: `
      Hi, I'm Esteban Campos, a Senior Software Developer at Ackama with over 7 years of experience in full-stack development. I specialize in React, React Native, TypeScript, Ruby on Rails, and cloud infrastructure on AWS.

      I act as a technical domain expert in projects, including infrastructure (AWS & third-party services), and mentor junior and mid-level developers to drive technical excellence and team collaboration. I've worked with notable clients including Kaluza, Mindset Health, AESOP, Nura, Good on You, Agronius and Ynomia.

      Over the years, I've honed my skills in building robust, user-friendly applications that not only meet the needs of users but also push the boundaries of what's possible. My projects range from innovative mobile applications to responsive web designs, all with a focus on performance, security, and scalability. I also have a keen interest in board games, choirs, and my dog Balu.
    `,
    image: "/profilepic.jpg",
  },
};

// #5755ff
