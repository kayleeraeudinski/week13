export function renderBookList(books) {
    const bookList = document.querySelector("#bookList");
    if (bookList) {
        bookList.innerHTML = ""; // Clear the list
        books.forEach((book) => {
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
export function getFormInputs() {
    const titleInput = document.querySelector("#title");
    const authorInput = document.querySelector("#author");
    if (titleInput && authorInput) {
        return {
            title: titleInput.value,
            author: authorInput.value,
        };
    }
    return null;
}
export function resetForm() {
    const form = document.querySelector("#bookForm");
    if (form) {
        form.reset();
    }
}
