import type { Project, Semester } from '../types';

export const PROFILE_IMAGE = "/profile.jpg";

export const PROJECTS: Project[] = [
  {
    title: "Epstein's LinkedIn Files",
    description: "Chrome extension using MediaPipe and WASM to redact facial landmarks and names on LinkedIn.",
    tags: ["React", "MediaPipe", "WASM", "Chrome API"],
    image: "/projects/epstein-linkedin.png"
  },
  {
    title: "NetPulse",
    description: "Desktop network diagnostic tool built with JavaFX and Spring Boot for real-time monitoring.",
    tags: ["Java", "JavaFX", "Spring Boot", "Socket Programming"],
    image: "/projects/netpulse.png"
  },
  {
    title: "Bluesky Toxicity Tracker",
    description: "Data pipeline using Apache Airflow and AWS EC2 to classify social media toxicity.",
    tags: ["Airflow", "AWS", "Docker", "Next.js", "Flask"],
    image: "/projects/bluesky-toxicity.png"
  },
  {
    title: "NUS Cat Classifier",
    description: "Full-stack web application designed to identify and classify the campus cats of NUS",
    tags: ["React", "Javascript", "Vite", "Flask"],
    image: "/projects/nus-cat.png"
  }
];

export const ACADEMIC_PLAN: Semester[] = [
  {
    term: "Year 2 Semester 1",
    modules: [
      { code: "CS2102", name: "Database Systems", grade: "A+" },
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
      { code: "CS2040", name: "Data Structures and Algorithms", grade: "A+" },
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
      { code: "NTW2032", name: "Death, Identity and Immortality", grade: "A" },
      { code: "NSW2001", name: "Understanding the Social World: Singapore & Beyond", grade: "A" },
    ]
  }
];