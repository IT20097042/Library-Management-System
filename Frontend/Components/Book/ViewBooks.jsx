import React from "react";
import { ImNext, ImPrevious } from "react-icons/im";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BookRow from "./BookRow";

function ViewBooks(props) {
  const [book, setBook] = useState([]);
  const [page, setPage] = useState(1);

  function next() {
    setPage(page + 1);
  }
  function previous() {
    setPage(page - 1);
  }
  var url = "http://localhost:5000/books/view?page=" + page + "&limit=5";
  const fetchBooks = async () => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    fetchBooks().then((res) => {
      setBook(res.bookData);
    }, []);
  });
  return (
    <div>
      <h2 align="center"> Available Book List!! </h2>

      <h4>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Book Name</th>
              <th></th>
              <th> </th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {book.length > 0 ? (
              book.map((book) => <BookRow key={book._id} books={book} />)
            ) : (
              <h3>No Available books </h3>
            )}
          </tbody>
        </table>
      </h4>
      <center>
        <ImPrevious size={30} onClick={previous} />{" "}
        <ImNext size={30} onClick={next} />{" "}
      </center>
    </div>
  );
}

export default ViewBooks;
