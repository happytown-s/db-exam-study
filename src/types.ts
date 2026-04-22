export interface Question {
  id: number;
  category: string;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

export interface CalcQuestion {
  id: number;
  category: string;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
  cheatsheet: string;
  steps: string[];
}

export interface SubjectBQuestion {
  id: number;
  category: string;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
  sqlCode?: string;
}
