/* Same logic you already have; included here for completeness */
const LOCAL_QUOTES = [
  { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
  { text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
  { text: "Code is like humor. When you have to explain it, it’s bad.", author: "Cory House" },
  { text: "Programs must be written for people to read.", author: "Harold Abelson" },
  { text: "The best way to predict the future is to invent it.", author: "Alan Kay" }
];

const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const newBtn   = document.getElementById("new-quote");
const tweet    = document.getElementById("tweet");

async function fetchQuote() {
  try {
    const res = await fetch("https://api.quotable.io/random");
    if (!res.ok) throw new Error("API unavailable");
    const { content, author } = await res.json();
    return { text: content, author };
  } catch {
    return LOCAL_QUOTES[Math.floor(Math.random() * LOCAL_QUOTES.length)];
  }
}

async function render() {
  const { text, author } = await fetchQuote();
  quoteEl.textContent  = `"${text}"`;
  authorEl.textContent = `— ${author}`;
  tweet.href           = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${text}" — ${author}`)}`;
}

newBtn.addEventListener("click", render);
window.addEventListener("DOMContentLoaded", render);
