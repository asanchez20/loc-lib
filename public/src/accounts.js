
function findAccountById(accounts, id) {
  let results = accounts.find((account)=> account.id === id)
  return results
}

function sortAccountsByLastName(accounts) {
let results = accounts.sort((accountA,accountB) => (accountA.name.last > accountB.name.last ? 1 : -1))
return results
}

function getTotalNumberOfBorrows(account, books) {
  let totalAccounts = 0;
  for(let i = 0; i<books.length;i++){
  for(let j = 0; j<books[i].borrows.length;j++){
   if(account.id === books[i].borrows[j].id){
    totalAccounts += 1;
    }
    }
  }
  return totalAccounts;
}

function getBooksPossessedByAccount(account, books, authors) {
 let results = [];
 let accountMatch = [];
 books.forEach((book) => {
  const borrowed = item.borrows;
  const book = {
   id: item.id,
   title: item.title,
   genre: item.genre,
   authorId: item.authorId,
   author: {},
   borrows: {}
  };
  const {id, title, genre, authorId, author, borrows } = book;

  borrowed.forEach((borrow) => {
    if (borrow.id === account.id && borrow.returned === false) {
      results.push(book);
      accountMatch.push(borrow);
      book.borrows = accountMatch;
      book.author = authors.filter((auth) => auth.id === book.authorId)[0];
    };
  });
 })
return results;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
