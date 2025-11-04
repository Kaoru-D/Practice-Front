import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import { books } from './books';
import Book from './Book';

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book book={...book} {...book.id} />;
      })}
    </section>
  );
};

const Book = (props) => {
  const { img, title, author } = props.book;
  console.log(props);
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);