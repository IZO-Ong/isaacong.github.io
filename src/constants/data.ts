import type { Project, Semester, Award } from '../types';

import epsteinImg from '../assets/projects/epstein-linkedin.png';
import netpulseImg from '../assets/projects/netpulse.png';
import blueskyImg from '../assets/projects/bluesky-toxicity.png';
import nusCatImg from '../assets/projects/nus-cat.png';
import profileImg from '../assets/profile.jpg';

export const PROFILE_IMAGE = profileImg;

export const PROJECTS: Project[] = [
  {
    title: "Epstein's LinkedIn Files",
    description: "Chrome extension using MediaPipe to redact eyes and names on LinkedIn.",
    tags: ["React", "Vite", "MediaPipe"],
    image: epsteinImg,
    link: "https://github.com/IceyFoxes/epstein-extension"
  },
  {
    title: "NetPulse",
    description: "Desktop network diagnostic tool built with JavaFX and Spring Boot.",
    tags: ["JavaFX", "Spring Boot", "Socket Programming"],
    image: netpulseImg,
    link: "https://github.com/IZO-Ong/NetPulse"
  },
  {
    title: "Bluesky Toxicity Tracker",
    description: "Data pipeline using Apache Airflow and AWS EC2 to track social media (Bluesky) toxicity.",
    tags: ["Airflow", "AWS", "Docker", "Next.js", "Flask"],
    image: blueskyImg,
    link: "https://github.com/IZO-Ong/Bluesky-Toxicity-Tracker" 
  },
  {
    title: "NUS Cat Classifier",
    description: "Full-stack web application designed to identify and classify the campus cats of NUS, accompanied with forums.",
    tags: ["React", "Vite", "Flask", "Pytorch"],
    image: nusCatImg,
    link: "https://github.com/IZO-Ong/NUS-Cat-Classifier"
  }
];

export const ACADEMIC_PLAN: Semester[] = [
  {
    term: "Year 2 Semester 2",
    modules: [
      { code: "CS2101", name: "Effective Communication for Computing Professionals", grade: "-" },
      { code: "CS2103T", name: "Software Engineering", grade: "-" },
      { code: "CS2106", name: "Introduction to Operating Systems", grade: "-" },
      { code: "CS3223", name: "Database Systems Implementation", grade: "-" },
      { code: "CS4225", name: "Big Data Systems for Data Science", grade: "-" },
      { code: "ST2132", name: "Mathematical Statistics", grade: "-" },
      { code: "NST2015", name: "Mathematics and Reality", grade: "-" },
    ]
  },
  {
    term: "Year 2 Semester 1",
    modules: [
      { code: "CS2102", name: "Database Systems", grade: "A+", topStudent: true },
      { code: "CS2109S", name: "Introduction to AI and Machine Learning", grade: "A+" },
      { code: "CS2030S", name: "Programming Methodology II", grade: "A+" },
      { code: "CS2100", name: "Computer Organisation", grade: "A" },
      { code: "CS2105", name: "Introduction to Computer Networks", grade: "A" },
      { code: "NSS2001", name: "Science and Society", grade: "A" },
      { code: "NEX3004", name: "GEx Toronto", grade: "A" },
      { code: "IS1108", name: "Digital and AI Ethics", grade: "A-" },
    ]
  },
  {
    term: "Year 1 Semester 2",
    modules: [
      { code: "CS2040", name: "Data Structures and Algorithms", grade: "A+", topStudent: true },
      { code: "ST2131", name: "Probability", grade: "A" },
      { code: "DSA1101", name: "Introduction to Data Science", grade: "A" },
      { code: "NGT2001", name: "Global Social Thought", grade: "A" },
      { code: "NGN2001", name: "Global Narratives", grade: "A" },
    ]
  },
  {
    term: "Year 1 Semester 1",
    modules: [
      { code: "CS1010X", name: "Programming Methodology", grade: "A+" },
      { code: "MA2001", name: "Linear Algebra I", grade: "A+" },
      { code: "CS1231", name: "Discrete Structures", grade: "A" },
      { code: "MA2002", name: "Calculus", grade: "A" },
      { code: "NTW2032", name: "Identity, Death, and Immortality", grade: "A" },
      { code: "NSW2001", name: "Understanding the Social World: Singapore & Beyond", grade: "A" },
    ]
  }
];

export const AWARDS: Award[] = [
  {
    title: "Dean's List, School of Computing",
    issuer: "National University of Singapore",
    date: "AY25/26 Semester 1",
    description: "Recognized for meritorious academic achievement, placing in the top 5-10% of the cohort."
  },
  {
    title: "Sugar Industry of Singapore Prize",
    issuer: "National University of Singapore",
    date: "AY24/25 Semester 2",
    description: "Awarded to top two performing first-year students in Faculty of Science."
  }
];