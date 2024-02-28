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
