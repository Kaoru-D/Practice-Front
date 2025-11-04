import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const books = [
  {
    id: 1,
    img: 'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg',
    title: 'The Lean Startup',
    author: 'Eric Ries',
  },
  {
    id: 2,
    img: 'https://images-na.ssl-images-amazon.com/images/I/41as+WFrLHL._SX331_BO1,204,203,200_.jpg',
    title: 'Zero to One', 
  }];

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} book={book}></Book>;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props.book;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
}

export default BookList;