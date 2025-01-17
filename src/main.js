import "bootstrap/dist/css/bootstrap.css";
async function fetchBooks() {
    const response = await fetch("http://localhost:3001/books");
    const books = await response.json();
    const bookList = document.querySelector("#bookList");
    if (bookList) {
        bookList.innerHTML = ""; // Clear the list
    }
    books.forEach((book) => {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center";
        li.innerHTML = `
        <span><strong>${book.title}</strong> by ${book.author}</span>
        <button class="btn btn-danger btn-sm" onclick="deleteBook(${book.id})">Delete</button>
      `;
        if (bookList) {
            bookList.appendChild(li);
        }
    });
}
// Add a New Book
const form = document.querySelector("#bookForm");
if (form) {
    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const titleInput = document.querySelector("#title");
        const authorInput = document.querySelector("#author");
        if (titleInput && authorInput) {
            const title = titleInput.value;
            const author = authorInput.value;
            await fetch("http://localhost:3001/books", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title, author }),
            });
            form.reset(); // Reset the form after submitting
            fetchBooks(); // Refresh the book list
        }
    });
}
// Delete a Book
// @ts-ignore: Function is called via HTML onclick
async function deleteBook(id) {
    await fetch(`http://localhost:3001/books/${id}`, { method: "DELETE" });
    fetchBooks(); // Refresh the book list
}
// Initialize
fetchBooks();
