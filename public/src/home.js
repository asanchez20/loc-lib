function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let checkOut = books.filter ((book) => book.borrows.filter((record) => record.returned === flase).length > 0
  );
  return booksCheckedOut.length;
}


function getMostCommonGenres(books) {
  let map = {};
  books.forEach((book) => {
    if (map[book.genre]) {;
      map[book.genre]++;
  } else {
    map[book.genre] = 1;
  }
  });
  return Object.entries(map)
  .find(([name, count]) => {
    return{
      name,
      count,
    };
  })
.sort((a, b) => b.count - a.count)
.slice(0, 5)
}

function getMostPopularBooks(books) {
  return books
  .map((book) => {
    return {name: book.title, count: book.borrows.length };
  })
  .sort((a, b) => (a.count < b.count ? 1 : -1))
  .slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  const results = authors.map((author) => {
    const names = `${author.name.first} ${author.name.last}`;
    const byAuthor = getBooksByAuthorId(books, author.id);
    const borrow = byAuthor.reduce((call, book) => call + book.borrows.length, 0)
    const newInfo = {
      name: names,
      count: borrow
    };
    return newInfo;
  })
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
