import * as React from 'react';
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

import React from 'react'

export default function AuthorRow({authors}) {
    const navigate = useNavigate();  

  function redirectUpdatePage() {
    navigate('/updateAuthor/?id='+authors._id)
}
async function deleteAuthor(){
    if (confirm("Do you really want to Delete?")) {
        await fetch("http://localhost:5000/authors/delete/"+authors._id, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(() => {
        alert("Author Deleted");
        navigate('/viewAuthor');
    });
    }else{
        setTimeout(() => {
            navigate('/viewAuthor');
        }, 1000)
    }
    
  }
    return(
      <tr>
          
          <td>
              {authors.FirstName}
          </td>
          <td>
              {authors.LastName}
          </td>
          
          <td>
          <Button variant="warning" onClick={redirectUpdatePage}> Update </Button>
          </td>
          <td>
              <Button variant="danger" onClick={deleteAuthor}> Delete </Button>
          </td>
      </tr>
  )
    }
    