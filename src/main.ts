// main.ts
import "bootstrap/dist/css/bootstrap.css";
import { fetchBooksAPI, addBookAPI, deleteBookAPI } from "./books";
import { renderBookList, getFormInputs, resetForm } from "./ui";


async function fetchAndRenderBooks(): Promise<void> {
  const books = await fetchBooksAPI();
  renderBookList(books);
}

// Add a New Book
const form = document.querySelector("#bookForm") as HTMLFormElement;
if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const inputs = getFormInputs();
    if (inputs) {
      const { title, author } = inputs;
      await addBookAPI(title, author);
      resetForm();
      fetchAndRenderBooks(); // Refresh the book list
    }
  });
}

// Delete a Book
// @ts-ignore: Function is called via HTML onclick
window.deleteBook = async function (id: number): Promise<void> {
  await deleteBookAPI(id);
  fetchAndRenderBooks(); // Refresh the book list
};

// Initialize
fetchAndRenderBooks();
