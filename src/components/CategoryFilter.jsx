function CategoryFilter({ categories, onSelectCategory, selectedCategory }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelectCategory(cat)}
          style={{
            margin: "5px",
            padding: "10px",
            backgroundColor: selectedCategory === cat ? "#007BFF" : "#eee",
            color: selectedCategory === cat ? "white" : "black",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;