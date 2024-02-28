export type QuestionInfo = {
  q: string;
  a: Array<{ text: string; pointValue: number; img?: string }>;
};

// Negative increases "Yin"
// Positive increases "Yang"

export const questions: Array<QuestionInfo> = [
  {
    q: "Which do you value more?",
    a: [
      { text: "Wisdom", pointValue: -1 },
      { text: "Courage", pointValue: 1 },
    ],
  },
  {
    q: "Your friends would characterize you as more of a...",
    a: [
      { text: "Night-owl", pointValue: -2 },
      { text: "Morning person", pointValue: 2 },
    ],
  },
  {
    q: "If I had to choose, I'd rather be...",
    a: [
      { text: "Cold", pointValue: -1 },
      { text: "Hot", pointValue: 1 },
    ],
  },
];

export const partnerQuestions: Array<QuestionInfo> = [
  {
    q: "I clean up more often than my partner.",
    a: [
      { text: "Agree", pointValue: -1 },
      { text: "Neutral", pointValue: 0 },
      { text: "Disagree", pointValue: 1 },
    ],
  },
  {
    q: "I rest more often than my partner.",
    a: [
      { text: "Agree", pointValue: -1 },
      { text: "Neutral", pointValue: 0 },
      { text: "Disagree", pointValue: 1 },
    ],
  },
  {
    q: "I am less passive than my partner.",
    a: [
      { text: "Agree", pointValue: 1 },
      { text: "Neutral", pointValue: 0 },
      { text: "Disagree", pointValue: -1 },
    ],
  },
  {
    q: "In making decisions, I tend to be more impulsive than my partner.",
    a: [
      { text: "Agree", pointValue: 1 },
      { text: "Neutral", pointValue: 0 },
      { text: "Disagree", pointValue: -1 },
    ],
  },
];
