export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

export interface Module {
  code: string;
  name: string;
  grade: string;
  topStudent?: boolean;
}

export interface Semester {
  term: string;
  modules: Module[];
}