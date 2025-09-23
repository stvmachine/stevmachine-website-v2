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
      name: "Mindset Health - Nerva & Finito",
      summary:
        "Contributed to several features and maintenance across the family of apps at Mindset Health. Special focus on their Hypnotherapy program, improving animations and UI components.",
      linkPreview: "https://www.nervahealth.com/",
      linkSource: "https://apps.apple.com/au/app/nerva-ibs-gut-hypnotherapy/id1467398796",
      image: "/nerva.webp",
    },
    {
      name: "Good on You - Mobile App and Website",
      summary:
        "Revamped Good On You mobile app and website for ethical fashion ratings.",
      linkPreview: "https://directory.goodonyou.eco/",
      linkSource: "https://apps.apple.com/au/app/good-on-you-ethical-ratings/id1044017998",
      image: "/goodonyou-directory.png",
    },
    {
      name: "VicSuper Mobile App",
      summary:
        "Project-based on Ionic/Angular and Cordova. Allows clients to check their superannuation associated with VicSuper. Available for Android and iOS with continuous integration.",
      linkPreview: "https://www.vicsuper.com.au/forms-and-resources/mobile-app",
      linkSource: "https://www.vicsuper.com.au/forms-and-resources/mobile-app",
      image: "/vicsuper-mobile-app.png",
    },
    {
      name: "Banco de Chile Apps",
      summary:
        "A family of hybrid applications offered by Banco de Chile: MiBanco, MiCuenta, MiPago, MiCrédito, MiPass among others. All applications are based on Ionic and have versions for Android and iOS.",
      linkPreview:
        "https://play.google.com/store/apps/details?id=cl.bancochile.mi_banco",
      linkSource:
        "https://play.google.com/store/apps/details?id=cl.bancochile.mi_banco",
      image: "/bancodechile-mobile.png",
    },
    {
      name: "Good on You - Mobile App",
      summary:
        "Implemented UI improvements and feature delivery across the iOS and Android apps. Focus on performance, UX polish, and release stability.",
      linkPreview:
        "https://apps.apple.com/au/app/good-on-you-ethical-ratings/id1044017998",
      linkSource:
        "https://apps.apple.com/au/app/good-on-you-ethical-ratings/id1044017998",
      image: "/goodonyou-mobile.png",
    },
    {
      name: "Tugeda – Marketing Website",
      summary:
        "Delivered a responsive, accessible marketing site with a performant build pipeline and a modular component system.",
      linkPreview: "https://tugeda.com/",
      linkSource: "https://tugeda.com/",
      image: "/tugeda-website.png",
    },
    {
      name: "My Portfolio Refresh",
      summary:
        "Astro + Tailwind redesign with accessible components, responsive grid, and optimized images for fast loads.",
      linkPreview: "https://stevmachine.me",
      linkSource: "https://stevmachine.me",
      image: "/myportfolio.png",
    },
  ],
  about: {
    description: `
      Senior Software Developer at Ackama with 10+ years building scalable applications. I specialize in React, TypeScript, Ruby on Rails, and AWS cloud infrastructure.
      When I'm not coding, you'll find me playing board games, singing in choirs, or hanging out with my dog Balu.
    `,
    image: "/profilepic.jpg",
  },
};

// #5755ff
