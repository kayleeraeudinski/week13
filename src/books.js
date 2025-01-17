// Define the fetchBooksAPI function
export const fetchBooksAPI = async () => {
  const response = await fetch("http://localhost:3001/books");
  const books = await response.json();
  return books;
};

// Define the addBookAPI function
export const addBookAPI = async (book) => {
  await fetch("http://localhost:3001/books", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(book),
  });
};


// Define the deleteBookAPI function
export const deleteBookAPI = async (id) => {
  await fetch(`http://localhost:3001/books/${id}`, { method: "DELETE" });
};
