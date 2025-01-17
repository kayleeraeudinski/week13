// books.ts
export interface Book {
    title: string;
    author: string;
    id: number;
  }
  
  export async function fetchBooksAPI(): Promise<Book[]> {
    const response = await fetch("http://localhost:3001/books");
    return response.json();
  }
  
  export async function addBookAPI(title: string, author: string): Promise<void> {
    await fetch("http://localhost:3001/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, author }),
    });
  }
  
  export async function deleteBookAPI(id: number): Promise<void> {
    await fetch(`http://localhost:3001/books/${id}`, { method: "DELETE" });
  }
  