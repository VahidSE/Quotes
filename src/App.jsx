import { useEffect, useState } from "react";
import QuoteList from "./components/QuoteList";
import CategoryFilter from "./components/CategoryFilter";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetch("/quotes.json")
      .then((res) => res.json())
      .then((data) => setQuotes(data));
  }, []);

  const categories = ["All", ...new Set(quotes.map((q) => q.category))];

  const filteredQuotes =
    selectedCategory === "All"
      ? quotes
      : quotes.filter((q) => q.category === selectedCategory);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>🌟 Vahid Stories</h1>
      <CategoryFilter
        categories={categories}
        onSelectCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      <QuoteList quotes={filteredQuotes} />
    </div>
  );
}

export default App;