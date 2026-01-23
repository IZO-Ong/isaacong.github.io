import type { Project, Semester } from '../types';

export const PROFILE_IMAGE = "/profile.jpg";

export const PROJECTS: Project[] = [
  {
    title: "Epstein's LinkedIn Files",
    description: "Chrome extension using MediaPipe to redact eyes and names on LinkedIn.",
    tags: ["React", "Vite", "MediaPipe"],
    image: "/projects/epstein-linkedin.png",
    link: "https://github.com/IceyFoxes/epstein-extension"
  },
  {
    title: "NetPulse",
    description: "Desktop network diagnostic tool built with JavaFX and Spring Boot.",
    tags: ["Java", "JavaFX", "Spring Boot", "Socket Programming"],
    image: "/projects/netpulse.png",
    link: "https://github.com/IZO-Ong/NetPulse"
  },
  {
    title: "Bluesky Toxicity Tracker",
    description: "Data pipeline using Apache Airflow and AWS EC2 to track social media (Bluesky) toxicity.",
    tags: ["Airflow", "AWS", "Docker", "Next.js", "Flask"],
    image: "/projects/bluesky-toxicity.png",
    link: "https://github.com/IZO-Ong/Bluesky-Toxicity-Tracker" 
  },
  {
    title: "NUS Cat Classifier",
    description: "Full-stack web application designed to identify and classify the campus cats of NUS, accompanied with forums.",
    tags: ["React", "Vite", "Flask", "Pytorch"],
    image: "/projects/nus-cat.png",
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
      { code: "CS1231", name: "Discrete Structures", grade: "A" },
      { code: "MA2001", name: "Linear Algebra I", grade: "A" },
      { code: "MA2002", name: "Calculus", grade: "A" },
      { code: "NTW2032", name: "Identity, Death, and Immortality", grade: "A" },
      { code: "NSW2001", name: "Understanding the Social World: Singapore & Beyond", grade: "A" },
    ]
  }
];