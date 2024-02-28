export type QuestionInfo = {
  q: string;
  a: Array<{ text: string; value: number; img?: string }>;
};

// Negative increases "Yin"
// Positive increases "Yang"

export const questions: Array<QuestionInfo> = [
  {
    q: "Which do you value more?",
    a: [
      { text: "Wisdom", value: -1 },
      { text: "Courage", value: 1 },
    ],
  },
  {
    q: "Your friends would characterize you as more of a...",
    a: [
      { text: "Night-owl", value: -2 },
      { text: "Morning person", value: 2 },
    ],
  },
  {
    q: "If I had to choose, I'd rather be...",
    a: [
      { text: "Cold", value: -1 },
      { text: "Hot", value: 1 },
    ],
  },
];
