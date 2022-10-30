import React from "react";

import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";

import React from 'react'
import AuthorRow from "./AuthorRow";

export default function ViewAuthors() {
    const [author, setAuthor] = useState([])


const fetchAuthors =async () =>{
    const res = await fetch("http://localhost:5000/authors/view")
    const data = await res.json()
    return data;
}

useEffect(() => {
    fetchAuthors().then(res => {
        setAuthor(res.authorsData)
    }, [])
}
)
    return(
        <div>
            <h2 align='center'> Author List!! </h2>
            
                
            <h4>
                <table className="table table-striped" style={{marginTop: 20}}>
                    <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th> </th>
                        <th> </th>
                        
                        


                    </tr>
                    </thead>
                    <tbody>
                    {author.length > 0 ? (
                        (author.map((author) => (

                            <AuthorRow key={author._id} authors={author}/>


                        )))

                    ) : (<h3>No Authors </h3>)}
                    
                    </tbody>
                </table>
            </h4>
        </div>
    );
}
