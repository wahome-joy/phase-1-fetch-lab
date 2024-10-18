function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json()) // Convert the response to JSON
    .then((data) => {
      renderBooks(data); // Pass the data to another function to display it
    })
    .catch((error) => console.error('Error fetching books:', error)); // Log any errors
}

function renderBooks(books) {
  const bookList = document.getElementById('book-list'); // Get the list element from HTML
  bookList.innerHTML = ''; // Clear any existing content
  books.forEach((book) => {
    const listItem = document.createElement('li'); // Create a new list item
    listItem.textContent = book.name; // Set the text to the book's name
    bookList.appendChild(listItem); // Add the item to the list
  });
}

// Call fetchBooks when the page loads
window.onload = fetchBooks;
