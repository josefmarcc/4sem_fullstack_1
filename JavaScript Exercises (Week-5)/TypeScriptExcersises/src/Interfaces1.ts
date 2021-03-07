let http = require("http");

interface IBook {
  title: string;
  author: string;
  published: Date;
  pages: number;
}

function printBook(bookObj: IBook) {
  console.log(
    `Title: ${bookObj.title}, \nAuthor: ${bookObj.author}, \nPublished: ${bookObj.published}, \nPages: ${bookObj.pages} `
  );
}

let myBook = {
  title: "Learn JS",
  author: "Lars",
  published: new Date(),
  pages: 23,
};

printBook(myBook);
