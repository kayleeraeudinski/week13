// ui.ts
import { Book } from "./books";

export function renderBookList(books: Book[]): void {
  const bookList = document.querySelector("#bookList");
  if (bookList) {
    bookList.innerHTML = ""; // Clear the list
    books.forEach((book: Book) => {
      const li = document.createElement("li");
      li.className = "list-group-item d-flex justify-content-between align-items-center";
      li.innerHTML = `
        <span><strong>${book.title}</strong> by ${book.author}</span>
        <button class="btn btn-danger btn-sm" onclick="deleteBook(${book.id})">Delete</button>
      `;
      bookList.appendChild(li);
    });
  }
}

export function getFormInputs(): { title: string; author: string } | null {
  const titleInput = document.querySelector("#title") as HTMLInputElement;
  const authorInput = document.querySelector("#author") as HTMLInputElement;

  if (titleInput && authorInput) {
    return {
      title: titleInput.value,
      author: authorInput.value,
    };
  }

  return null;
}

export function resetForm(): void {
  const form = document.querySelector("#bookForm") as HTMLFormElement;
  if (form) {
    form.reset();
  }
}
