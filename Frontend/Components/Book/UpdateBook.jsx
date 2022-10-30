import React, {useState} from 'react';
import { useEffect } from 'react';
import {Link, useNavigate, useSearchParams} from "react-router-dom";
import Message from '../Basic/Message'

import React from 'react'

export default function UpdateBook() {

    const [searchParams, setSearchParams] = useSearchParams();
    const [book, setBook] = useState();

    const [message, setMessage] = useState('');

    const[Name, setBookName] = useState('');
    const[ISBN, setBookISBN] = useState('');
    var[BookAuthor, setBookAuthor] = useState('');
    

    const navigate = useNavigate();
    const [author, setAuthors] = useState([]);
    const [selectedAuthor, setSelectedAuthor] = useState("");
    const id = searchParams.get('id');

    const fetchbookInfo =async () =>{
      const res = await fetch("http://localhost:5000/books/viewbyID/"+id)
      const data = await res.json()
      return data;
  }

  BookAuthor = selectedAuthor;
  const fetchAuthors = async () => {
    const res = await fetch("http://localhost:5000/authors/view");
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    fetchAuthors().then((res) => {
      setAuthors(res.authorsData);
    }, []);

    fetchbookInfo().then(res => {
        
        setBookName(res.bookData.Name)
        setBookISBN(res.bookData.ISBN)
        setBookAuthor(res.bookData.BookAuthor)
        
        
    })
}, [])

const editBookDetails = async (data) => {
  const res = await fetch('http://localhost:5000/books/update/'+id, {
      method : "PUT",
      headers : {
          'Content-type' : 'application/json',
      },
      body : JSON.stringify(data)
  })
  return await res.json() 
}

const onSubmit = (e)=> {
  e.preventDefault()

  const updateData ={
      Name ,
      ISBN ,
      BookAuthor
  }

  editBookDetails(updateData).then(res => {
      if(res.success){
          setMessage(res.message)
          setTimeout(() => {
              navigate('/viewBook');
          }, 1000)
      }
  }

  )
  
}
  return (
    <div>
      <>
        <section className="heading">
          <h3>Book Details Update</h3>
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
                onChange={(e) => setBookName(e.target.value)}
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
                onChange={(e) => setBookISBN(e.target.value)}
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
                      <option defaultValue={BookAuthor} value={author._id}>{author.FirstName}</option>
                    ))
                  : null}
              </select>
              {}
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
  )
}
