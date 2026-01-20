export interface Project {
  title: string;
  description: string;
  tags: string[];
}

export interface Module {
  code: string;
  name: string;
  grade: string;
}

export interface Semester {
  term: string;
  modules: Module[];
}