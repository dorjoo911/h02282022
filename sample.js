// "use strict";

const { arrayBuffer } = require("stream/consumers");

// let library = [
//   { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
//   { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
//   {
//     title: "Mockingjay: The Final Book of The Hunger Games",
//     author: "Suzanne Collins",
//     libraryID: 3245,
//   },
// ];
// /**
//  *
//  * @param {Array} libBooks
//  * @returns {Array} ordered array
//  */
// function findAuthors(obj) {
//   let autors = [];

//   for (let i = 0; i < obj.length; i++) {
//     let people = obj[i];
//     autors.push(people.autor);
//   }

//   return autors;
// }

// console.log(findAuthors());

const gradeReport = { s101: 3, s102: 2, s103: 3 };

function getProperties(obj) {
  let array = [];

  for (let el in obj) {
    array.push(el);
  }

  return array;
}
console.log(getProperties(gradeReport));
