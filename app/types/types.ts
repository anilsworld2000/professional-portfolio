// types/resume.ts

export type Contact = {
  phone: string;
  email: string;
  location: string;
  linkedin: string;
};

export type Skills = {
  languages_frameworks: string[];
  database_cloud: string[];
  practices_tools: string[];
  ui_desktop: string[];
};

export type ExperienceItem = {
  title: string;
  company: string;
  location: string;
  duration: string;
  responsibilities: string[];
};

export type EducationItem = {
  degree: string;
  institution: string;
};

export type LanguagesKnown = {
  [language: string]: string; // e.g., { English: "Advanced" }
};

export type ResumeData = {
  name: string;
  contact: Contact;
  summary: string;
  skills: Skills;
  experience: ExperienceItem[];
  education: EducationItem[];
  languages_known: LanguagesKnown;
  projects: string[];
  achievements: string[];
};