/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState, useEffect } from "react";
import Livro from "../media_files/livro_2.png";
import axios from "axios";
import "../styles/style.css";

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:3000/books");
        setBooks(response.data);
      } catch (error) {
        console.error("Error in listing the books", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="books">
      {books.map((book) => (
        <div className="card">
          <img
            src={Livro}
            style={{ width: 100 }}
            className="mx-auto"
            alt={"Generic Image of a book"}
          ></img>
          <div class="card-body">
            <h5 className="card-title">Title: {book.title}</h5>
            <p className="card-text">
              Author:
              {book.author.map((author) => {
                return author;
              })}
            </p>
            <p className="card-text">ISBN: {book.isbn}</p>
            <p className="card-text">Genre:</p>
            <ul>
              {book.genre.map((genre) => (
                <li key={genre}>{genre}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;
