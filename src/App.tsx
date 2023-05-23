import { useState } from "react";
import Quote from "./components/Quote";
import "./App.css";

const quoteData = [
  { text: `The purpose of our lives is to be happy.`, author: "Dalai Lama" },
  {
    text: `Life is what happens when you’re busy making other plans.`,
    author: "John Lennon",
  },
  { text: `Get busy living or get busy dying.`, author: "Stephen King" },
  {
    text: `You only live once, but if you do it right, once is enough.`,
    author: "Mae West",
  },
  {
    text: `Many of life’s failures are people who did not realize how close they were to success when they gave up.`,
    author: "Thomas A. Edison",
  },
];

const colorData = [
  { color: "rgb(22, 160, 133)" },
  { color: "rgb(44, 62, 80)" },
  { color: "rgb(243, 156, 18)" },
  { color: "rgb(251, 105, 100)" },
  { color: "rgb(155, 89, 182)" },
  { color: "rgb(52, 34, 36)" },
  { color : "rgb(119, 177, 169)" },
  { color: "rgb(231, 76, 60)" },
  { color: "rgb(189, 187, 153)" },
  { color: "rgb(115, 168, 87)" },
];

console.log(quoteData);
const getRandomQuote = () => {
  return Math.round(Math.random() * (quoteData.length - 1 - 0) + 0);
};
const getRandomColor = () => {
  return Math.round(Math.random() * (colorData.length - 1 - 0) + 0);
};

const App = () => {
  const [quote, setQuote] = useState(quoteData[getRandomQuote()]);
  const [color, setColor] = useState(colorData[getRandomColor()]);

  const handleNewQuote = () => {
    setQuote(quoteData[getRandomQuote()]);
    setColor(colorData[getRandomColor()]);
  };
  return (
    <main>
      <Quote handleNewQuote={handleNewQuote} quote={quote} color={color}/>
      <div className="attributes">
        <span className="text">by Coderloff</span>
      </div>
    </main>
  );
};

export default App;
