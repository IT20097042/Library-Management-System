import React from "react";

import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import BookRow from "./BookRow";


function ViewBooks(props){
    
    const [book, setBook] = useState([])


const fetchBooks =async () =>{
    const res = await fetch("http://localhost:5000/books/view")
    const data = await res.json()
    return data;
}

useEffect(() => {
    fetchBooks().then(res => {
        setBook(res.bookData)
    }, [])
}
)
    return(
        <div>
            <h2 align='center'> Available Book List!! </h2>
            
                
            <h4>
                <table className="table table-striped" style={{marginTop: 20}}>
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
                        (book.map((book) => (

                            <BookRow key={book._id} books={book}/>


                        )))

                    ) : (<h3>No Available books </h3>)}
                    
                    </tbody>
                </table>
            </h4>
        </div>
    );
}

export default ViewBooks;