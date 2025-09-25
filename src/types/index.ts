export interface SiteConfig extends HeaderProps {
  title: string;
  description: string;
  lang: string;
  author: string;
  socialLinks: { text: string; href: string }[];
  socialImage: string;
  canonicalURL?: string;
}

export interface SiteContent {
  hero: HeroProps;
  experience: ExperienceProps[];
  projects: ProjectProps[];
  about: AboutProps;
}

export interface HeroProps {
  name: string;
  specialty: string;
  summary: string;
  email: string;
}

export interface ExperienceProps {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  summary: string | string[];
}

export interface ProjectImage {
  url: string;
  alt: string;
  caption?: string;
}

export interface ProjectProps {
  name: string;
  summary: string;
  longSummary?: string;
  challenges?: string;
  results?: string;
  role?: string;
  image: string;
  screenshots?: ProjectImage[];
  implementationDetails?: Record<string, object>;
  linkPreview?: string;
  linkGooglePlay?: string;
  linkAppStore?: string;
  slug?: string;
  tech?: string[];
}

export interface AboutProps {
  description: string;
  image: string;
}

export interface HeaderProps {
  siteLogo: string;
  navLinks: { text: string; href: string }[];
}
