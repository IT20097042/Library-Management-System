import React from "react";
import { useState, useEffect } from "react";
import { useSearchParams} from "react-router-dom";

export default function ViewBookData() {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [ Name, setName ] = useState('');
  const [ ISBN, setISBN ] = useState('');
  const [ Author, setAuthor ] = useState('');

  const fetchbookInfo = async () => {
    const res = await fetch("http://localhost:5000/books/viewbyID/"+id)
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    fetchbookInfo().then(res => {
      setName(res.bookData.Name)
      setISBN(res.bookData.ISBN)
      setAuthor(res.bookData.Author)
    });
  }, []);

  return (
    <div>
      <h2 align="center"> Book Details</h2>

      <h4>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Book Name</th>
              <th>Book ISBN</th>
              <th>Author Name</th>
            </tr>
          </thead>
          <tbody>
            
            <tr>
              <td>{Name}</td>
              <td>{ISBN}</td> 
              <td>{Author}</td>
            </tr>
          </tbody>
        </table>
      </h4>
    </div>
  );
}
