function QuoteList({ quotes }) {
  return (
    <div>
      {quotes.length === 0 ? (
        <p>No quotes found for this category.</p>
      ) : (
        quotes.map((q, index) => (
          <blockquote
            key={index}
            style={{
              borderLeft: "4px solid #007BFF",
              paddingLeft: "10px",
              marginBottom: "15px",
              fontStyle: "italic"
            }}
          >
            "{q.quote}" <br />
            <small>— {q.category}</small>
          </blockquote>
        ))
      )}
    </div>
  );
}

export default QuoteList;