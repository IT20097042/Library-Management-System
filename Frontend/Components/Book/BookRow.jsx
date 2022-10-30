import * as React from 'react';
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

export default function BookRow({books}) {
  const navigate = useNavigate();  

  function redirectUpdatePage() {
    navigate('/updateBook/?id='+books._id)
}

    function redirectDetailedPage(){
        navigate('/dataBook/?id='+books._id)
    }
async function deleteBook(){
  if (confirm("Do you really want to Delete?")) {
      await fetch("http://localhost:5000/books/delete/"+books._id, {
      method: "DELETE",
      headers: {
          'Content-Type': 'application/json'
      },
  })
  .then(() => {
      alert("Book Deleted");
      navigate('/viewBook');
  });
  }else{
      setTimeout(() => {
          navigate('/viewBook');
      }, 1000)
  }
  
}
  return(
    <tr>
        
        <td>
            {books.Name}
        </td>
        <td>
            <Button variant="primary" onClick={redirectDetailedPage}> View Details </Button>
        </td>
        <td>
        <Button variant="warning" onClick={redirectUpdatePage}> Update </Button>
        </td>
        <td>
            <Button variant="danger" onClick={deleteBook}> Delete </Button>
        </td>
    </tr>
)
  }
  