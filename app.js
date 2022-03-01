"use strict";
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { findTitles, addBook, showTitles, findAuthors, findIds }; //add all of your function names here that you need for the node mocha tests

let library = [
  { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
  { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245,
  },
];

/**
 * Event handler to display library titles sorted alphabetically
 * @returns {undefined}
 */
function showTitles() {
  /* put all titles into an array, then sort, then join with newline and insert in textarea innerHTML */

  const titles = findTitles();

  /*need to sort and then join the titles still (e.g., someArray.join("\n")  */
  titles.sort();
  const titleString = titles.join("\n");

  let textArea = document.getElementById("displayArea");
  textArea.innerHTML = titleString;
}

/**
 *
 * @return {object} array holding all titles as elements
 */
function findTitles() {
  let titles = [];
  /*titles = [
    "Mockingjay: The Final Book of The Hunger Games",
    "The Road Ahead",
    "Walter Isaacson",
  ]; //FIX THIS!!*/

  // implement this and other functions
  for (let i = 0; i < library.length; i++) {
    let tit = library[i];
    titles.push(tit.title);
  }
  return titles;
}

/**
 * @param {string} title the book title
 * @param {string} author
 * @param {string} libraryId
 * @returns {strings}
 */
function addBook(title, author, libraryID) {
  //const title = document.getElementById("title").val;

  let newBook = {};

  newBook.title = title;

  newBook.author = author;

  newBook.libraryID = libraryID;

  library.push(newBook);

  return newBook;

  //retrieves the book title from the title textbox
  //finish the implementation -- get the author, create a book object, and add to the library array
}

/**
 *
 * @param{array} library
 * @return{array} array of book authors
 */

function findAuthors() {
  let bookAuthors = [];

  for (let i = 0; i < library.length; i++) {
    let auth = library[i];

    bookAuthors.push(auth.author);

    bookAuthors.sort();
  }

  return bookAuthors;
}

function findIds() {
  let bookIds = [];

  for (let i = 0; i < library.length; i++) {
    let id = library[i];

    bookIds.push(id.libraryID);

    bookIds.sort();
  }

  return bookIds;
}
