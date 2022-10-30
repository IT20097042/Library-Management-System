import React, { useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";
import Message from "../Basic/Message";

import React from "react";

export default function InsertBook() {
  const [message, setMessage] = useState("");
   [insertFormData, setFormData] = useState({
    Name: "",
    ISBN: "",
    BookAuthor: "",
  });

  const { Name, ISBN, BookAuthor } = insertFormData;

  const navigate = useNavigate();
  const [author, setAuthors] = useState([]);
  const [selectedAuthor, setSelectedAuthor] = useState("");

  insertFormData.BookAuthor = selectedAuthor;
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const insertBook = async (data) => {
    const res = await fetch("http://localhost:5000/books/insert", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await res.json();
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const regData = {
      Name,
      ISBN,
      BookAuthor,
    };

    insertBook(regData).then((res) => {
      if (res.success) {
        setMessage(res.message);
        setTimeout(() => {
          navigate("/viewBook");
        }, 1000);
      } else {
        setMessage(res.message);
      }
    });
    setFormData({
      Name: "",
      ISBN: "",
      BookAuthor: "",
    });
  };
  const fetchAuthors = async () => {
    const res = await fetch("http://localhost:5000/authors/view");
    const data = await res.json();
    return data;
  };
  useEffect(() => {
    fetchAuthors().then((res) => {
      setAuthors(res.authorsData);
    }, []);
  });

  return (
    <div>
      <>
        <section className="heading">
          <h3>Book Registration Form</h3>
        </section>
        <center>{message ? <Message msg={message} /> : null}</center>
        <section className="form">
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label className="form-label">Book Name </label>
              <input
                type="text"
                className="form-control"
                id="Name"
                name="Name"
                value={Name}
                placeholder="Enter the Book name"
                onChange={onChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">ISBN </label>
              <input
                type="text"
                className="form-control"
                id="ISBN"
                name="ISBN"
                value={ISBN}
                placeholder="Enter the ISBN"
                onChange={onChange}
                required
              />
            </div>

            <label className="form-label">
              Select an author
              <select className="custom-select"  onChange={(e) => {
                const selectauthor = e.target.value;
                setSelectedAuthor(selectauthor);
              }} required>
                {author.length > 0
                  ? author.map((author) => (
                      <option value={author._id}>{author.FirstName}</option>
                    ))
                  : null}
              </select>
              
            </label>
            

            <div className="form-group">
              <button type="submit" className="btn btn-block">
                Submit
              </button>
            </div>
          </form>
        </section>
      </>
    </div>
  );
}
