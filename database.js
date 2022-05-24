const books = [
  {
    ISBN: "12345BOOK",
    title: "Tesla!!!",
    pubDate: "2021-08-05",
    language: "en",
    numPage: 250,
    author: [1, 2],
    publications: [1],
    category: ["tech", "space", "education"],
  },
];

const author = [
  {
    id: 1,
    name: "Aradhana",
    books: ["12345BOOK", "secretBook"],
  },
  {
    id: 2,
    name: "ELon Musk",
    books: ["12345BOOK"],
  },
];

const publication = [
  {
    id: 1,
    name: "writex",
    books: ["12345BOOK"],
  },
];

module.exports = { books, author, publication };
